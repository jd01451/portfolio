$(document).ready(function(){
    AOS.init();

    const swiper = new Swiper('.swiper', {

      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });
});