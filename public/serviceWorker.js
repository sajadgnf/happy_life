const staticCaches = 'staticCaches-v35'
const dynamicCaches = 'dynamicCaches-v35'

const assets = [
    "/",
    "index.html",
    "offline.html"
]

// limit caches size
const limitCachesSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCachesSize(name, size))
            }
        })
    })
}

// install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCaches).then(cache => {
            cache.addAll(assets)
        })
    )
})

// active events
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCaches && key !== dynamicCaches)
                .map(key => caches.delete(key))
            )
        })
    )
})

// fetch events
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCaches).then(cache => {
                    if ((evt.request.url.indexOf('http') === 0)) {
                        cache.put(evt.request.url, fetchRes.clone())
                    }
                    limitCachesSize(dynamicCaches, 50)
                    return fetchRes
                })
            })
        }).catch(() => {
            return caches.match('./offline.html')
        })
    )
})
