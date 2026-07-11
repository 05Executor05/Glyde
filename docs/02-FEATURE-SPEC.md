# 🧩 Glyde — Full Feature Specification

> Every feature planned for Glyde, described in plain language.  
> Features marked **[Claude Suggestion]** are additions recommended based on industry research and product thinking.

---

## ATTENDEE FEATURES (B2C)

---

### 1. VENUE MAP

The centrepiece of Glyde. A fully interactive digital map of the venue that replaces every physical sign and paper map on site.

**Points of Interest (POIs)**
- Stages (main, secondary, acoustic, etc.)
- Food and drink stalls
- Merchandise stalls
- Toilets (standard and accessible)
- Water stations
- Medical tent
- First aid points
- Entrance and exit gates
- Parking zones
- Information desk
- Quiet zones **[Claude Suggestion]**
- Accessible routes **[Claude Suggestion]**
- Lost child point **[Claude Suggestion]**
- Phone charging stations **[Claude Suggestion]**
- Cash machines / ATMs **[Claude Suggestion]**

**Navigation**
- Navigate from current GPS location to any POI
- Walking directions shown as a path on the map
- Distance and estimated walking time shown
- Voice guidance option (for accessibility)
- Re-route if user goes off path **[Claude Suggestion]**

**Search**
- Search bar to find any POI by name or type
- Filter by category (food / toilets / medical / stages)
- Recent searches saved **[Claude Suggestion]**

**Map Layers**
- Heatmap showing crowd density across the venue
- Accessible routes layer (separate view for accessibility needs)
- Friend location layer (toggle on/off)
- Report pins layer (shows active issue locations) **[Claude Suggestion]**

**Joining the Venue**
- Scan QR code at entrance
- Enter unique venue code manually
- NFC wristband tap to join instantly **[Claude Suggestion]**

**Offline Support [Claude Suggestion]**
- Map tiles pre-downloaded when joining venue
- Navigation works without cell signal
- Reports and chats queue and send when signal returns

---

### 2. GROUP & SOCIAL

**Friend Groups**
- Create a group and share a code or link
- Friends join the group and appear as named pins on the map
- Each friend has a unique colour and emoji avatar
- See friends' battery percentage
- Pause your own location sharing at any time
- Last known location shown if friend's phone dies **[Claude Suggestion]**

**"Meet Here" Feature**
- Drop a pin on the map
- Sends a notification to the whole group: "Meet at [location]"
- Group members get walking directions to the pin
- Confirm arrival — group sees who has arrived **[Claude Suggestion]**

**Buddy System [Claude Suggestion]**
- Pair with one specific friend
- Their pin is always prominently highlighted on your map
- Get an alert if your buddy moves more than 200m away from you
- Designed for safety — parents with children, accessibility companions

**Lost Person Alert [Claude Suggestion]**
- Mark someone in your group as "lost"
- Venue security is automatically notified with the person's last known location
- The person receives a notification asking them to confirm they are safe

---

### 3. CHAT

**Venue Channels (all attendees)**
- `# Horizon Festival` — main venue announcements (venue posts, attendees can comment)
- `# Lost & Found` — post lost or found items with photos
- `# Tips & Shortcuts` — crowd-sourced intel (short queues, shortcuts, hidden spots)
- Stage channels — venue posts artist updates, set times, stage news

**Group Chat (your friend group)**
- Private to your created group
- Send text, photos, location pins
- React to messages with emoji
- See typing indicators

**Direct Messages**
- One-to-one chat with any friend in your group
- Photo sharing
- Location pin sharing

**Chat Features (all channels)**
- Share live location as a pin in chat
- Send photos from camera or gallery
- Emoji reactions on any message
- Reply to specific messages **[Claude Suggestion]**
- Message search **[Claude Suggestion]**
- Voice messages **[Claude Suggestion]**

**[Claude Suggestion] — Venue Broadcast Channel**
- Separate from regular chat
- Venue can push emergency announcements (evacuation, weather, safety alerts)
- These appear as banner notifications that override the screen
- Cannot be muted by attendees for safety reasons

---

### 4. FOOD, DRINK & MERCHANDISE ORDERING

**Ordering Flow**
1. Tap a stall on the map OR open the Order tab
2. Browse the menu with photos and prices
3. Add items to cart
4. Pay in-app (card, Apple Pay, Google Pay)
5. Receive a unique collection code
6. Show the code at the stall to collect
7. Track order status: Received → Preparing → Ready

**Stall Discovery**
- Browse all stalls in a list or on the map
- Filter by type (food / drink / vegan / halal / gluten-free) **[Claude Suggestion]**
- See current wait time per stall (updated by vendor)
- See sold-out items marked clearly
- [Claude Suggestion] — AI-estimated queue time based on order volume

