const form = document.querySelector("form")
const info = document.getElementById("info")


const habilitar = document.getElementById("habilitar")

habilitar.addEventListener("click",(e)=>{
    e.preventDefault()
    if (form) {
        info.innerText="lo sentimos no puede accerder al sistemas "
      } else {
          alert("ox")
      }
      
      // document.getElementById("nombre")
      // document.getElementById("apellido")
      // document.getElementById("telefono")
      // document.getElementById("cantidad")
      
      
      
      //     disabled
})
