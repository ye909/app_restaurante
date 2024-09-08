const btnclose = document.getElementById("btnclose")
const container_fondo_card = document.getElementById("container_fondo_card")
const shopping = document.getElementById("shopping")





btnclose.addEventListener("click",()=>{
    container_fondo_card.style.display="none"
})
shopping.addEventListener("click",()=>{
    container_fondo_card.style.display="block"
})