document.getElementById('submit-form').addEventListener('submit', function(event) {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Clear previous error messages
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = '';
    
    // Validate Name (at least 3 characters)
    if (name.length < 3) {
        errorMessage.textContent = 'Name must be at least 3 characters long.';
        event.preventDefault();
        return;
    }
    
    // Validate Email
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        event.preventDefault();
        return;
    }
    
    // Validate Subject (non-empty)
    if (subject.trim() === '') {
        errorMessage.textContent = 'Please enter a subject.';
        event.preventDefault();
        return;
    }
    
    // Validate Message (non-empty)
    if (message.trim() === '') {
        errorMessage.textContent = 'Please enter a message.';
        event.preventDefault();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

  