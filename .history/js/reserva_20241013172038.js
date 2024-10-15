
const info = document.getElementById("info")




function habilitar() {
const habilita = document.getElementById("habilitar")
    const nombre = document.querySelector("nombre")
    const apellido = document.querySelector("apellido")

    if (nombre.value != apellido.value) {
        
        info.innerHTML=`lo sentimos debe llenar todos  los campos  <br> <br>GRACIAS  `
        habilitar.disabled = true
    } else {
        
info.innerHTML=`Bienvenido <br> <br>su reserva a sido exitosa <br> <br> GRACIAS<br> <br> por preferirnos  `
    }
      
}

// const habilitar = document.getElementById("habilitar")

// habilitar.addEventListener("click",(e)=>{
//     e.preventDefault()
    
     
//       // document.getElementById("nombre")
//       // document.getElementById("apellido")
//       // document.getElementById("telefono")
//       // document.getElementById("cantidad")
      
      
      
//       //    habilitar = document.getElementById("habilitar").disabled = true
// })
