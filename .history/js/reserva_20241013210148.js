const info = document.getElementById("info");
const form = document.getElementById("reservaForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("input", function () {
  // Chequea si todos los campos son válidos
  if (form.checkValidity()) {
    submitBtn.disabled = false;
    info.innerHTML = `lo sentimos debe llenar todos  los campos  <br> <br>GRACIAS  `;
   
  } else {
    submitBtn.disabled = true;
    info.innerHTML=`Bienvenido <br> <br>su reserva a sido exitosa <br> <br> GRACIAS<br> <br> por preferirnos  `
  
  }
});
