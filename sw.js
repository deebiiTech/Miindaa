const CACHE_NAME = 'deebii-payroll-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './DEEBII LOGO.png',
  './Qajoo.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
