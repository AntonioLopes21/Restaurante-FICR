
let cart = [];
let cartTotal = 0;

document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll('.btn-comprar');
    const cartCount = document.getElementById('cartCount');
    const cartElement = document.getElementById('cart');
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            
            cart.push({ name, price });
            cartTotal += price;

          
            cartCount.textContent = cart.length;
            cartTotalElement.textContent = cartTotal.toFixed(2);

           
            updateCartItems();

            // Exibe o carrinho
            cartElement.style.display = 'block';
        });
    });

    document.getElementById('cartButton').addEventListener('click', () => {
        cartElement.style.display = cartElement.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('checkoutButton').addEventListener('click', () => {
        alert('Compra finalizada!');
        
        cart = [];
        cartTotal = 0;
        cartCount.textContent = '0';
        cartTotalElement.textContent = '0.00';
        cartItemsElement.innerHTML = '';
        cartElement.style.display = 'none';
    });
});

function updateCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });
}