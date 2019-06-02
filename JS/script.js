$(document).ready(function() {
    var swiper = new Swiper ('.swiper-container', {

        effect:'coverflow',
        grabCursor: true,
        centeredSlides:true,
        slidesPerView:'auto',
        slideToClickedSlide: true,
        initialSlide: 6,
        coverflowEffect:{
         rotate: 45,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows:true,
        },
        pagination:{
            el:'.swiper-pagination',
        }
    });
});