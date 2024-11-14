// Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled', 'shadow-sm');
        } else {
            navbar.classList.remove('navbar-scrolled', 'shadow-sm');
        }
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Search box animation
    const searchBox = document.querySelector('.search-box input');
    if (searchBox) {
        searchBox.addEventListener('focus', () => {
            searchBox.parentElement.classList.add('search-focused');
        });
        searchBox.addEventListener('blur', () => {
            searchBox.parentElement.classList.remove('search-focused');
        });
    }

    // Category card hover effects
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('i').classList.add('hover-scale');
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('i').classList.remove('hover-scale');
        });
    });

    // Dynamic counter animation
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 10);
    }

    // Apply counter animation to stats
    document.querySelectorAll('[data-counter]').forEach(counter => {
        animateCounter(counter, parseInt(counter.dataset.counter));
    });
});