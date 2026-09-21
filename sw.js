// Network first so updates show up; fall back to cache when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return; // API calls (POST) go straight to the network
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open('v1').then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request))
  );
});
