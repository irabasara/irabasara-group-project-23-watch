// SWIPER
const swiper = new Swiper(".mySwiper", {
    sledesPerView: 1,
    spaceBetween: 5,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

})