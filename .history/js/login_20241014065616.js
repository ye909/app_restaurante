const Contraseña = document.getElementById("contraseña")
const correo  = document.getElementById("correo")
const form = document.getElementById("for_login")


form.addEventListener("input",()=>{
if (form.checkVisibility()) {
    disabled=false
} else {
    disabled=true
}
})