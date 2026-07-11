# 🏗️ Glyde — Technical Architecture & Build Roadmap

---

## Tech Stack Decision

### Current (Prototype)
- Single-file HTML/CSS/JavaScript
- Firebase Realtime Database (live location)
- GitHub Pages (hosting)
- Canvas API (map rendering)

### Target (Production)
| Layer | Technology | Reason |
|---|---|---|
| Frontend (App) | React Native | One codebase for iOS and Android |
| Frontend (Web/PWA) | React (Next.js) | Fast web version, PWA support |
| Maps | Mapbox SDK | Custom venue maps, offline support, affordable |
| Backend | Node.js + Express | API layer between app and Firebase |
| Real-time DB | Firebase Realtime Database | Live location, reports, chat |
| Main DB | Firestore | User profiles, events, orders, XP |
| Auth | Firebase Auth | Anonymous login + phone/email sign-in |
| Payments | Stripe | Order processing, vendor payouts |
| Push Notifications | Firebase Cloud Messaging (FCM) | Cross-platform, free |
| File Storage | Firebase Storage | Photos in chat, menu images |
| Hosting | Firebase Hosting + Vercel | Fast global CDN |
| Analytics | Mixpanel or Amplitude | Product analytics |
| Error Monitoring | Sentry | Catch bugs in production |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   ATTENDEE APP                      │
│          (React Native — iOS & Android)             │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│                  GLYDE API                          │
│             (Node.js + Express)                     │
│  • Auth  • Orders  • XP  • Reports  • Schedule      │
└──────┬─────────────┬──────────────┬─────────────────┘
       │             │              │
┌──────▼───┐  ┌──────▼───┐  ┌──────▼────────────────┐
│ Firebase  │  │Firestore │  │      Stripe            │
│ Realtime │  │(profiles,│  │  (payments, payouts)   │
│(location,│  │orders,XP,│  └────────────────────────┘
│ reports, │  │events)   │
│  chat)   │  └──────────┘
└──────────┘
       │
