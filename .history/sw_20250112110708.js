const nombre_cache_almacenamiento = 'app restaurante serviceworker';

const urlsToCache = [
    '/',
    '/index.html',
    '/css/domicilio.css',
    '/css/menu_navegacion.css',
    '/css/footer.css',
    '/css/heder.css',
    '/css/menu_principal.css',
    '/css/modal_card.css',
    '/css/reservar.css',   
    '/css/stilo.css',
    '/js/service_worker.js'
   
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    const  cachename = caches
           .open(nombre_cache_almacenamiento)
           .then((cache) => cache.addAll(urlsToCache))
              event.waitUntil(cachename)
   });
   




// Intercepción de solicitudes
self.addEventListener('fetch', (event) => {
    console.log("fech",event.request)
    event.respondWith(
        caches
        .match(event.request)
        .then((res) => res|| fetch(event.request))
    )
 })
    

  

