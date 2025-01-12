const nombre_cache_almacenamiento = 'app restaurante serviceworker';

const urlsToCache = [
    '/',
    '/index.html',
    '/public/css/card_producto.css',
    '/public/css/container_producto_principal.css',
    '/public/css/footer.css',
    '/public/css/hedear_navegador.css',
    '/public/css/modal_carrol.css',

    '/js/serviceWorker.js'
   
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
    

  

