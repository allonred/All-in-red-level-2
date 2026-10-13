// TEST BUILD: deliberately do not cache Level 2 while we diagnose iPhone rendering.
self.addEventListener('install', event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('all-on-red')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',()=>{});
