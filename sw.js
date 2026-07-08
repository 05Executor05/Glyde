// ── PUSH NOTIFICATIONS (Firebase Cloud Messaging, background/app-closed delivery) ──
// Combines FCM background handling into the existing PWA service worker (Firebase's documented
// pattern for apps that already have a custom sw.js) rather than registering a second worker.
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey:"AIzaSyDocnNn4xfEGcOZWS5mreGx5bvVAEO0TSw",
  authDomain:"glyde-9cce8.firebaseapp.com",
  databaseURL:"https://glyde-9cce8-default-rtdb.firebaseio.com",
  projectId:"glyde-9cce8",
  storageBucket:"glyde-9cce8.firebasestorage.app",
  messagingSenderId:"395299315354",
  appId:"1:395299315354:web:c219f13a88232d2bed4923"
});
// onBackgroundMessage fires when a push arrives while the app is closed/backgrounded — the SDK
// otherwise auto-displays a default notification from payload.notification, but we handle it
// explicitly so tapping it focuses/opens the app instead of just dismissing.
firebase.messaging().onBackgroundMessage(payload => {
  const title = payload.notification?.title || 'Glyde';
  const body = payload.notification?.body || '';
  self.registration.showNotification(title, { body, icon: './icons/icon-192.png', badge: './icons/icon-192.png' });
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(list => {
      const existing = list.find(c => 'focus' in c);
      if (existing) return existing.focus();
      return self.clients.openWindow('./index.html');
    })
  );
});

const CACHE = 'glyde-v2';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './jsqr.vendor.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Network-first for navigations so live updates land; cached app shell as offline fallback.
// Firebase/Google Fonts requests pass straight through to the network (never cached).
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
