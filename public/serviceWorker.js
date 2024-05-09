/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened Cache')

      return cache.addAll(urlsToCache)
    }),
  )
})

// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then(() => fetch(event.request).catch(() => caches.match('offline.html'))),
  )
})

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  event.wailUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        }),
      ),
    ),
  )
})
