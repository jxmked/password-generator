var APP_PREFIX = "password-generator";     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION;
var prefix = "/";

var URLS = [                            // Add URL you want to cache in this list.
    "",                     // If you have separate JS/CSS files,
    "310x310.png",
    "asset-manifest.json",
    "favicon.ico",
    "font.css",
    "index.html",
    "manifest.json",
    "Montserrat-Thin.woff",
    "Montserrat-Thin.woff2",
    "Montserrat-ThinItalic.woff",
    "Montserrat-ThinItalic.woff2",
    "robots.txt",
    "static/css/main.5ed0f1dc.css",
    "static/js/main.6fa86a80.js",
];
URLS = URLS.map(function(u){
	return prefix + u;
});

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { // if cache is available, respond with cache
        return request
      } else {       // if there are no cache, try fetching request
        return fetch(e.request)
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  )
})

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(URLS)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
