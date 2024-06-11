// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart total and display cart items
    updateCartDisplay();

    // Handle "Place Order" button click event
    document.getElementById('place-order-btn').addEventListener('click', function() {
        // Redirect to payment page
        window.location.href = 'payment.html';
    });

    // Function to update cart total and display cart items
    function updateCartDisplay() {
        const cartContainer = document.querySelector('.cart-items-container');
        cartContainer.innerHTML = '';
        let cartTotal = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} (x${item.quantity})</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartContainer.appendChild(cartItem);
            cartTotal += item.price * item.quantity;
        });

        document.getElementById('cart-total').textContent = `RM${cartTotal.toFixed(2)}`;
    }
});
