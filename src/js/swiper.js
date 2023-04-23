const swiper = new Swiper(".mySwiper", {
    sledesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '0' + '<span class="' + currentClass + '"></span>' + '<span class="pagination-line"></span>' + '0' + '<span class="' + totalClass + '"></span>';
        }
    }
})