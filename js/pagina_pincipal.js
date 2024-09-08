

const bienvenida = document.getElementById("bienvenida")

setTimeout(()=>{
    bienvenida.innerText="BIENVENIDOS/A "
    setTimeout(()=>{
        bienvenida.innerText=" "
    },1600)
},900)
document.addEventListener("DOMContentLoaded",()=>{
    console.log("cargarndo")
    mostrar_producto()
})



 function mostrar_producto() {
    

const container_producto_principal = document.getElementById("container_producto_principal")

ploductos.forEach((element)=>{
agregar_producto_carro= []

 const producto_principal = document.createElement("div")
 producto_principal.classList.add("producto_principal")
 producto_principal.innerHTML=`
 

 <h1>${element.nombre} </h1>
 <img src="${element.img}" alt="">
 <p>$  ${element.precio}</p>
 <span>${element.descripcion1}</span>

 `
 container_producto_principal.append(producto_principal)

 
const btnboton_agregar= document.createElement("button")
btnboton_agregar.innerText="agregar"


producto_principal.append(btnboton_agregar)

console.log(producto_principal)

agregar_producto_carro.push({
    nombre: element.nombre,
    precio: element.precio,
    descripcion: element.descripcion1,
    img:element.img,
    cantidad:element.cantidad

})

})

}





