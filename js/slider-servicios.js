console.log("hola")
// ===========Swiper slider servicios===========
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
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
        }
    },
});
