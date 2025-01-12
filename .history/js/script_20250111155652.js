const menuItems = [
  {
    id:1,
    nombre: "Bebida caliente",
    img: "./public/imagen/bebidas_calientes1.PNG",
    precio: 20000,
    descripcion1: "hecho en los mejores lugares de paris",
    cantidad: 1,
  },

  {
    id:4,
  precio:10000,
  nombre:"carne",
  img:"./public/imagen/mexica1.jpg",
    descripcion:"Los tacos son uno de los mida "
  , descripcion1:"tanos"
  },
  {
    id:5,
    precio:100,
    nombre:"Sancocho",
    img:"./public/imagen/sancocho.webp",
      descripcion:"ya no kkkkk",
       descripcion1:"plato de casula"
  },
  {
    id:6,
    precio:30000,
  nombre:"Lechona",
  img:"./public/imagen/mexica2.jpg",
    descripcion:"La lechona es un plato típico de la "
   ,descripcion1:"plátanos rellenos"
  },
  {
    id:7,
  precio:90000,
  nombre:"Postre",
  img:"./public/imagen/postre2.PNG",
    descripcion:"ya nhhjshhshao ",
     descripcion1:"Sabor y dulsura en el plato"
  },
  {
    id:8,
  precio:10000,
  nombre:"Coltel",
  img:"./public/imagen/coltel.webp",
    descripcion:"Los tacos son uno de comida "
  , descripcion1:"tanos"
  },

  {
    id:10,
    precio:30000,
  nombre:"Cerveza",
  img:"./public/imagen/cervezas.webp",
    descripcion:"La lechona es un conoce como "
   ,descripcion1:"plátanos rellenos"
  },
  {
    id:9,
    precio:100,
    nombre:"plátanos rellenos",
    img:"./public/imagen/platano.PNG",
      descripcion:"ya no kkkkk",
       descripcion1:"Rellenos de bocadillo y queso"
  },
  {
    id:10,
    precio:30000,
  nombre:"Jugos",
  img:"./public/imagen/JUGOS_NATURALES.jpg",
    descripcion:"La lechona es unente se conoce como "
   ,descripcion1:"plátanos rellenos"
  },
  {
    id:11,
  precio:90000,
  nombre:"Arrozanas",
  img:"./public/imagen/mexico6.jpg",
    descripcion:"ya nhhjshhshao ",
     descripcion1:"plátanos rellenos"
  },
  {
  id:11,
  precio:90000,
  nombre:"Licor",
  img:"./public/imagen/licores.webp",
    descripcion:"ya nhhjshhshao ",
     descripcion1:"plátanos rellenos"
  }
  //    contenido:"ya no"
];
  
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
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>$${item.price.toFixed(2)}</strong></p>
        <button onclick="addToCart(${item.id})">Agregar</button>
      `;
      menuItemsContainer.appendChild(card);
    });
  }
  
  function renderCart() {
    cartItemsContainer.innerHTML = "";
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.className = "card";
      cartItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Cantidad: ${item.quantity}</p>
        <p><strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
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
  