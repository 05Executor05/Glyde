# 🗺️ Glyde — Festival Navigation App

A venue intelligence platform built for music festivals and large gatherings.

## What Is Glyde?

Glyde gives festival attendees real-time friend tracking, interactive venue maps, community chat, and a direct reporting line to venue managers — all in one place.

## Files

| File | Description |
|---|---|
| `index.html` | Unified attendee app — live map, friend tracking, chat, and venue reporting (Firebase-backed) |
| `manager.html` | Venue manager dashboard — live report feed, staff assignment, attendee/alert stats |
| `festival-nav.html` | Early standalone map prototype (superseded by `index.html`) |
| `groundmap-chat.html` | Early standalone chat prototype (superseded by `index.html`) |
| `glyde-3d-map.html` | Early standalone 3D map prototype (superseded by `index.html`) |

## How to Run

1. Download any `.html` file
2. Open it directly in Chrome, Safari, or Firefox
3. No install, no dependencies needed

Live: https://05executor05.github.io/Glyde

## Built With

- Vanilla HTML / CSS / JavaScript
- Firebase Realtime Database (live location, chat presence, venue reports)
- Canvas API (map rendering)
- Space Grotesk + Space Mono fonts
- Built entirely with Claude (Anthropic)

## Roadmap

Building in phase order below, on top of the existing `index.html`/`manager.html` (vanilla HTML/JS + Firebase), not a from-scratch native rewrite — see [Status](#status) for what's already shipped per phase.

Phase 0 – Foundation
Objective:
Complete this phase before moving to the next.
1.	Set up design system (colors, typography, spacing, icons).
2.	Create reusable UI components (buttons, cards, bottom sheets, chips, dialogs).
3.	Set up navigation architecture.
4.	Configure authentication and user profiles.
5.	Implement theme support and responsive layouts.
6.	Create loading, empty, and error states.
7.	Implement analytics/event logging.
8.	Add offline storage foundation.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 1 – Navigation
Objective:
Complete this phase before moving to the next.
9.	Interactive map with zoom/pan.
10.	User location (blue dot).
11.	Compass & recenter.
12.	Venue markers by category.
13.	Bottom sheet for venue details.
14.	Turn-by-turn navigation.
15.	Estimated distance/time.
16.	Route recalculation.
17.	Indoor floor switching.
18.	Favorite places.
19.	Share destination.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 2 – Search & Discovery
Objective:
Complete this phase before moving to the next.
20.	Universal search.
21.	Autocomplete.
22.	Recent searches.
23.	Popular searches.
24.	Category filters.
25.	Map layer toggles.
26.	Voice search (optional).
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 3 – Friends
Objective:
Complete this phase before moving to the next.
27.	Friend list.
28.	Friend requests.
29.	Live location sharing.
30.	Battery indicator.
31.	Navigate to friend.
32.	Meeting point creation.
33.	Meeting invitations.
34.	Arrival status.
35.	Temporary location sharing.
36.	Privacy controls.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 4 – Chat
Objective:
Complete this phase before moving to the next.
37.	Direct messages.
38.	Group chats.
39.	Typing indicators.
40.	Read receipts.
41.	Emoji reactions.
42.	Image sharing.
43.	Live location sharing.
44.	Reply/forward.
45.	Stage chat channels.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 5 – Reports
Objective:
Complete this phase before moving to the next.
46.	Report categories.
47.	Auto GPS.
48.	Photo upload.
49.	Video upload.
50.	Voice notes.
51.	Priority levels.
52.	Report status tracking.
53.	Organizer dashboard integration.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 6 – Crowd Intelligence
Objective:
Complete this phase before moving to the next.
54.	Crowd heatmap.
55.	Queue times.
56.	Crowd density labels.
57.	Temporary hazards.
58.	Closed routes.
59.	Weather alerts.
60.	Alternative routing.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 7 – Event Companion
Objective:
Complete this phase before moving to the next.
61.	Event schedule.
62.	Artist pages.
63.	Bookmarks.
64.	Reminder notifications.
65.	Current performer banner.
66.	Stage occupancy.
67.	Setlist prediction placeholder.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 8 – Merchandise
Objective:
Complete this phase before moving to the next.
68.	Merchandise home.
69.	Categories.
70.	Product page.
71.	Variants (size/color).
72.	Inventory status.
73.	Reserve item.
74.	Pickup QR.
75.	Order history.
76.	Notifications for drops.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 9 – Food
Objective:
Complete this phase before moving to the next.
77.	Vendor list.
78.	Cuisine filters.
79.	Dietary tags.
80.	Menus.
81.	Ratings.
82.	Queue estimates.
83.	Pre-order.
84.	Navigation to vendor.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 10 – Safety
Objective:
Complete this phase before moving to the next.
85.	SOS screen.
86.	Emergency contacts.
87.	Nearest medical/security.
88.	Safe exit routing.
89.	Incident broadcasts.
90.	Share live location.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 11 – Accessibility
Objective:
Complete this phase before moving to the next.
91.	Wheelchair routes.
92.	Accessible facilities.
93.	High contrast mode.
94.	Large text.
95.	Voice guidance.
96.	Quiet zones.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 12 – Gamification
Objective:
Complete this phase before moving to the next.
97.	Badges.
98.	XP system.
99.	Challenges.
100.	Leaderboards.
101.	Daily quests.
102.	Festival passport.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 13 – Memories
Objective:
Complete this phase before moving to the next.
103.	Visited locations timeline.
104.	Photos on map.
105.	Distance walked.
106.	Artists seen.
107.	Festival recap card.
108.	Share recap.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 14 – Organizer Dashboard
Objective:
Complete this phase before moving to the next.
109.	Announcements.
110.	Push notifications.
111.	Vendor management.
112.	Map management.
113.	Live reports.
114.	Analytics.
115.	Crowd monitoring.
116.	Sponsor management.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Phase 15 – Polish
Objective:
Complete this phase before moving to the next.
117.	Animations.
118.	Haptic feedback.
119.	Skeleton loading.
120.	Offline mode.
121.	Battery saver.
122.	Performance optimization.
123.	Accessibility audit.
124.	Bug fixing.
125.	QA testing.
126.	App Store/Play Store readiness.
Deliverables:
• UI completed
• Backend/API completed (if needed)
• Tested on device
• Edge cases handled
• Code committed

Recommended Build Sequence
•	Foundation
•	Navigation
•	Search
•	Friends
•	Chat
•	Reports
•	Crowd Intelligence
•	Event Companion
•	Merchandise
•	Food
•	Safety
•	Accessibility
•	Gamification
•	Memories
•	Organizer Dashboard
•	Polish

## Status

Already shipped (pre-dates or was built alongside this roadmap):
- Interactive canvas map with zoom/pan/recenter, compass, real GPS blue-dot (Phase 1)
- Live friend location sharing + navigate-to-friend with distance/direction (Phase 1, 3)
- Group chat + venue channels + DMs, currently simulated locally per device — real Firebase sync is still open (Phase 4)
- Attendee issue reporting synced live to the venue manager dashboard, with staff assign/resolve (Phase 5, 14)
- Panic/SOS alert visible to group and venue staff on both maps (Phase 10, partial)
- Venue manager dashboard: live reports feed, staff assignment, attendee/alert stats (Phase 14, partial)
- Installable as an Android PWA: manifest, icons, offline app-shell service worker (Phase 15, partial — web equivalent of store readiness; native store submission is out of scope without a wrapped native build)

Not yet started: Phases 0, 2, 6, 7, 8, 9, 11, 12, 13, and the remainder of 3/4/5/10/14/15.

## Stack (Planned Production)

- React Native / Flutter
- Mapbox SDK
- Firebase Realtime DB + Auth
- Node.js + Firebase Functions
