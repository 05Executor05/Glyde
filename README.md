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

- [x] Real GPS location
- [x] Firebase real-time multi-user
- [x] Venue manager dashboard
- [x] Merge map + chat into unified app
- [x] Attendee reports synced live to venue dashboard
- [x] Panic alert visible to group + venue staff
- [ ] Real Firebase-backed chat (currently local/simulated per device)
- [ ] Manager authentication (currently open by group code)
- [ ] iOS + Android native apps

## Stack (Planned Production)

- React Native / Flutter
- Mapbox SDK
- Firebase Realtime DB + Auth
- Node.js + Firebase Functions
