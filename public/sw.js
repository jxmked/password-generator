let cacheData = "xio_cached-v1";
const files = [
    "/password-generator/310x310.png",
    "/password-generator/asset-manifest.json",
    "/password-generator/favicon.ico",
    "/password-generator/font.css",
    "/password-generator/index.html",
    "/password-generator/manifest.json",
    "/password-generator/Montserrat-Thin.woff",
    "/password-generator/Montserrat-Thin.woff2",
    "/password-generator/Montserrat-ThinItalic.woff",
    "/password-generator/Montserrat-ThinItalic.woff2",
    "/password-generator/robots.txt",
    "/password-generator/static/css/main.fbdd585d.css",
    "/password-generator/static/js/main.fddfe7f8.js",
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
