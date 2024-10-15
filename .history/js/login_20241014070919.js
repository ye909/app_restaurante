
const btn  = document.getElementById("submitBtn")
const form = document.getElementById("for_login")


form.addEventListener("input",function (){
if (form.checkVisibility()) {
    submitBtn.disabled= false
} else {
    submitBtn.disabled= true
}
})



