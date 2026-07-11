# 🎪 Glyde — Product Overview

> **The in-event intelligence platform.**  
> Glyde replaces the paper map, the megaphone, the radio call and the guesswork — for attendees and venue staff alike.

---

## What Is Glyde?

Glyde is a mobile app that lives inside an event. Once an attendee scans a QR code at the entrance, they get a fully interactive digital map of the venue, real-time location sharing with their friends, in-app food and merch ordering, a live event schedule, safety reporting, and a gamified experience layer — all without needing to leave the app.

For venue operators, Glyde is an operations platform. Staff see every report raised by attendees in real time, manage vendor orders, push announcements, and access a live analytics dashboard of what is happening across the entire venue at any moment.

---

## The Problem Glyde Solves

### For Attendees
- Physical venue maps and signage are hard to read, especially in crowds or after a few drinks
- Friends get separated with no reliable way to find each other
- Food and drink queues waste time that could be spent at the stage
- There is no way to report a problem (dirty toilet, medical situation) and know it will be seen
- Event memories are scattered across different group chats and phone galleries

### For Venues
- No real-time visibility of what is happening across the site
- Reports from attendees come through social media, too late to act
- Food and merchandise vendors operate on paper or basic card readers with no data
- No way to push urgent messages directly to attendees on the ground
- No data on how attendees actually move through and experience the event

---

## Who Is Glyde For?

| User Type | Description |
|---|---|
| **Attendees** | Anyone attending a festival, concert, sports event, food market, or large indoor/outdoor event |
| **Venue managers** | The organiser or operations lead responsible for running the event |
| **Venue staff** | Security, medical, cleaning, general crew who receive and action reports |
| **Vendors** | Food, drink, and merchandise stall operators who receive orders through the app |

---

## Two Products, One App

Glyde operates as a single app with role-based access. The experience completely changes depending on whether you are an attendee or a staff/venue member.

This is the same model used by Uber (rider vs driver), Deliveroo (customer vs restaurant), and Airbnb (guest vs host).

### Why One App (Not Two)

**Advantages:**
- Single codebase — half the development cost and maintenance
- Staff who also attend events only need one app
- One App Store listing to manage
- Shared infrastructure — maps, Firebase, notifications, payments all in one place
- Faster updates — one release covers everyone

**Disadvantages:**
- Role logic adds engineering complexity
- UI needs to switch modes cleanly
- A bug affects all user types

**Decision: One app, two modes.** The attendee experience and the venue staff experience are radically different screens within the same application.

---

## The Core Loop

```
Venue creates event → generates QR code
        ↓
Attendee scans QR → joins event on Glyde
        ↓
Attendee navigates, chats, orders, earns XP
        ↓
Attendee reports an issue → venue staff sees it live
        ↓
Staff resolves it → attendee gets notified
        ↓
Event ends → attendee gets Memories recap + XP summary
        ↓
Venue gets full analytics report
```

---

## What Makes Glyde Different

| Feature | Google Maps | WhatsApp | Eventbrite | **Glyde** |
|---|---|---|---|---|
| Indoor venue maps | ❌ | ❌ | ❌ | ✅ |
| Live friend tracking | ❌ | ✅ | ❌ | ✅ |
| In-event food ordering | ❌ | ❌ | ❌ | ✅ |
| Venue report system | ❌ | ❌ | ❌ | ✅ |
| Event schedule overlay | ❌ | ❌ | Partial | ✅ |
| XP and gamification | ❌ | ❌ | ❌ | ✅ |
| Venue analytics | ❌ | ❌ | Basic | ✅ |
| Works offline | Partial | ❌ | ❌ | ✅ (planned) |

---

## Current Build Status

| Module | Status |
|---|---|
| Interactive venue map | ✅ Built (demo) |
| Friend live location | ✅ Built (Firebase) |
| Group chat + channels | ✅ Built (local) |
| Issue reporting | ✅ Built (demo) |
| Manager dashboard | ✅ Built (demo) |
| Firebase real-time sync | ✅ Connected |
| GPS integration | ✅ Built |
| Food ordering | 🔲 Planned |
| XP / Passport system | 🔲 Planned |
| Memories / Recap | 🔲 Planned |
| Push notifications | 🔲 Planned |
| PWA install | 🔲 Planned |
| Native iOS/Android | 🔲 Planned |

**Live demo:** https://05executor05.github.io/Glyde  
**GitHub:** https://github.com/05Executor05/Glyde  
**Firebase project:** glyde-9cce8
