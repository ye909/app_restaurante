const info = document.getElementById("info");
const form = document.getElementById("reservaForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("input", function () {
  // Chequea si todos los campos son válidos
  if (form.checkValidity()) {
    submitBtn.disabled = false;
    info.innerHTML=`Bienvenido <br> <br>su reserva a sido exitosa <br> <br> GRACIAS<br> <br> por preferirnos  `
   
  } else {
    submitBtn.disabled = true;
    
    info.innerHTML = `lo sentimos debe llenar todos  los campos  para que el boton de reserva se habilite <br> <br>GRACIAS  `;
  }
});
