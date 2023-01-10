const CACHE_NAME ="version-1"
const urlToCache = ["index.html", "offline,html"]

this.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) )
    )
})