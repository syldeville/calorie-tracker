// Network first so updates show up; fall back to cache when offline.
// Take over right away so a new version of this file applies without closing every tab.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return; // API calls (POST) go straight to the network
  e.respondWith(
    // no-cache: revalidate with the server instead of reusing GitHub Pages' 10-minute HTTP cache
    fetch(e.request, { cache: 'no-cache' })
      .then(res => { const copy = res.clone(); caches.open('v1').then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request))
  );
});
