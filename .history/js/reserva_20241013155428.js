
const info = document.getElementById("info")
const nombre = document.querySelector("nombre").value

const habilitar = document.getElementById("habilitar")

habilitar.addEventListener("click",(e)=>{
    e.preventDefault()
   
    if (nombre !="") {
        
        info.innerText="lo sentimos no puede accerder al sistemas "
    } else {
        
        info.innerText="sus datos son exitosos "
    }
      
     
      
      // document.getElementById("nombre")
      // document.getElementById("apellido")
      // document.getElementById("telefono")
      // document.getElementById("cantidad")
      
      
      
      //     disabled
})
