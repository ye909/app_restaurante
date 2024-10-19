// Esperar a que toda la página esté completamente cargada






// window.addEventListener('load', function() {
//     // Ocultar el Loader
//     document.getElementById('loader').style.display = 'none';
    
//     // Mostrar el contenido principal de la página
//     document.getElementById('content').style.display = 'block';
//   });

document.addEventListener("DOMContentLoaded",()=>{
 
  setTimeout(()=>{
    iniciando()
  },1000)


})
 const loader = document.getElementById("loader")

function iniciando() {
  const container_loader= document.createElement("div")
  container_loader.className = "container_loader"
  container_loader.innerHTML = `  <div class="spinner"></div>`
 


}