**Merchandise**
- Same ordering flow as food
- Browse event/artist merch
- Pay in-app
- Collect from merch stall with unique code
- Option to have merch delivered to a collection point at exit **[Claude Suggestion]**

**[Claude Suggestion] — Group Order**
- One person in the group opens a "group order"
- Each person adds their own items
- One payment is split or one person pays
- One collection code for the whole group

**[Claude Suggestion] — Dietary Profile**
- Set dietary requirements once in your profile (vegan, halal, nut allergy, etc.)
- Menu automatically highlights suitable items
- Allergen warnings shown prominently

**[Claude Suggestion] — Order History**
- See all orders placed during the event
- Reorder with one tap
- Visible in Memories recap

---

### 5. SAFETY & REPORTING

**Issue Reports (sent to venue staff)**
- 🚻 Dirty or blocked toilet
- ⏳ Extremely long queue (with location)
- 💧 No water / water station empty
- 🏥 Medical situation needed
- 🗑️ Overflowing bin
- 🛡️ Security concern
- 💡 Lighting issue **[Claude Suggestion]**
- ♿ Accessibility obstacle **[Claude Suggestion]**
- 🔊 Sound problem at stage **[Claude Suggestion]**

**Report Flow**
1. Tap the report type
2. Location is auto-filled from GPS
3. Optional: add a photo or short description
4. Submit — venue staff see it instantly
5. Attendee receives notification when issue is resolved

**SOS Button**
- Prominent red button in the app
- Sends alert to: venue security team AND personal emergency contact
- Includes exact GPS location
- Cannot be accidentally triggered (requires hold or double confirmation)
- [Claude Suggestion] — Audio alarm option that plays a loud sound from the phone to attract attention

**Emergency Contact**
- Add one or more emergency contacts in your profile
- They receive an SMS and/or notification if SOS is triggered
- They can see your last known location even if they don't have Glyde **[Claude Suggestion]**

**[Claude Suggestion] — Drink Tracker**
- Optional feature users can enable
- Log drinks throughout the event
- App gives gentle nudge to drink water after a set number of drinks
- Private — not visible to venue or friends unless user chooses to share
- Useful for personal safety awareness

**[Claude Suggestion] — Well-being Check-in**
- At set intervals during the event, app sends a gentle check-in notification
- User taps "I'm good 👍" to confirm
- If no response after 10 minutes, a second alert is sent
- If still no response, the app notifies the user's emergency contact

---

### 6. EVENT SCHEDULE

**Schedule View**
- Shows all stages and locations with a timeline
- Artist or act name, start and end time
- Short bio/description of the act
- Genre tags **[Claude Suggestion]**
- Social media link for the artist **[Claude Suggestion]**

**Personalised Schedule [Claude Suggestion]**
- Mark acts you want to see with a star
- App builds your personal schedule
- Alerts you to conflicts (two acts you want at the same time)
- Suggests which one to attend based on distance and stage **[Claude Suggestion]**

**Notifications**
- Toggle notifications per act or stage
- Alert 15 minutes before the act starts
- Alert when act is about to start (5 mins)
- Alert if set time changes

**Live Updates**
- Venue can push real-time schedule changes
- Late starts, cancelled acts, surprise additions
- Stage substitutions shown clearly

---

### 7. MEMORIES

**Timeline**
- Chronological record of your movement throughout the event
- Shows exact time you were at each location (Main Stage 9:14pm, Food Village 10:02pm, etc.)
- Built automatically from GPS data — no manual input needed

**Photos**
- All photos you shared in group chats or DMs
- All photos shared by your group members
- Arranged chronologically
- [Claude Suggestion] — Option to save all group photos to your phone in one tap

**Recap**
- Total distance walked
- Number of artists/acts attended
- Number of orders placed (food + merch)
- Total spent through the app
- Number of messages sent
- XP earned during the event
- Badges and stamps earned
- Friends in your group
- [Claude Suggestion] — "Most visited location" (e.g. the bar 🍺)
- [Claude Suggestion] — Step count if health permissions granted

**Sharing**
- Generate a shareable recap card (like Spotify Wrapped or Strava)
- Share directly to Instagram Stories, TikTok, WhatsApp
- Custom Glyde branding on the card
- [Claude Suggestion] — Group recap — combine everyone's stats into one shared card

**Past Events**
- All past events stored in your profile
- Map not stored (saves storage) but chat, XP, Passport, and Memories are
- [Claude Suggestion] — "On this day last year" notification if you attended the same event before

---

### 8. FESTIVAL PASSPORT (XP SYSTEM)

**How XP Works**
- Earn XP throughout the event by doing things naturally
- XP accumulates on a permanent profile across all events
- Levelling system: Newcomer → Regular → Fanatic → Legend → Icon

**Ways to Earn XP**

