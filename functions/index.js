const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const { getMessaging } = require('firebase-admin/messaging');
const { onValueCreated } = require('firebase-functions/v2/database');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { logger } = require('firebase-functions');
const Stripe = require('stripe');

initializeApp();

// Sends to every registered device in a group, then prunes tokens FCM reports as dead
// (app uninstalled, notification permission revoked, etc.) so the token list doesn't grow stale.
async function sendToGroup(code, notification) {
  const db = getDatabase();
  const snap = await db.ref(`groups/${code}/pushTokens`).once('value');
  const tokensByUid = snap.val() || {};
  const uids = Object.keys(tokensByUid);
  const tokens = uids.map(uid => tokensByUid[uid]).filter(Boolean);
  if (!tokens.length) return;

  const resp = await getMessaging().sendEachForMulticast({ tokens, notification });
  const deadUids = [];
  resp.responses.forEach((r, i) => {
    const code = r.error?.code;
    if (!r.success && (code === 'messaging/invalid-registration-token' || code === 'messaging/registration-token-not-registered')) {
      deadUids.push(uids[i]);
    }
  });
  await Promise.all(deadUids.map(uid => db.ref(`groups/${code}/pushTokens/${uid}`).remove()));
}

const ALERT_LABELS = { hazard: '⚠️ Hazard', closure: '🚧 Closure', weather: '⛈️ Weather Alert', incident: '🚨 Incident' };

exports.onAlertCreated = onValueCreated('/groups/{code}/alerts/{alertId}', async (event) => {
  const alert = event.data.val();
  if (!alert || !alert.active) return;
  const title = ALERT_LABELS[alert.type] || '⚠️ Alert';
  await sendToGroup(event.params.code, { title, body: alert.message || 'Check the app for details.' });
});

exports.onAnnouncementCreated = onValueCreated('/groups/{code}/announcements/{id}', async (event) => {
  const announcement = event.data.val();
  if (!announcement || !announcement.text) return;
  await sendToGroup(event.params.code, { title: '📢 Announcement', body: announcement.text });
});

// Polls every minute for organizer-configured (real-timed) schedule entries starting in ~5
// minutes and pushes a reminder to attendees who tapped "Notify me". The built-in demo lineup
// deliberately has no scheduleConfig node in Firebase at all — its timing is relative to each
// attendee's own page load and only ever exists client-side — so there is nothing for a
// server-side scan to find there, and that's intentional, not a gap.
exports.scheduledReminders = onSchedule('every 1 minutes', async () => {
  const db = getDatabase();
  const groupsSnap = await db.ref('groups').once('value');
  const groups = groupsSnap.val() || {};
  const now = Date.now();

  for (const code of Object.keys(groups)) {
    const entries = groups[code]?.scheduleConfig?.entries;
    if (!Array.isArray(entries)) continue;
    const subs = groups[code].scheduleNotifySubs || {};
    const sent = groups[code].remindersSent || {};

    for (const entry of entries) {
      if (!entry?.id || !entry.startTs || sent[entry.id]) continue;
      const minutesOut = (entry.startTs - now) / 60000;
      if (minutesOut <= 4 || minutesOut > 5) continue;

      const subscriberUids = Object.keys(subs[entry.id] || {});
      const tokens = subscriberUids.map(uid => groups[code].pushTokens?.[uid]).filter(Boolean);
      if (tokens.length) {
        await getMessaging().sendEachForMulticast({
          tokens,
          notification: { title: '🎤 Starting soon', body: `${entry.artist} starts in 5 min!` },
        }).catch(err => logger.error('scheduledReminders push failed', err));
      }
      await db.ref(`groups/${code}/remindersSent/${entry.id}`).set(true);
    }
  }
});

// ── REAL PAYMENTS (Stripe Checkout) ──────────────────────────────────────────────────────
// Config needed before deploy: `firebase functions:secrets:set STRIPE_SECRET_KEY` and
// `STRIPE_WEBHOOK_SECRET` (from the Stripe Dashboard's webhook endpoint for
// checkout.session.completed, pointed at this function's deployed URL). The client only ever
// sees the publishable key (index.html's STRIPE_PUBLISHABLE_KEY) — never the secret keys below.
const stripeSecretKey = defineSecret('STRIPE_SECRET_KEY');
const stripeWebhookSecret = defineSecret('STRIPE_WEBHOOK_SECRET');

// Fallback pricing for the built-in demo catalog/menu (mirrors index.html's DEFAULT_PRODUCTS /
// DEFAULT_FOOD_VENDORS) — used only when an event has no organizer-configured merchConfig/
// foodConfig in Firebase yet, so checkout works against the demo data too, not just custom events.
const DEFAULT_PRODUCT_PRICING = {
  p1:{name:'Horizon Tee',price:35}, p2:{name:'Festival Hoodie',price:65}, p3:{name:'Sunset Cap',price:28},
  p4:{name:'Glow Wristband',price:12}, p5:{name:'Horizon Vinyl LP',price:40}, p6:{name:'Limited Drop Tee',price:45},
};
const DEFAULT_FOOD_VENDOR_NAMES = {v1:'Thai Basil',v2:'Taco Loco',v3:'Burger Barn',v4:'Green Bowl',v5:'Sweet Tooth'};
const DEFAULT_FOOD_MENU_PRICING = {
  v1:[{item:'Pad Thai',price:14},{item:'Green Curry (Tofu)',price:15},{item:'Spring Rolls',price:8}],
  v2:[{item:'Carne Asada Tacos (3)',price:12},{item:'Veggie Bowl',price:11}],
  v3:[{item:'Classic Cheeseburger',price:13},{item:'Loaded Fries',price:9}],
  v4:[{item:'Buddha Bowl',price:13},{item:'Quinoa Salad',price:11}],
  v5:[{item:'Soft Serve',price:6},{item:'Churros',price:7}],
};

