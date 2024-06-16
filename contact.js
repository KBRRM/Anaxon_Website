document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // reCAPTCHA validation check
        if (grecaptcha.getResponse() === "") {
            alert("Please complete the reCAPTCHA");
        } else {
            alert('Thank you for your enquiry. We will get back to you soon!');
            document.getElementById('contactForm').reset();
        }
    });
});
