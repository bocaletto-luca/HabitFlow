const CACHE_NAME = 'habitflow-cache-v1';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  // Add icon paths if hosted locally:
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.7/dayjs.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request)
      .then(resp => resp || fetch(evt.request))
  );
});
