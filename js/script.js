let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
        
        // Add smooth scale effect
        document.querySelector('.main-home-image').style.transform = 'scale(0.95)';
        setTimeout(() => {
            document.querySelector('.main-home-image').style.transform = 'scale(1)';
        }, 200);
    };
});

// Initialize Swiper with modern settings
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
    effect: 'slide',
    speed: 800,
});

// Smooth scroll for anchor links
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

// Add scroll animation for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.padding = '1rem 9%';
        header.style.background = 'rgba(253, 248, 242, 0.98)';
    } else {
        header.style.padding = '2rem 9%';
        header.style.background = 'rgba(253, 248, 242, 0.95)';
    }
});