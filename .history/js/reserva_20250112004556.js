const form_cliente = document.getElementById("form_cliente");
const validar_nombre = document.getElementById("validar_nombre");
const  container = document.getElementById("container");
const  container_modal_reserva = document.getElementById("container_modal_reserva");

const   boton = document.getElementById("submit-button");


boton.addEventListener("click",()=>{
container.style.display="none"

container_modal_reserva.style.opacity=1
})



form_cliente.addEventListener("click", (event) => {
  event.preventDefault()


  const nombre = document.getElementById("nombre").value;


  if (nombre === nombre) {
    validar_nombre.innerText ="   " ,  nombre;
  }
  
});

