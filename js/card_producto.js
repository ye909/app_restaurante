

const container_fondo_card =document.getElementById("container_fondo_card")
const container_modal_card = document.getElementById("container_modal_card")
const shopping = document.getElementById("shopping")

 function modal_carrito() {
 

  const heder_carro= document.createElement("div")
heder_carro.className="container_close_card"
heder_carro.innerHTML=`
    <div><img src="../public/imagen/letra a.ico" alt=""></div>
<div class="btnclose" id="btnclose">x</div>
`
container_fondo_card.append(heder_carro)

btnclose.addEventListener("click",()=>{
    container_fondo_card.style.display="none"
})


shopping.addEventListener("click",()=>{

  
  agregar_producto_carro.forEach((data)=>{
   
  const body_carro = document.createElement("div")
body_carro.className="producto_modal_carro"

body_carro.innerHTML =`<div class="producto_carro" id="producto_carro">
<h1>${data.nombre} </h1>
        <img src="${data.img} " alt="">
           
        </div>
        <p>Lorem ipsum dolorendis obcaecati odit alias esse
             totam a porro? Repudiandae, autem blanditiis!</p>
                
        </div>
   
</div>
`
container_fondo_card.append(body_carro)

})





  console.log(container_fondo_card)
})




}
shopping.addEventListener("click",()=>{
    container_fondo_card.style.display="block"
})








// const pagar = document.createElement("button")

// pagar.classList.add("pagar")
// pagar.setAttribute("id","pagar")
// pagar.textContent = "Pagar"
// producto_modal_carro.append(pagar) 

//  const total_pago = document.createAttribute("div")
//  total_pago.classList.add("total-pago")
//  total_pago.textContent = `Total a pagar: $${data.precio}`

//  producto_modal_carro.append(total_pago)

//  agregar_producto_carro.forEach((datos)=> {
//     // producto_modal_carro= ""
// const producto_modal_carro = document.createElement("div")
// producto_modal_carro.classList.add("producto-modal-carro")
// producto_modal_carro.innerHTML= `
// <h1>${datos.nombre} </h1>
// <img src="${datos.img}" alt="">
// <p>${data.descripcion1}</p>
// <p>${datos.cantidad}</p>
// <span class="precio">$ ${datos.precio}</span>
//   <div>
//     <div>${datos.precio* datos.cantidad} </div>
//   </div>
// `
// const select_agregar_producto_carro= agregar_producto_carro.some((data) =>)

// container_modal_card.append(producto_modal_carro) 

// });



// console.log(producto_modal_carro)

modal_carrito() 