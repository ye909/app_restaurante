
const btn  = document.getElementById("btn")
const form = document.getElementById("for_login")


form.addEventListener("input",function (){
if (form.checkVisibility()) {
    btn.disabled=false
} else {
    btn.disabled=true
}
})



