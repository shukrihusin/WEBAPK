// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to auto-fill stadium name in the form
function autoFillStadiumName() {
    var stadiumName = getUrlParameter('stadium');
    document.getElementById('stadiumName').value = stadiumName;
}

// Function to handle form submission and save data to local storage
function submitForm(event) {
    event.preventDefault();
    var formData = new FormData(document.getElementById('bookingForm'));
    var data = {};
    for (var pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    localStorage.setItem('bookingData', JSON.stringify(data));
    // Display success message
    document.getElementById('successMessage').style.display = 'block';
    // Reset form
    document.getElementById('bookingForm').reset();
    // Redirect to front page after submission
    setTimeout(function () {
        window.location.href = 'frontpage.html';
    }, 2000);
}

// Auto-fill stadium name when the page loads
window.onload = autoFillStadiumName;

// Add form submission event listener
document.getElementById('bookingForm').addEventListener('submit', submitForm);
