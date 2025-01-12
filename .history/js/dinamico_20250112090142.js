



// texto de bienvenida

setTimeout(()=>{
    const bienvenida = document.getElementById("bienvenida").remove()
    bienvenida.style.transition=" background-color 0.3s ease, transform 0.7s ease; "
},3000)






// // Ejemplo de notificación (opcional)
// document.getElementById('btnboton_agregar').addEventListener('click', () => {
//     if (Notification.permission === 'granted') {
//         new Notification('¡Hola desde tu PWA!');
//     } else if (Notification.permission !== 'denied') {
//         Notification.requestPermission().then((permission) => {
//             if (permission === 'granted') {
//                 new Notification('¡Hola desde tu PWA!');
//             }
//         });
//     }
// });
