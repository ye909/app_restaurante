
const info = document.getElementById("info")
const nombre = document.querySelector("nombre")

const habilitar = document.getElementById("habilitar")

habilitar.addEventListener("click",(e)=>{
    e.preventDefault()
   
    if (nombre) {
        
        info.innerHTML=`lo sentimos debe llenar todos  los campos  <br> <br>GRACIAS  `
        nombre=false
    } else {
        
info.innerHTML=`Bienvenido <br> <br>su reserva a sido exitosa <br> <br> GRACIAS<br> <br> por preferirnos  `
    }
      
     
      // document.getElementById("nombre")
      // document.getElementById("apellido")
      // document.getElementById("telefono")
      // document.getElementById("cantidad")
      
      
      
      //    habilitar = document.getElementById("habilitar").disabled = true
})
