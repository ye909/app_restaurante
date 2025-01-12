const menuItems = [
    { id: 1, name: "Tacos al Pastor", description: "Delicious tacos", region: "Latinoamérica" },
    { id: 2, name: "Pupusas", description: "Thick griddle cakes", region: "Centroamérica" },
    { id: 3, name: "Ceviche", description: "Fresh seafood", region: "Suramérica" },
  ];
  
  const menuItemsContainer = document.getElementById("menu-items");
  const dishSelect = document.getElementById("dish-select");
  const orderForm = document.getElementById("order-form");
  const confirmationSection = document.getElementById("confirmation-section");
  const menuSection = document.getElementById("menu-section");
  const orderSection = document.getElementById("order-section");
  let selectedRegion = "Todos";
  
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      selectedRegion = button.getAttribute("data-region");
      renderMenu();
    });
  });
  
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pedido realizado con éxito. ¡Gracias!");
    orderSection.style.display = "none";
    confirmationSection.style.display = "block";
  });
  
  document.getElementById("back-to-menu").addEventListener("click", () => {
    confirmationSection.style.display = "none";
    menuSection.style.display = "block";
  });
  
  function renderMenu() {
    menuItemsContainer.innerHTML = "";
    dishSelect.innerHTML = `<option value="" disabled selected>Selecciona un plato</option>`;
    const filteredItems = selectedRegion === "Todos" ? menuItems : menuItems.filter(item => item.region === selectedRegion);
  
    filteredItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      menuItemsContainer.appendChild(card);
  
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      dishSelect.appendChild(option);
    });
  }
  
  renderMenu();
  