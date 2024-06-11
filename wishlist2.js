// JavaScript code for displaying wishlist items
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function clearWishlist() {
    wishlist = [];
    localStorage.removeItem('wishlist');
    updateWishlistDisplay();
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
                <button onclick="removeFromWishlist('${item.name}')">Remove</button>
            `;
            wishlistContainer.appendChild(wishlistItem);
        });
    }
}

function removeFromWishlist(itemName) {
    const index = wishlist.findIndex(item => item.name === itemName);
    if (index !== -1) {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistDisplay();
    }
}

// Initialize the wishlist display
document.addEventListener('DOMContentLoaded', () => {
    updateWishlistDisplay();
});
