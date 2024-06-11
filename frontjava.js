// Trigger animation when the section comes into view
window.addEventListener('scroll', () => {
    const section = document.getElementById('news-session');
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight * 0.75) {
        section.classList.add('show');
    }
});

// Function to scroll news items left or right
function scrollNews(direction) {
    const container = document.querySelector('.news-items-container');
    const scrollAmount = 300; // Adjust this value as needed

    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// Variables to store cart and wishlist items
let cartItems = [];
let wishlistItems = [];

// Initialize cart and wishlist arrays
let cart = [];
let wishlist = [];

// Add this code to your JavaScript file
function addToCart(item) {
    showNotification('cart-notification');
    // Add logic to add item to the cart
}

function addToWishlist(item) {
    showNotification('wishlist-notification');
    // Add logic to add item to the wishlist
}

function showNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000); // Hide notification after 2 seconds
}


function learnMore(item) {
    alert(`Learn more about ${item}`);
    // You can implement more details about each item here, such as redirecting to a detailed page.
}

// Function for handling icon clicks
function toggleCart() {
    alert("Items in Cart: " + (cart.length ? cart.join(', ') : "No items in cart"));
}

function toggleWishlist() {
    alert("Items in Wishlist: " + (wishlist.length ? wishlist.join(', ') : "No items in wishlist"));
}

// Function for changing header color
function changeHeaderColor() {
    const header = document.getElementById('header');
    header.style.background = generateRandomGradient();
}

// Function for generating random gradient
function generateRandomGradient() {
    const angle = Math.floor(Math.random() * 360);
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Function for generating random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    return `#${Array.from({ length: 6 }).map(() => letters[Math.floor(Math.random() * 16)]).join('')}`;
}

// Function for scrolling to content
function scrollToContent() {
    document.querySelector('.news').scrollIntoView({ behavior: 'smooth' });
}

// Function for displaying a random quote
function displayRandomQuote() {
    const quotes = [
        { text: "Winning isn't everything, but wanting to win is.", author: "Vince Lombardi" },
        { text: "The difference between the impossible and the possible lies in a person’s determination.", author: "Tommy Lasorda" },
        { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" }
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(`"${randomQuote.text}" - ${randomQuote.author}`);
}

// Function for toggling search
function toggleSearch() {
    alert('Search functionality will be implemented here!');
}

// Function for showing news details
function showNewsDetails(sport) {
    const newsDetails = {
        football: 'Football News: Safawi and Akhyar transfers to a Terengganu club!',
        basketball: 'Basketball News: Lakers win the championship!',
        tennis: 'Tennis News: Federer announces retirement!'
    };
    alert(newsDetails[sport] || 'No news available.');
}

// jQuery animation for smooth scrolling
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

function registerEvent(eventName) {
    alert("You've booked " + eventName + "!"); // Example alert, replace with your booking logic
}

function redirectToBookingForm(stadiumName) {
    window.location.href = 'form.html?stadium=' + encodeURIComponent(stadiumName);
}

