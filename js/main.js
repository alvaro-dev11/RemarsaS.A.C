// ===========Swiper slider===========
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

// ===========NavBar===========
let listElements = document.querySelectorAll('.nav__button--click')

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('arrow')

        let height = 0
        let menu = listElement.nextElementSibling // hermano directo del elemento
        let altoMenu = menu.clientHeight
        let altoMinimoMenu = menu.scrollHeight
        if (altoMenu == "0") {
            height = altoMinimoMenu
        }

        menu.style.height = `${height}px`
    })
})

// Navbar
const navMenuContainer = document.querySelector(".nav-menu-container");
let navMenu = document.querySelector(".nav__menu");
let iconMenu = document.querySelector(".menu");
let iconClose = document.querySelector(".close");

// =========== Cambiar icono menu ===========
iconMenu.addEventListener("click", () => {
    iconMenu.classList.add("hidden");
    iconClose.classList.add("visible");
    navMenu.classList.add("move");
    navMenuContainer.classList.add("pointer");
})
iconClose.addEventListener("click", () => {
    iconMenu.classList.remove("hidden");
    iconClose.classList.remove("visible");
    navMenu.classList.remove("move");
})

// =========== Cerrar Navbar ===========
window.addEventListener("click", (e) => {
    if (e.target == navMenuContainer || e.target==navMenu) {
        iconMenu.classList.remove("hidden");
        iconClose.classList.remove("visible");
        navMenu.classList.remove("move");
        navMenuContainer.classList.remove("pointer");
    }
})

// ===========Swiper slider productos===========
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});



// ===========Efecto Scroll en Botones de ayuda===========
const $btnUp = document.getElementById("up");

document.addEventListener("click", (e) => {
    if (e.target === $btnUp || e.target.matches(".btn__icon--back")) {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
})

window.addEventListener('scroll', () => {
    $btnUp.classList.toggle("visible", window.scrollY > 300)
});

// ===========Banner===========
const $bannerTitle = document.querySelector(".banner-title"),
    $bannerNav = document.querySelector(".banner-nav");
window.addEventListener('load', () => {
    $bannerTitle.classList.add("active");
    $bannerNav.classList.add("active");
})

// ===========Modal===========
let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener('click', (e) => {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
cerrar.addEventListener("click", () => {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 900)
})
window.addEventListener("click", (e) => {
    // console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");

        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 900)
    }
})

let $cta = document.querySelectorAll(".cta");
$cta.forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
    })
})


