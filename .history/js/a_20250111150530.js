function loadContent(file) {
    fetch(file)
.then(res => {

    return res.text()
})
.then(data  => {
    document.getElementById("contenido").innerHTML=data
})
}

window.onload = function () {
    

fetch("")
.then(res => res.text())
.then(data  => {
    document.getElementById("").innerHTML=data
})

fetch("")
.then(res => res.text())
.then(data  => {
    document.getElementById("").innerHTML=data
})
}