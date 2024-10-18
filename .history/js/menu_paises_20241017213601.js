const ver_menu = document.getElementById("mostrar")
const cotenido_ver_mas  = document.getElementById("cotenido_ver_mas")


cotenido_ver_mas.addEventListener("click",()=>{
    ver_menu.classList.toggle("mostrar");
})