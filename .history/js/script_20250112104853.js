  
  let cart = [];
  let selectedRegion = "Todos";
  
  const menuView = document.getElementById("menu-view");
  const cartView = document.getElementById("cart-view");
  const menuItemsContainer = document.getElementById("menu-items");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      selectedRegion = button.getAttribute("data-region");
      renderMenu();
    });
  });
  
  document.getElementById("menu-btn").addEventListener("click", () => {

    menuView.style.display = "block";
    cartView.style.display = "none";
    const  imgRestaurante = document.getElementById("imgRestaurante").remove()
    // audio de los botones
const playSound = function () {
  var audio = document.getElementById("clickSound");
  audio.play();
}
playSound()
  });
  
  document.getElementById("cart-btn").addEventListener("click", () => {
    menuView.style.display = "none";
    cartView.style.display = "block";
    renderCart();
  });
  
  document.getElementById("back-to-menu").addEventListener("click", () => {
    menuView.style.display = "block";
    cartView.style.display = "none";
  });
  
  function renderMenu() {
    menuItemsContainer.innerHTML = "";
    const filteredItems = selectedRegion === "Todos" ? menuItems : menuItems.filter(item => item.region === selectedRegion);
    filteredItems.forEach(item => {
    
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
    
        <h1 class="titulo_principal">${item.name}</h1>
            <img src="${item.image}" alt="${item.name}">
        <p>${item.description}</p>
        <p><strong>$${item.price.toFixed(2)}</strong></p>
        <button id="pagar">Pagar</button>
        <button id="btnaudio" onclick="addToCart(${item.id})">Agregar</button>
         
      `;
      menuItemsContainer.appendChild(card);
    });
  }
  
  function renderCart() {
    cartItemsContainer.innerHTML = "";
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.className = "card_carrito";
      cartItem.innerHTML = `
        <h1 class="titulo_carrito">${item.name}</h1>
        <img src="${item.image}" alt="${item.name}">
          <p>${item.description}</p>
        <p>Cantidad: ${item.quantity}</p>
        <p><strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
          <button id="pagar">Pagar</button>
           <button id="delete">eliminar</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
  }
  
  function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  }
  
  renderMenu();
  