async function lookupMerchProduct(code, productId) {
  const snap = await getDatabase().ref(`groups/${code}/merchConfig/products`).once('value');
  const products = snap.val();
  if (Array.isArray(products)) {
    const p = products.find(x => x.id === productId);
    if (p) return { name: p.name, price: p.price };
  }
  return DEFAULT_PRODUCT_PRICING[productId] || null;
}
async function lookupFoodItem(code, vendorId, itemIdx) {
  const snap = await getDatabase().ref(`groups/${code}/foodConfig/vendors`).once('value');
  const vendors = snap.val();
  if (Array.isArray(vendors)) {
    const v = vendors.find(x => x.id === vendorId);
    if (v?.menu?.[itemIdx]) return { vendorName: v.name, item: v.menu[itemIdx].item, price: v.menu[itemIdx].price };
  }
  const fallbackMenu = DEFAULT_FOOD_MENU_PRICING[vendorId];
  if (fallbackMenu?.[itemIdx]) {
    return { vendorName: DEFAULT_FOOD_VENDOR_NAMES[vendorId] || vendorId, item: fallbackMenu[itemIdx].item, price: fallbackMenu[itemIdx].price };
  }
  return null;
}

// Callable from the client (index.html's confirmReserve/preOrderItem). Looks up the
// authoritative price server-side rather than trusting a client-supplied amount.
exports.createCheckoutSession = onCall({ secrets: [stripeSecretKey] }, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Must be signed in.');
  const { code, kind, productId, vendorId, itemIdx, size, color, successUrl, cancelUrl } = request.data || {};
  if (!code || !kind) throw new HttpsError('invalid-argument', 'Missing code/kind.');
  const stripe = new Stripe(stripeSecretKey.value());

  let lineItem, metadata;
  if (kind === 'merch') {
    const product = await lookupMerchProduct(code, productId);
    if (!product) throw new HttpsError('not-found', 'Product not found.');
    lineItem = { price_data: { currency: 'usd', product_data: { name: product.name }, unit_amount: Math.round(product.price * 100) }, quantity: 1 };
    metadata = { kind: 'merch', code, productId, uid: request.auth.uid, name: product.name, size: size || '', color: color || '' };
  } else if (kind === 'food') {
    const foodItem = await lookupFoodItem(code, vendorId, itemIdx);
    if (!foodItem) throw new HttpsError('not-found', 'Menu item not found.');
    lineItem = { price_data: { currency: 'usd', product_data: { name: `${foodItem.item} (${foodItem.vendorName})` }, unit_amount: Math.round(foodItem.price * 100) }, quantity: 1 };
    metadata = { kind: 'food', code, vendorId, vendorName: foodItem.vendorName, item: foodItem.item, price: String(foodItem.price), uid: request.auth.uid };
  } else {
    throw new HttpsError('invalid-argument', 'Unknown kind.');
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [lineItem],
    metadata,
    success_url: successUrl || 'https://example.com/success',
    cancel_url: cancelUrl || 'https://example.com/cancel',
  });
  return { url: session.url };
});

// Stripe webhook — the source of truth for order creation. Deliberately does NOT trust the
// client's success redirect (which could be spoofed or skipped); only a verified webhook event
// decrements stock and writes the order, mirroring what confirmReserve/preOrderItem used to do
// directly from the client before payments existed.
exports.stripeWebhook = onRequest({ secrets: [stripeSecretKey, stripeWebhookSecret] }, async (req, res) => {
  const stripe = new Stripe(stripeSecretKey.value());
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, req.headers['stripe-signature'], stripeWebhookSecret.value());
  } catch (err) {
    logger.error('Stripe webhook signature verification failed', err);
    res.status(400).send('Webhook Error');
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const md = session.metadata || {};
    const db = getDatabase();
    const pickupCode = Math.random().toString(36).slice(2, 8).toUpperCase();

    if (md.kind === 'merch') {
      await db.ref(`groups/${md.code}/merchStock/${md.productId}`).transaction(cur => (cur == null ? 0 : Math.max(0, cur - 1)));
      await db.ref(`groups/${md.code}/merchOrders/${md.uid}`).push({
        productId: md.productId, name: md.name, size: md.size || null, color: md.color || null,
        price: (session.amount_total || 0) / 100, ts: Date.now(), pickupCode, status: 'reserved', paid: true,
      });
    } else if (md.kind === 'food') {
      await db.ref(`groups/${md.code}/foodOrders/${md.uid}`).push({
        vendorId: md.vendorId, vendorName: md.vendorName, item: md.item, price: parseFloat(md.price),
        ts: Date.now(), pickupCode, status: 'preparing', paid: true,
      });
    }
  }

  res.json({ received: true });
});
