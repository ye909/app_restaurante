const form = document.querySelector("form")
const info = document.getElementById("info")


const habilitar = document.getElementById("habilitar").addEventListener("click", btnhabilitar)

function btnhabilitar(even) {
    even.prevenDufault()
if (form) {
  info.innerText="lo sentimos no puede accerder al sistemas "
} else {
    alert("ox")
}

// document.getElementById("nombre")
// document.getElementById("apellido")
// document.getElementById("telefono")
// document.getElementById("cantidad")



//     disabled
}