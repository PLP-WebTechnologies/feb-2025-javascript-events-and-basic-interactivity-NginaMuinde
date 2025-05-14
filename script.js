document.getElementById('changeTextButton').addEventListener('click', function() {
    this.textContent = "You Clicked Me!";
});

const button = document.getElementById('changeTextButton');
button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});
button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

document.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

button.addEventListener('dblclick', function() {
    alert('Double Clicked!');
});

let currentImage = 0;
const images = document.querySelectorAll('#imageGallery img');
setInterval(() => {
    images[currentImage].style.display = 'none'; // Hide current
    currentImage = (currentImage + 1) % images.length; // Move to next
    images[currentImage].style.display = 'block'; // Show next
}, 2000);

document.getElementById('myForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Invalid email format!');
        event.preventDefault(); // Prevent form submission
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('password').addEventListener('input', function() {
    if (this.value.length < 8) {
        this.setCustomValidity('Password must be at least 8 characters long.');
    } else {
        this.setCustomValidity('');
    }
});

const feedback = document.createElement('div');
document.body.appendChild(feedback);
document.getElementById('password').addEventListener('input', function() {
    feedback.textContent = this.value.length < 8 ? 'Too short!' : 'Looks good!';
});
