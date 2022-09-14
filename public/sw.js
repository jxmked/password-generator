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
    "robots.txt"
];


function getFiles(){
  return new Promise(async function(resolve, reject){
     try{
       const res = await fetch(prefix + 'asset-manifest.json', {
         method:"GET"
       });
       var i = JSON.parse(await res.text())["entrypoints"];
	     i.forEach(function(item){
		     URLS.push(item);
	     });
	     URLS = URLS.map(function(u){
		     return prefix + u;
	     });
       resolve();
     } catch(err){
	     console.error(err);
	     reject(err)
     }
  });
}

// Respond with cached resources
self.addEventListener('fetch', function (e) {

  e.respondWith(
    caches.match(e.request).then(function (request) {
	    console.log(e.request, "requesting for");
      if (request) { // if cache is available, respond with cache
        return request
      } else {       // if there are no cache, try fetching request
	      try {
		return fetch(e.request);
	      }catch(err){
		      console.error("No cache avalable");
		      console.error(e.request);
	      }
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  )
})

// Cache resources
self.addEventListener('install', function (e){ 
	e.waitUntil(new Promise(function(resolve, reject){
		getFiles().then(function(){
			var i = [...new Set(URLS)];
			caches.open(CACHE_NAME).then(function(cache){
				resolve();
				return cache.addAll(i);
			})
		}).catch(reject);
	}));
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