┌──────▼────────────────────────────────────────────┐
│                VENUE DASHBOARD                     │
│          (React Web App — browser)                 │
│  Reports · Orders · Analytics · Announcements      │
└────────────────────────────────────────────────────┘
```

---

## The Hardest Engineering Problems

### 1. Venue Map Creation
**The problem:** Every venue is unique. There is no standard format for a festival site map.

**The solution (in order of complexity):**
- **Stage 1 (now):** Glyde team manually creates the map for each venue using a simple admin tool. Works for a small number of venues.
- **Stage 2:** Build a self-service map builder web tool — venue uploads an image of their site plan, then drags and drops POIs onto it. Glyde handles the coordinate system.
- **Stage 3:** Professional survey tools (like what Google uses) for large venues. Very expensive — not needed early.

**Recommendation:** Start with manual setup. Charge a small setup fee. Build the self-service tool once you have 10+ venues and the patterns are clear.

### 2. GPS Indoors
**The problem:** GPS doesn't work well indoors. Accuracy drops to 10–30 metres, which is useless for indoor navigation.

**The solutions:**
- **Bluetooth beacons (BLE):** Small devices placed around the venue that the phone triangulates position from. Accuracy: 1–3 metres. Cost: £20–£50 per beacon, need 20–50 for a medium venue. Best solution.
- **WiFi positioning:** Uses WiFi access points the venue already has. Less accurate but cheaper. Works in arenas.
- **UWB (Ultra Wideband):** Used in AirTags. Very accurate (10cm). Requires special hardware. Expensive.
- **For outdoor festivals:** Standard GPS works fine. This problem mainly affects indoor arenas.

**Recommendation:** Start with GPS-only (outdoor festivals). Add BLE beacon support later when targeting indoor venues.

### 3. Cell Signal at Festivals
**The problem:** When 10,000 people are in one field, cell towers get overwhelmed. The app must work with degraded or no connectivity.

**The solutions:**
- **Offline map caching:** Download map tiles when joining venue (on WiFi or good signal). Navigation works without data.
- **Service Worker (PWA):** Cache the entire app so it runs offline.
- **Queue and sync:** Reports and messages queue locally and send when signal returns.
- **Bluetooth mesh (advanced):** Phones relay location to each other peer-to-peer without cell towers. Complex to build but very powerful.

**Recommendation:** Offline map caching first. Queue-and-sync for reports. Bluetooth mesh as a future premium feature.

### 4. Scaling Location Updates
**The problem:** At a 20,000-person event, if every phone pushes its location every 3 seconds, that is 6,666 database writes per second.

**The solutions:**
- Only push location when it changes significantly (moved more than 10 metres)
- Reduce polling frequency when stationary (every 30 seconds vs every 3 seconds)
- Battery saver mode: every 60 seconds
- Firebase handles horizontal scaling, but it costs money at scale

---

## Build Roadmap

### Stage 0 — What We Have Now ✅
- Interactive venue map (Canvas API, demo data)
- Firebase live location sharing between users
- Group chat with venue channels and DMs
- Issue reporting panel
- Manager dashboard with report management
- GPS integration (demo-level)
- GitHub Pages hosting
- Live at: https://05executor05.github.io/Glyde

---

### Stage 1 — Make It Real (Weeks 1–6)
**Goal:** Something you can put in front of a real venue and run a real pilot with.

- [ ] Real GPS coordinates mapped to actual venue boundaries
- [ ] QR code generation for venue joining
- [ ] Firebase chat sync (messages persist and sync across devices)
- [ ] Push notifications (reports resolved, SOS, group alerts)
- [ ] Firebase reports sync (attendee report → manager dashboard in real time)
- [ ] PWA install support (Add to Home Screen)
- [ ] App icon and splash screen
- [ ] Basic venue onboarding flow (create event, generate code)

---

### Stage 2 — Core Product (Weeks 7–14)
**Goal:** Full attendee and venue experience working end to end.

- [ ] Complete venue map builder (self-service)
- [ ] Event schedule (add/edit acts, stage times, notifications)
- [ ] Group "Meet Here" feature
- [ ] Friend battery percentage
- [ ] Photo sharing in chat
- [ ] Emergency contact and SOS flow
- [ ] Staff role system (security, medical, general, vendor)
- [ ] Announcements (venue posts to all attendees)
- [ ] Memories — timeline and photo collection
- [ ] Post-event recap card (shareable)

---

### Stage 3 — Revenue Features (Weeks 15–22)
**Goal:** First paying transaction through the app.

- [ ] Vendor menu builder (add items, photos, prices)
- [ ] Food ordering flow (browse, add to cart, pay)
- [ ] Stripe integration (attendee payment, vendor payout)
- [ ] Unique collection code generation
- [ ] Order status tracking (Received → Preparing → Ready)
- [ ] Vendor dashboard (accept/reject/complete orders)
- [ ] WhatsApp Business API integration for vendor notifications
- [ ] Merchandise ordering (same flow as food)
- [ ] Analytics dashboard (basic — live attendee count, reports summary, order volume)

---

### Stage 4 — Engagement & Retention (Weeks 23–30)
**Goal:** Features that make users come back to every event.

- [ ] XP system (earn XP for actions throughout the event)
- [ ] Badge system (all badges listed in feature spec)
- [ ] Festival Passport (permanent XP profile across events)
- [ ] Venue and global leaderboards
- [ ] Quests system
- [ ] Sponsored quests (brand integration)
- [ ] Events history (past events with memories, XP, chat)
- [ ] Premium Passport (paid XP boost)
- [ ] Drink tracker (optional, personal)
- [ ] Ride home integration (Uber/Bolt)

---

### Stage 5 — Scale & Enterprise (Weeks 31–45)
**Goal:** Ready to pitch major festivals and enterprise deals.

- [ ] Full analytics dashboard (all metrics in business model doc)
- [ ] Exportable post-event PDF report
- [ ] White-label capability (custom branding per venue)
- [ ] POS system integration (Square, Lightspeed)
- [ ] Multi-day event support
- [ ] Group order feature (one order from multiple people)
- [ ] Advanced crowd heatmap with density alerts
- [ ] Escalation system for unresolved reports
- [ ] BLE beacon support (indoor positioning)
- [ ] Offline mode (full map caching, queue-and-sync)
- [ ] NFC wristband joining

---

### Stage 6 — Native Apps (Weeks 45–60)
**Goal:** App Store presence. Professional credibility.

- [ ] Convert to React Native (iOS + Android)
- [ ] App Store submission (Apple)
- [ ] Google Play submission
- [ ] App Store optimisation (ASO)
- [ ] Native push notifications
- [ ] Native GPS and Bluetooth

---

## Technology Decisions — Why Each Choice

### Why Firebase?
- Real-time database built for this exact use case (live location, live updates)
- Scales automatically — 10 users or 100,000 users, same code
- Generous free tier — protects early-stage budget
- Authentication included — anonymous login with no friction
- Already set up: glyde-9cce8

### Why Mapbox over Google Maps?
- Cheaper at scale (Google Maps gets expensive fast)
- Fully customisable — venue map overlays look exactly how you want
- Offline support built in (crucial for festivals)
- Better developer tools for custom map experiences

### Why Stripe?
- Best marketplace payment support (split payments to vendors)
- Global coverage (expand beyond UK easily)
- Strong fraud detection
- Developer-friendly API
- Trusted by attendees (Apple Pay, Google Pay support)

### Why React Native?
- One codebase for iOS and Android
- Significantly cheaper than building two separate native apps
- Large developer community and libraries
- Good enough performance for everything Glyde needs
- Easy to hire developers for

---

## Security Considerations [Claude Suggestion]

- All location data encrypted in transit (HTTPS/TLS)
- Firebase security rules prevent users reading other groups' data
- SOS alerts use a confirmed action (cannot be accidentally triggered)
- Venue staff roles are server-verified, not client-side
- Payment handled entirely by Stripe — Glyde never stores card data
- GDPR compliance:
  - Clear privacy policy at join
  - Location data deleted after event ends (30 days)
  - User can download or delete their data
  - Anonymised before any analytics use
- Emergency contact data encrypted at rest
- Photo storage with access control (only group members can see)

---

## Infrastructure Costs (Estimates)

| Service | Free Tier | Paid (from) |
|---|---|---|
| Firebase Realtime DB | 1GB storage, 10GB/month transfer | $25/month for 5GB |
| Firestore | 1GB storage, 50k reads/day | $0.06 per 100k reads |
| Firebase Auth | 10k/month | Free up to 10k |
| Firebase Hosting | 10GB storage, 360MB/day | $0.026/GB transfer |
| Stripe | No monthly fee | 1.4% + 20p per transaction (UK) |
| Mapbox | 50k map loads/month | $0.50 per 1,000 loads after |
| Vercel (hosting) | Generous free tier | $20/month Pro |

**At early stage (under 10 events/month):** Total infrastructure cost < £50/month  
**At scale (100+ events/month):** Estimate £500–£2,000/month — covered by revenue
