// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations
function initAnimations() {
    // Hero section animation
    gsap.from('.hero-section h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top center'
        }
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
            }
        });
    });

    // Contact form animation
    gsap.from('.contact-form', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top bottom-=100'
        }
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

// Add this at the beginning of your main.js
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
}); 