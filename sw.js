const CACHE = 'ironlog-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap'
];

// ── INSTALL ──────────────────────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── FETCH (offline-first for app shell) ──────────────────────────────────
self.addEventListener('fetch', e => {
  // Only cache same-origin & Google Fonts — pass everything else through
  const url = new URL(e.request.url);
  if (url.origin !== location.origin && !url.hostname.includes('googleapis.com') && !url.hostname.includes('gstatic.com')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});

// ── NOTIFICATION SCHEDULING ───────────────────────────────────────────────
let notifAlarm = null;

self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE_NOTIF') {
    const [h, m] = (e.data.time || '08:00').split(':').map(Number);
    clearTimeout(notifAlarm);
    scheduleDaily(h, m);
  }
});

function scheduleDaily(h, m) {
  const now = new Date();
  const next = new Date();
  next.setHours(h, m, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  const delay = next - now;
  notifAlarm = setTimeout(() => {
    self.registration.showNotification('IronLog — Log your weight 💪', {
      body: "Don't forget to log your bodyweight today.",
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'bw-reminder',
      renotify: false,
      silent: false
    });
    // Re-schedule for next day
    scheduleDaily(h, m);
  }, delay);
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(cs => {
      for (const c of cs) if (c.url && 'focus' in c) return c.focus();
      if (clients.openWindow) return clients.openWindow('./index.html');
    })
  );
});
