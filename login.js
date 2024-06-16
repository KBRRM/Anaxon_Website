function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function showSignUp() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sign up successful!');
        document.getElementById('signupForm').reset();
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login successful!');
        document.getElementById('loginForm').reset();
    });
});
