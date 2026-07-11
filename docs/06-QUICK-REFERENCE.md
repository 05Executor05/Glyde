# ⚡ Glyde — Quick Reference

---

## Key Links

| Resource | URL |
|---|---|
| Live app (demo) | https://05executor05.github.io/Glyde |
| Attendee app | https://05executor05.github.io/Glyde/index.html |
| Manager dashboard | https://05executor05.github.io/Glyde/manager.html |
| GitHub repo | https://github.com/05Executor05/Glyde |
| Firebase console | https://console.firebase.google.com/project/glyde-9cce8 |

---

## Files in the Repo

| File | What it is |
|---|---|
| `index.html` | Main unified attendee app (map + chat + reports) |
| `manager.html` | Venue manager dashboard |
| `festival-nav.html` | Earlier standalone map prototype |
| `glyde-3d-map.html` | 3D map with Firebase (earlier version) |
| `groundmap-chat.html` | Standalone chat prototype |
| `README.md` | Project overview |
| `docs/` | This documentation folder |

---

## Firebase Config

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDocnNn4xfEGcOZWS5mreGx5bvVAEO0TSw",
  authDomain: "glyde-9cce8.firebaseapp.com",
  databaseURL: "https://glyde-9cce8-default-rtdb.firebaseio.com",
  projectId: "glyde-9cce8",
  storageBucket: "glyde-9cce8.firebasestorage.app",
  messagingSenderId: "395299315354",
  appId: "1:395299315354:web:c219f13a88232d2bed4923"
};
```

---

## Design System

| Token | Value | Use |
|---|---|---|
| Background | `#07070f` | App background |
| Surface | `#11111c` | Cards, panels |
| Surface 2 | `#181826` | Input fields, chips |
| Border | `#252538` | Dividers, outlines |
| Accent | `#7c3aed` | Primary purple |
| Neon | `#a78bfa` | Light purple, highlights |
| Green | `#10b981` | Live, online, success |
| Amber | `#f59e0b` | Warning, demo mode |
| Red | `#ef4444` | Emergency, error |
| Text | `#f0efff` | Primary text |
| Muted | `#6060a0` | Secondary text, labels |
| Font Body | Space Grotesk | All body text |
| Font Mono | Space Mono | Codes, numbers, labels |

---

## Current Feature Status

### ✅ Done
- Interactive venue map (Canvas API)
- POIs: stages, toilets, water, food, medical
- Walkway paths
- Firebase live location sharing
- Join screen (emoji avatar, name, group code)
- Create/join group with code
- Friend pins with glow and name tags
- Navigate to friend (route line + direction arrow)
- Compass
- Zoom/pan map controls
- Venue channels (main, lost & found, tips)
- Group chat
- Direct messages
- Hamburger drawer for channel switching (mobile)
- Emoji reactions
- Typing indicator
- Location sharing in chat
- Unread badges
- Issue reporting (6 types)
- Emergency panic button
- Group code copy/share
- Manager dashboard login
- Manager map with report pins
- Report cards (assign, resolve)
- Filter reports by type
- Staff assignment modal
- Live stats bar (attendees, open/resolved reports)
- Manager analytics basics

### 🔲 Next to Build (Stage 1)
- Real GPS to venue coordinates mapping
- Firebase chat sync
- Firebase reports sync (attendee → manager)
- Push notifications
- PWA install + app icon
- QR code joining

### 🔲 Planned (Stage 2+)
- Food ordering + Stripe
- XP / Passport system
- Memories + recap
- Schedule management
- Offline mode
- React Native native apps

---

## Frequently Asked Questions

**Q: Why not just use WhatsApp for group chat?**  
A: WhatsApp has no venue map, no food ordering, no reporting system, no venue analytics, no XP, and no in-event context. Glyde is purpose-built for the inside of an event. WhatsApp is a generic messaging app.

**Q: Won't venues just build their own app?**  
A: Building a custom app costs £50,000–£200,000 and takes 6–12 months. Glyde costs £300–£4,500 per event and is ready in days. For most venues, Glyde is not just better — it's the only option.

**Q: What if there's no signal at the festival?**  
A: Offline mode (planned for Stage 5) will cache the map and queue reports/messages until signal returns. In the interim, the map works on GPS without data.

**Q: How does a venue create their map?**  
A: Currently, the Glyde team creates the map manually for each venue during onboarding (takes 1–2 hours). A self-service map builder is planned for Stage 2.

**Q: Is attendee location data safe?**  
A: Location is only shared within your chosen friend group. It is not visible to the venue (only aggregate heatmap is). Data is deleted after the event. Glyde is GDPR compliant.

**Q: What does the attendee pay?**  
A: Nothing to use the core app. Optionally £2.99 for Premium Passport per event. Food and merch orders are at standard price — there is no Glyde surcharge visible to the attendee.

**Q: How do vendors get paid?**  
A: Stripe processes all payments. Vendors receive their payout (minus Glyde commission) after the event or weekly. Full payment report provided.

---

## Glossary

| Term | Meaning |
|---|---|
| **POI** | Point of Interest — a location on the map (stage, toilet, food stall, etc.) |
| **Group code** | The unique code attendees use to join a friend group |
| **Event code** | The unique code to join a venue/event on Glyde |
| **XP** | Experience Points — earned through actions in the app |
| **Passport** | The user's permanent XP profile and badge collection |
| **Meet Here** | Feature to drop a pin and direct your group to converge there |
| **SOS** | Emergency button that alerts venue security and personal emergency contact |
| **Firebase** | Google's backend platform used for real-time data sync |
| **PWA** | Progressive Web App — runs in the browser but installs like a native app |
| **Mapbox** | Map platform used for custom venue map rendering |
| **Stripe** | Payment processor handling all in-app transactions |
| **GMV** | Gross Merchandise Value — total value of orders processed through the app |
| **B2B** | Business to Business — Glyde's venue/organiser product |
| **B2C** | Business to Consumer — Glyde's attendee product |
| **White-label** | A version of Glyde with custom branding for a specific venue |
| **BLE** | Bluetooth Low Energy — used for indoor positioning with beacons |
| **NFC** | Near Field Communication — used for wristband tap-to-join |

---

## Continuing Development with Claude

When starting a new conversation with Claude to continue building Glyde, paste this context:

---
*"I'm building a festival navigation app called Glyde. The code lives at https://github.com/05Executor05/Glyde. The live demo is at https://05executor05.github.io/Glyde. The full product spec is in the /docs folder of the repo. Firebase project: glyde-9cce8. The app has a unified attendee experience (map, chat, reports) in index.html and a venue manager dashboard in manager.html. I want to continue building [DESCRIBE WHAT YOU WANT TO BUILD]."*

---

## Document Index

| Doc | Contents |
|---|---|
| `01-PRODUCT-OVERVIEW.md` | What Glyde is, who it's for, how it works |
| `02-FEATURE-SPEC.md` | Every feature in detail, including Claude Suggestions |
| `03-BUSINESS-MODEL.md` | Revenue streams, pricing, financial projections |
| `04-GO-TO-MARKET.md` | How to get first venues, sales process, marketing |
| `05-TECH-AND-ROADMAP.md` | Tech stack, architecture, build stages |
| `06-QUICK-REFERENCE.md` | This file — links, status, FAQ, glossary |
