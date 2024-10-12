

const container_fondo_card =document.getElementById("container_fondo_card")
const container_modal_card = document.getElementById("container_modal_card")
const shopping = document.getElementById("shopping")

// shopping.addEventListener("click",()=>{

  function modal() {
    

const hedear_modal= document.createElement("div")
hedear_modal.className="modal-header"
container_modal_card.append(hedear_modal)

const hedar_close = document.createElement("div")
hedar_close.classList.add("close")
hedar_close.innerHTML = `<div><img src="../public/imagen/login.gif" alt=""></div>
<div>❌</div>
`
hedear_modal.append(hedar_close)

// hedar_close.addEventListener("click",()=>{
//   alert("hha")  
// })

const titulo_producto = document.createElement("div")
titulo_producto.className="modal-body"
titulo_producto.innerHTML = `<h1>productos</h1> `

hedear_modal.append(titulo_producto)


agregar_producto_carro.forEach((element) =>{
  
  console.log(element,"aa")
})

// agregar_producto_carro.forEach((element) =>{

//   const producto = document.createElement("div")

//   producto.innerHTML = ` <h1>${element.nombre}</h1>
//   <img src="${element.imagen}" alt="">
//     <p>${element.descripcion1}</p>
//     <span>${element.precio}</span>
//       <span>${element.cantidad}</span>
  
//   `

//   container_fondo_card.append(producto)
// })


}

 modal()