| Action | XP |
|---|---|
| Join an event | 50 XP |
| Share first location with group | 25 XP |
| Send first message in venue channel | 30 XP |
| Place first food order | 40 XP |
| Submit a report that gets resolved | 60 XP |
| Trigger SOS (waived if genuine emergency) | 0 XP (no penalty) |
| Attend 3 different stages | 75 XP |
| Walk 5km during event | 50 XP |
| Buy merch | 30 XP |
| Share a photo in group chat | 15 XP |
| Complete a quest | Variable |
| Invite a friend who joins | 100 XP **[Claude Suggestion]** |
| First event of the season | 200 XP **[Claude Suggestion]** |

**Badges**
- 🦋 Social Butterfly — sent 50+ messages in venue channels
- 🍔 Foodie — placed 3+ food orders at one event
- 💸 Big Spender — spent over £50 through the app
- 🛡️ Safety Hero — submitted a report that was resolved
- 🗺️ Explorer — visited all POI types in one event
- 🌙 Night Owl — still active at 2am **[Claude Suggestion]**
- 🐦 Early Bird — checked in before gates officially open **[Claude Suggestion]**
- 📸 Photographer — shared 10+ photos in one event **[Claude Suggestion]**
- 🏃 Marathon — walked 10km in one event **[Claude Suggestion]**
- 👥 Squad Goals — attended an event with a group of 5 or more **[Claude Suggestion]**
- 🔁 Loyal Fan — attended the same event 2+ years in a row **[Claude Suggestion]**
- 🆘 First Responder — first to report an issue that was later confirmed by others **[Claude Suggestion]**

**Quests**
- Daily quests: specific tasks that reset each day of a multi-day festival
- Event quests: tied to the specific event (e.g. "Try 3 different food stalls at this festival")
- [Claude Suggestion] — Sponsored quests: brand-funded quests (e.g. "Visit the Red Bull stand to earn 500 XP") — this is a revenue stream

**Leaderboard**
- Venue leaderboard: top XP earners at this specific event
- Global leaderboard: top earners across all Glyde events ever
- Friends leaderboard: rank among your friend group only **[Claude Suggestion]**
- [Claude Suggestion] — Weekly leaderboard with prizes (top 3 win vouchers or exclusive badges)

---

### 9. USER PROFILE

**Profile Settings**
- Name and avatar emoji
- XP level and progress bar
- Badges collection
- Current event code
- Battery percentage (visible to friends)
- Pause location sharing toggle
- Dark / Light / Auto theme
- Large text mode (accessibility)
- Voice guidance on/off
- Battery saver mode (reduced GPS polling)
- Emergency contact details
- Dietary preferences **[Claude Suggestion]**
- Leave event button

**Account Settings [Claude Suggestion]**
- Linked phone number (for SMS SOS fallback)
- Notification preferences
- Privacy settings (who can see my location, who can DM me)
- Data and privacy (download your data, delete your account)
- Language preference

---

### 10. EVENTS HISTORY

- All past events listed with date, venue name, and thumbnail
- Tap any past event to see:
  - Chat history (read-only)
  - XP earned at that event
  - Passport stamps collected
  - Memories (timeline, photos, recap)
- Maps not stored for past events
- Active events shown at the top
- [Claude Suggestion] — Upcoming events section (if the venue publishes future events on Glyde)

---

## VENUE / STAFF FEATURES (B2B)

---

### 1. VENUE ACCOUNT SETUP

- Create an organisation account
- Add event details (name, date, location, expected attendance)
- Upload venue map or use Glyde's map builder tool **[Claude Suggestion — Map Builder]**
- Generate unique QR code and event code
- Add staff members with role assignments:
  - Account Manager (full access)
  - Operations (reports, announcements, analytics)
  - Security (SOS alerts, security reports only)
  - Medical (medical reports only)
  - Vendor (their own stall only)
  - Ground Staff (simplified view, resolve reports only)

---

### 2. VENUE MAP MANAGEMENT

- Edit and update POIs in real time during the event
- Add or remove stalls as they open/close
- Update toilet availability (open/closed/accessible only)
- View live crowd heatmap across the site
- View all attendee locations as anonymous aggregate dots
- [Claude Suggestion] — Bottleneck alerts: automatic notification when crowd density exceeds a threshold in an area
- [Claude Suggestion] — Capacity counter: live count per zone compared to safe capacity limits

---

### 3. REPORTS DASHBOARD

- All attendee reports displayed in real time
- Sorted by urgency (medical and SOS first, then by report count)
- Each report shows:
  - Type of issue
  - Exact location on map
  - Number of attendees who reported same issue
  - Time raised
  - Photo if submitted
- Filter by type, zone, time, or assigned staff
- Assign report to a specific staff member (they get a notification)
- Mark as resolved — attendee receives a push notification
- [Claude Suggestion] — Resolution time tracking (for analytics and staff performance)
- [Claude Suggestion] — Escalation system: if a report is not actioned within X minutes, it escalates to the manager

