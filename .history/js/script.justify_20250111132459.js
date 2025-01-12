const menuItems = [
    {
        id: 1,
        name: 'Tacos al Pastor',
        description: 'Marinated pork tacos with pineapple',
        price: 12.99,
        image: 'tacos.jpg',
        region: 'Latinoamérica'
    },
    // ... (resto de los items del menú)
];

let cart = [];
let selectedRegion = 'Todos';

const menuContainer = document.getElementById('menu-container');
const cartContainer = document.getElementById('cart-container');
const viewCartBtn = document.getElementById('view-cart-btn');

viewCartBtn.addEventListener