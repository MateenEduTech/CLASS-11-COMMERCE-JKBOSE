/**
 * Service Worker — JKBOSE Class 11 Business Studies App
 * Enables offline caching and installable PWA functionality
 */

const CACHE_NAME = 'bs11-v1.0';
const OFFLINE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg'
];

// Install: cache all core files
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(OFFLINE_URLS).catch(err => {
        console.log('[SW] Some files could not be cached:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache
        return cachedResponse;
      }
      // Try network, cache for future
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // If both cache and network fail, return offline page
        return caches.match('./index.html');
      });
    })
  );
});

// Background sync (for future use)
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);
});
