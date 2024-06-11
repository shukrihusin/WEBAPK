let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(itemName) {
    const existingItemIndex = wishlist.findIndex(item => item.name === itemName);
    if (existingItemIndex > -1) {
        alert(itemName + ' is already in your wishlist!');
    } else {
        wishlist.push({ name: itemName });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistDisplay();
        alert(itemName + ' added to wishlist!');
    }
}

function learnMore(itemName) {
    // Redirect to the product page with the item name as a query parameter
    window.location.href = `wishlist.html?item=${encodeURIComponent(itemName)}`;
}

function addToCart(itemName, itemPrice) {
    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(itemName + ' added to cart!');

    // Play the sound effect
    const sound = new Audio('addtocart.mp3');
    sound.play();
}

function removeFromCart(itemName) {
    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    if (existingItemIndex > -1) {
        cart.splice(existingItemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    } else {
        alert(itemName + ' is not in your cart!');
    }
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartDisplay();
}

function clearWishlist() {
    wishlist = [];
    localStorage.removeItem('wishlist');
    updateWishlistDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items-container');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} (x${item.quantity})</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-item" onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const cartTotalElement = document.getElementById('cart-total');
        if (cartTotalElement) {
            cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
        }

        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
        }
    }
}

function updateWishlistDisplay() {
    const wishlistContainer = document.querySelector('.wishlist-items-container');
    if (wishlistContainer) {
        wishlistContainer.innerHTML = '';
        wishlist.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.classList.add('wishlist-item');
            wishlistItem.innerHTML = `
                <p>${item.name}</p>
                <button class="learn-more" onclick="learnMore('${item.name}')">Learn More</button>
            `;
            wishlistContainer.appendChild(wishlistItem);
        });

        const wishlistCountElement = document.querySelector('.wishlist-count');
        if (wishlistCountElement) {
            wishlistCountElement.textContent = wishlist.length;
        }
    }
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    if (cartElement) {
        cartElement.classList.toggle('hidden');
    }
}

function toggleWishlist() {
    const wishlistElement = document.getElementById('wishlist');
    if (wishlistElement) {
        wishlistElement.classList.toggle('hidden');
    }
}

function toggleSearch() {
    alert('Search functionality not implemented yet.');
}

function checkout() {
    window.location.href = 'checkout.html';
}

// Initialize the cart and wishlist display
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
    updateWishlistDisplay();
});
