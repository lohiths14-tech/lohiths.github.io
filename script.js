// Preloader with extra effects
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000);
    }
});

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js for multiple text animation
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['AI/ML Student', 'Data Science Enthusiast', 'Python Developer', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if(name && email && subject && message) {
        // Show success animation
        const submitBtn = this.querySelector('.btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending (in a real app, you would send to a server)
        setTimeout(() => {
            alert(`Thank you ${name} for your message! I will get back to you soon at ${email}.`);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.reset();
        }, 1500);
    } else {
        alert('Please fill in all required fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
                });
            
            // Close mobile menu if open
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

// Animation for projects cards on scroll
const projectCards = document.querySelectorAll('.projects-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add current year to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-text p');
    if(footerText) {
        footerText.innerHTML = `Copyright &copy; ${currentYear} by Lohith S | All Rights Reserved.`;
    }
});

// Add scroll to top functionality
const scrollToTopBtn = document.querySelector('.footer-iconTop a');
if(scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add mouse move effect for interactive background
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const elements = document.querySelectorAll('.home-content, .about-content, .projects-card');
    elements.forEach(el => {
        const speed = el.dataset.speed || 0.05;
        const xPos = (x - 0.5) * speed * 100;
        const yPos = (y - 0.5) * speed * 100;
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add typing effect to about section
document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.about-content p');
    if(aboutText) {
        const text = aboutText.textContent;
        aboutText.textContent = '';
        aboutText.style.opacity = 1;
        
        let i = 0;
        const typing = setInterval(() => {
            if(i < text.length) {
                aboutText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 30);
    }
});