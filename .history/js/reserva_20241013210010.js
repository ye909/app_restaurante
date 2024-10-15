const info = document.getElementById("info");
const form = document.getElementById("reservaForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("input", function () {
  // Chequea si todos los campos son válidos
  if (form.checkValidity()) {
    info.innerHTML = `lo sentimos debe llenar todos  los campos  <br> <br>GRACIAS  `;
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe sin hacer nada

  // Aquí puedes agregar la lógica para enviar los datos al servidor
  alert("Reserva enviada con éxito.");
});



    // info.innerHTML=`Bienvenido <br> <br>su reserva a sido exitosa <br> <br> GRACIAS<br> <br> por preferirnos  `
  // document.getElementById("apellido")
//       // document.getElementById("telefono")
//       // document.getElementById("cantidad")

//       //    habilitar = document.getElementById("habilitar").disabled = true
// })