**SOS Alerts**
- SOS appears as a full-screen alert on security team's devices
- Shows exact GPS location
- One tap to assign to nearest security staff
- Attendee's emergency contact is also notified simultaneously

---

### 4. ANNOUNCEMENTS

- Post to the main venue channel (all attendees see it)
- Post to a specific stage channel
- Schedule announcements in advance (e.g. stage announcements for each act)
- Emergency broadcast — overrides all screens, cannot be muted
- [Claude Suggestion] — Rich announcements: include images, links, or map locations
- [Claude Suggestion] — Targeted announcements: send to specific zones or groups (e.g. only attendees near the East Stage)

---

### 5. ORDER MANAGEMENT (VENDOR DASHBOARD)

Each vendor has access to their own order screen showing:
- Incoming orders in real time
- Customer name and collection code
- Items ordered
- Accept / Reject / Complete order buttons
- Mark items as sold out
- Update current wait time (shown to attendees browsing the menu)

**Notification Options for Vendors**
- Option A: In-app dashboard (tablet or phone)
- Option B: WhatsApp Business API notification (order sent as WhatsApp message)
- Option C: POS system integration (Square, Lightspeed, Tevalis) **[Claude Suggestion]**
- [Claude Suggestion] — Printer integration: orders print automatically on a receipt printer (common in hospitality)

**Payment**
- Attendee pays in-app via Stripe
- Payment split: attendee total → Stripe fee deducted → Glyde commission (5-10%) → vendor payout
- Vendors receive payout after event or on a weekly basis
- Full payment report available after event

---

### 6. ANALYTICS DASHBOARD

Real-time and post-event analytics for venue managers.

**Live During Event**
- Live attendee count on site
- Crowd density map (heat overlay)
- Peak entry and exit times (updated live)
- Open vs resolved reports count
- Active orders count
- Current wait times per stall
- [Claude Suggestion] — Predicted busy periods based on schedule (e.g. crowd surge expected when headliner starts)

**Post-Event Report**
- Total attendees who used Glyde
- App adoption rate (% of total ticket holders)
- Total distance walked by all attendees (aggregate)
- Most visited POIs
- Busiest times per location
- Total orders placed (food + merch)
- Total revenue through Glyde
- Glyde commission breakdown
- Top-selling menu items
- Most reported issues and resolution times
- Average report resolution time
- Staff performance (reports assigned vs resolved per staff member)
- XP distribution among attendees
- Most popular badges earned
- Photos shared count
- [Claude Suggestion] — Net Promoter Score (NPS) from post-event in-app survey
- [Claude Suggestion] — Comparison to previous events (if venue has used Glyde before)
- [Claude Suggestion] — Exportable PDF report for venue records and sponsors

---

### 7. SCHEDULE MANAGEMENT

- Add and edit artist/act listings
- Set stage, start time, end time, description, photo
- Push live updates (delays, cancellations, surprise acts)
- [Claude Suggestion] — Drag-and-drop schedule builder
- [Claude Suggestion] — Import schedule from CSV or Google Sheets
- Attendee notifications sent automatically based on their starred acts

---

### 8. STAFF MOBILE VIEW

A simplified mode for ground-level staff (not managers).

- See only reports assigned to them
- Navigate to the incident location using the venue map
- Mark as resolved with one tap
- Receive SOS alerts if they are security role
- [Claude Suggestion] — Two-way communication with manager via in-app message
- [Claude Suggestion] — Shift management — staff can clock in and out, manager sees who is on duty

---

## TECHNICAL FEATURES

### Map Building [Claude Suggestion]
- Venue uploads a floor plan image or PDF
- Glyde overlays an editable layer on top
- Drag and drop POIs onto the map
- Define walkable paths
- Set zone boundaries
- This is one of the hardest engineering problems — start with manual setup by Glyde team for early venues

### Offline Mode [Claude Suggestion]
- Map tiles cached when joining venue
- Reports queued locally and sent when signal returns
- Last known friend locations shown if signal lost
- Critical for festivals where cell towers get overwhelmed

### PWA (Progressive Web App)
- App works in mobile browser — no App Store download needed
- "Add to Home Screen" prompt makes it feel like a native app
- Crucial for adoption at events — QR scan → instant access, no friction

### Push Notifications
- Artists starting soon
- Report resolved
- SOS triggered
- Friend sends "Meet Here" pin
- Group message received
- Order ready for collection
- [Claude Suggestion] — "Your friend is near you" proximity notification

### Accessibility [Claude Suggestion]
- Large text mode
- High contrast mode
- Voice guidance for navigation
- Accessible route layer on map
- Screen reader compatibility
- Reduced motion mode
