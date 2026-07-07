const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const { getMessaging } = require('firebase-admin/messaging');
const { onValueCreated } = require('firebase-functions/v2/database');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { logger } = require('firebase-functions');

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
