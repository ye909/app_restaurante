
const btn  = document.getElementById("submitBtn")
const form = document.getElementById("for_login")


form.addEventListener("input",()=>{
if (form.checkValidity() !=" ") {
    submitBtn.disabled= false
} else {
    submitBtn.disabled= true
}
})



