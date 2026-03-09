// Smooth scroll reveal animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    const interestSection = document.querySelector('#interest');
    
    if (aboutSection) {
        aboutSection.classList.add('fade-in');
        observer.observe(aboutSection);
    }
    
    if (interestSection) {
        interestSection.classList.add('fade-in');
        observer.observe(interestSection);
    }
});

// Form submission handler
document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        board: document.getElementById('board').value,
        year: document.getElementById('year').value
    };
    
    console.log('Form submitted:', formData);
    
    // TODO: Replace this with actual form submission logic
    // Example: Send to Formspree, EmailJS, or your backend
    
    alert('Thank you for your interest! We\'ll be in touch soon.');
    this.reset();
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.padding = '1rem 2rem';
    } else {
        header.style.padding = '1.5rem 2rem';
    }
    
    lastScroll = currentScroll;
});
