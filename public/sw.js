const cacheVersion = 'v1';
const cacheKeepList = ['v1'];
const cachingImages = ['/odaibako.png', '/mosaic.png', '/lgtmi.png', '/chaii.png'];

self.addEventListener('install', event => {
  const purgeCache = () => {
    return caches.keys().then(keyList =>
      Promise.all(
        keyList.map(function(key) {
          if (cacheKeepList.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      )
    );
  };

  // cache
  event.waitUntil(
    caches.open(cacheVersion).then(cache => Promise.all([purgeCache(), ...cachingImages.map(name => cache.add(name))]))
  );
});

self.addEventListener('activate', event => {
  // activated.
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin == location.origin) {
    cachingImages.forEach(name => {
      if (url.pathname === name) {
        event.respondWith(caches.match(name));
      }
    });
  }
});
