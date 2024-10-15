
const btn  = document.getElementById("submitBtn")
const form = document.getElementById("for_login")


form.addEventListener("input",function (){
if (form.checkValidity()) {
    submitBtn.disabled= true
} else {
    submitBtn.disabled= false
}
})



