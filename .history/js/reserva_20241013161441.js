
const info = document.getElementById("info")
const nombre = document.querySelector("nombre")

const habilitar = document.getElementById("habilitar")

habilitar.addEventListener("click",(e)=>{
    e.preventDefault()
   
    if (nombre !="") {
        
        info.innerHTML=`lo sentimos debe llenar todos  los campos  <br> <br><p>GRACIAS</p>  `
    } else {
        
        info.innerText="sus datos son exitosos "
    }
      
     
      // document.getElementById("nombre")
      // document.getElementById("apellido")
      // document.getElementById("telefono")
      // document.getElementById("cantidad")
      
      
      
      //    habilitar = document.getElementById("habilitar").disabled = true
})
