// Temporary online-only Level 2 service worker. Clear obsolete Level 2 offline caches.
const PREFIX='all-on-red-level2-';
self.addEventListener('install', e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(e.request.mode==='navigate')e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)));});
