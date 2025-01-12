

const menuview = document.getElementById("menu-view")


// texto de bienvenida

setTimeout(()=>{
    const bienvenida = document.getElementById("bienvenida").remove()
  
},3000)


// audio de los botones 
const playSound = function () {
    var audio = document.getElementById("clickSound");
    audio.play();
  }





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
