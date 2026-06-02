/*
 * sw.js — minimal offline cache for the Keyboard, Mouse & Gamepad Tester.
 * Strategy: cache-first for our own static assets, network fallback.
 * Bump CACHE when you change any precached file.
 */
const CACHE = 'kmt-v2.0.0';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/keymaps.js',
  './js/app.js',
  './favicon.svg',
  './img/icon.png',
  './manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((res) => {
          // cache same-origin successful responses for next time
          if (res.ok && new URL(request.url).origin === self.location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
          }
          return res;
        })
        .catch(() => cached);
    }),
  );
});
