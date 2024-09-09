
const container_modal_card = document.getElementById("container_modal_card")

ploductos.forEach(data => {
    // producto_modal_carro= ""
const producto_modal_carro = document.createElement("div")
producto_modal_carro.classList.add("producto-modal-carro")
producto_modal_carro.innerHTML= `
<h1>${data.nombre} </h1>
<img src="${data.img}" alt="">
<p>${data.descripcion1}</p>
<p>${data.cantidad}</p>
<span class="precio">$ ${data.precio}</span>

`

container_modal_card.append(producto_modal_carro) 

const pagar = document.createElement("button")

pagar.classList.add("pagar")
pagar.setAttribute("id","pagar")
pagar.textContent = "Pagar"
producto_modal_carro.append(pagar) 

 const total_pago = document.createAttribute("div")
 total_pago.classList.add("total-pago")
 total_pago.textContent = `Total a pagar: $${data.precio}`

 
});



console.log(producto_modal_carro)

