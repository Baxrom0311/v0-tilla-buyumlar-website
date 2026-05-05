// TILLA BUYUMLAR — Service Worker
const CACHE_VERSION = "tilla-v1"
const STATIC_CACHE = `${CACHE_VERSION}-static`
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`

const STATIC_ASSETS = [
  "/",
  "/manifest.webmanifest",
  "/icons/icon-192.jpg",
  "/icons/icon-512.jpg",
  "/icons/apple-icon.jpg",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !key.startsWith(CACHE_VERSION))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener("fetch", (event) => {
  const { request } = event

  // Only handle GET requests
  if (request.method !== "GET") return

  // Skip cross-origin and non-http(s)
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  // Network-first for HTML navigations
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy))
          return response
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/"))),
    )
    return
  }

  // Cache-first for static assets (images, fonts, etc.)
  if (
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "style" ||
    request.destination === "script"
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone()
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy))
            return response
          }),
      ),
    )
  }
})
