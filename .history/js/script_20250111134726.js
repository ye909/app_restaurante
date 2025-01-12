constconst menuItems = [
    // Define los mismos objetos del menú aquí
  ];
  
  let cart = [];
  let selectedRegion = 'Todos';
  
  const menuElement = document.getElementById('menu');
  const cartElement = document.getElementById('cart');
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const viewCartBtn = document.getElementById('view-cart-btn');
  const backToMenuBtn = document.getElementById('back-to-menu-btn');
  
  function renderMenu() {
    menuElement.innerHTML = '';
    const filteredItems = selectedRegion === 'Todos'
      ? menuItems
      : menuItems.filter(item => item.region === selectedRegion);
  
    filteredItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>$${item.price.toFixed(2)}</strong></p>
        <button data-id="${item.id}">Agregar</button>
      `;
      menuElement.appendChild(card);
    });
  }
  
  function renderCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
  
    cart.forEach(cartItem => {
      const itemElement = document.createElement('li');
      itemElement.innerHTML = `
        <div>
          <h4>${cartItem.name}</h4>
          <p>Cantidad: ${cartItem.quantity}</p>
          <p>Precio: $${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
        </div>
        <button data-id="${cartItem.id}" class="remove">Remover</button>
      `;
      cartItemsElement.appendChild(itemElement);
      total += cartItem.price * cartItem.quantity;
    });
  
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    viewCartBtn.textContent = `Ver Carrito (${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
  }
  
  function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    const existing = cart.find(cartItem => cartItem.id === id);
  
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  
    renderCart();
  }
  
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
  }
  
  menuElement.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      addToCart(Number(event.target.dataset.id));
    }
  });
  
  cartItemsElement.addEventListener('click', event => {
    if (event.target.classList.contains('remove')) {
      removeFromCart(Number(event.target.dataset.id));
    }
  });
  
  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      selectedRegion = button.dataset.region;
      renderMenu();
    });
  });
  
  viewCartBtn.addEventListener('click', () => {
    menuElement.classList.toggle('hidden');
    cartElement.classList.toggle('hidden');
  });
  
  backToMenuBtn.addEventListener('click', () => {
    menuElement.classList.remove('hidden');
    cartElement.classList.add('hidden');
  });
  
  renderMenu();
  renderCart();
  