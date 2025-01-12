

// texto de bienvenida

setTimeout(()=>{
    const bienvenida = document.getElementById("bienvenida").remove()
    bienvenida.style.transition=" background-color 0.3s ease, transform 0.7s ease; "
},3000)


// audio de los botones 
const playSound = function () {
    var audio = document.getElementById("clickSound");
    audio.play();
  }

   const menuview = document.getElementById("menu-view")
const menu_principal=document.getElementById("menu_principal").addEventListener("click",ver_menu)


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
