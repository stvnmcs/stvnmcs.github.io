// Set current year automatically
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('footer-year').textContent = new Date().getFullYear();

// Mini cube interaction
const miniCube = document.querySelector('.mini-cube');
if (miniCube) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        miniCube.style.transform = `rotateX(${-15 + y * 10}deg) rotateY(${x * 360}deg)`;
    });

    // Pause animation on hover
    miniCube.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });

    miniCube.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
}

// About item interactions
document.querySelectorAll('.highlight-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--accent)';
        this.style.transform = 'translateY(-2px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border)';
        this.style.transform = 'translateY(0)';
    });
});

// Contact item interactions
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeft = `4px solid var(--accent)`;
    });

    item.addEventListener('mouseleave', function() {
        this.style.borderLeft = `1px solid var(--border)`;
    });
});

// Text animation for hero
const heroTitle = document.querySelector('.name-title');
if (heroTitle) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    heroTitle.style.transition = 'all 0.6s ease';
    observer.observe(heroTitle);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log(`%c
STEVEN MACIAS / TÁCTICO 90
NEW YORK CITY

`, 'font-family: "Archivo"; color: #FF5500; font-size: 14px; background: #F5F5F0; padding: 10px;');