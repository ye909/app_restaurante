

const container_fondo_card =document.getElementById("container_fondo_card")
const container_modal_card = document.getElementById("container_modal_card")
const shopping = document.getElementById("shopping")



// (function () {
  
// }())
  function modal() {
    

const hedear_modal= document.createElement("div")
hedear_modal.className="modal-header"


const hedar_close = document.createElement("div")
hedar_close.classList.add("close")
hedar_close.innerHTML = `<div><img src="../public/imagen/login.gif" alt=""></div>
<div>❌</div>
`
container_modal_card.append(hedear_modal)
hedear_modal.append(hedar_close)
}
shopping.addEventListener("click",()=>{

  modal()
})

const titulo_producto = document.createElement("div")
titulo_producto.className="modal-body"
titulo_producto.innerHTML = `<h1>productos</h1> `

hedear_modal.append(titulo_producto)



console.log(hedear_modal)

// agregar_producto_carro.forEach((element) =>{

//   const producto = document.createElement("div")

//   producto.innerHTML = ` <h1>${element.nombre}</h1>
//   <img src="${element.img}" alt="">
//     <p>${element.descripcion1}</p>
//     <span>${element.precio}</span>
//       <span>${element.cantidad}</span>
  
//   `

//   container_fondo_card.append(producto)
// })




