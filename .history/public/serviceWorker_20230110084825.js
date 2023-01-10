const CACHE_NAME ="version-1"
const urlsToCache = ["index.html", "offline.html"]

this.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opend Cache")
            return cache.addAll(urlsToCache);
        } )
    )
})
this.addEventListener("fetch", (event) => {
    event.re
} )