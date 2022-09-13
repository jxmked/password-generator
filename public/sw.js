let cacheData = "xio_cached-v1";
const files = [

];

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheData).then(function(cache) {
            cache.addAll(files);
        })
    );
});

this.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response){
            return (response) ? response : null;
        })
    )
})
