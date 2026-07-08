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

All 16 phases of the roadmap are complete. Highlights per phase:

- **Phase 0 – Foundation:** design system, reusable modal component, profile persistence (localStorage, auto-resume, Leave Group), light/dark/high-contrast theming, offline/online + Firebase-write-failure toasts, lightweight analytics event logging.
- **Phase 1 – Navigation:** canvas map with zoom/pan/recenter, compass, real GPS blue-dot, venue detail sheets, turn-by-turn nav line with distance/ETA, indoor floor switching, favorites, share destination.
- **Phase 2 – Search & Discovery:** universal search, autocomplete, recent/popular searches, category filters, map layer toggles, voice search (where supported).
- **Phase 3 – Friends:** friend list, live location sharing, navigate-to-friend, meeting points + invitations, arrival status, temporary sharing, privacy pause.
- **Phase 4 – Chat:** DMs, group/venue channels, typing indicators, read receipts, emoji reactions, image sharing, live location sharing, reply/forward — all synced live via Firebase (not simulated locally).
- **Phase 5 – Reports:** categorized reports with GPS, photo/video/voice attachments, priority levels, status tracking, live sync to the organizer dashboard.
- **Phase 6 – Crowd Intelligence:** live-position-derived heatmap, queue estimates, density labels, hazard/closure/weather alerts, alternative routing hints.
- **Phase 7 – Event Companion:** schedule, artist pages, bookmarks, reminder notifications, now-playing banner, stage occupancy.
- **Phase 8 – Merchandise:** shop, categories, variants, live inventory, reservation + pickup code, order history, drop notifications.
- **Phase 9 – Food:** vendor list, cuisine/dietary filters, menus, ratings, live queue estimates, pre-order, navigate-to-vendor.
- **Phase 10 – Safety:** SOS/panic (visible to group + venue staff), emergency contacts, nearest medical/security/exit routing, incident broadcasts, share live location.
- **Phase 11 – Accessibility:** accessible-only routing filter, high-contrast mode, large text, voice guidance, quiet zones.
- **Phase 12 – Gamification:** badges, XP, daily quests, leaderboard, festival passport.
- **Phase 13 – Memories:** visited-zone timeline, GPS-based distance walked, artists-seen (schedule cross-referenced), photos on the map, shareable recap card.
- **Phase 14 – Organizer Dashboard:** announcements (with push notification), vendor/inventory management, map/zone open-closed management, analytics (report stats, resolution time), crowd monitoring, sponsor management — plus live reports/staff assignment from Phase 5.
- **Phase 15 – Polish:** modal/button micro-animations, haptic feedback (Vibration API), skeleton loading, a persistent offline banner with message queueing/flush-on-reconnect, a battery saver mode (throttled GPS sync + render loop), a paused render loop when the tab is hidden, an accessibility aria-label audit, and a consolidated "More" menu to de-clutter the header.

Where a roadmap item couldn't be backed by a real external service in this environment (weather, QR scanning, native wheelchair pathfinding, app store submission), it ships as an honestly-labeled simplified equivalent rather than fabricated data — e.g. organizer-broadcast weather alerts instead of a live weather API, a bold pickup code instead of an unscannable fake QR graphic, and PWA installability (manifest + icons + offline app shell) as the web equivalent of store readiness, since a wrapped native build is out of scope.

## Stack (Planned Production)

- React Native / Flutter
- Mapbox SDK
- Firebase Realtime DB + Auth
- Node.js + Firebase Functions
