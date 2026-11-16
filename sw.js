// QuickShare service worker.
// Its only job: receive files, text and links shared into QuickShare from the Android share sheet ("Share → QuickShare"),
// keep them for the page, and open the app. It does not cache anything, so the app is always the latest version.
const DB = 'quickshare';

function idb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function put(key, value) {
  const db = await idb();
  await new Promise((res, rej) => {
    const t = db.transaction('kv', 'readwrite');
    t.objectStore('kv').put(value, key);
    t.oncomplete = res; t.onerror = () => rej(t.error);
  });
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'POST' || !url.pathname.endsWith('/share-target')) return;
  event.respondWith((async () => {
    try {
      const form = await event.request.formData();
      const files = form.getAll('files').filter((f) => f && typeof f === 'object' && 'size' in f);
      const str = (k) => { const v = form.get(k); return typeof v === 'string' ? v.slice(0, 100000) : ''; };
      await put('shared', { files, title: str('title'), text: str('text'), url: str('url'), at: Date.now() });
    } catch (e) {
      // fall through to opening the app; it will say nothing was shared
    }
    return Response.redirect(new URL('./?shared=1', self.registration.scope).href, 303);
  })());
});
