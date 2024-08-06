//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelector(".nav-items a")

menuBtn. addEventListener("click", () => {
navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
});
});


//Common reveal options to create reveal animations
ScrollReveal({      
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 100, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 100, origin: 'left', interval:50 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .copy-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 600, origin: 'right', interval:100 });
ScrollReveal().reveal('.skills-description, service-description, .contact-card, .client-swiper, .contact-left h2', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 100, origin: 'bottom', interval: 100 });
ScrollReveal().reveal('footer .group', {delay: 100, origin: 'top', interval: 50 });