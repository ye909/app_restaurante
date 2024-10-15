

const container_fondo_card =document.getElementById("container_fondo_card")
const container_modal_card = document.getElementById("container_modal_card")
const shopping = document.getElementById("shopping")


function modal() {
       container_modal_card.innerHTML= ""
  
  const hedear_modal= document.createElement("div")
  hedear_modal.className="modal-header"
  
  
  const hedar_close = document.createElement("div")
  hedar_close.classList.add("close")
  hedar_close.innerHTML = `<div><img src="../public/imagen/login.gif" alt=""></div>
  <div class="btnclose" id="btnclose">❌</div>
  `
  container_fondo_card.append(hedear_modal)
  hedear_modal.append(hedar_close)
  

  btnclose.addEventListener("click",()=>{
    container_fondo_card.style.display="none"
   
  })
  }
console.log(modal())

const titulo_producto = document.createElement("div")
const titulo_product = document.createElement("div")
titulo_producto.className="modal-body"
titulo_producto.innerHTML = `<h1>productos</h1> <br> `
container_modal_card.append(titulo_producto)


shopping.addEventListener("click",()=>{
 
  agregar_producto_carro.forEach((element)=>{


     const product_modal= document.createElement("div")
     product_modal.className="ventana_modal"
     product_modal.innerHTML=`
    <h3 class="modal_titulo">${element.nombre}</h3>
    <img src="${element.img}" class="img_modal">
    <p>$ ${element.precio}</p>
    <p class="descripcion_modal">${element.descripcion}</p>
   <div>
   <button>Comprar</button> 
   <button>Editar</button> 
   
   </div> 
    `
    titulo_producto.append(product_modal)
   
    container_modal_card.style.display="inline"
    container_fondo_card.style.display="inline"
  
 
   
  })




})









