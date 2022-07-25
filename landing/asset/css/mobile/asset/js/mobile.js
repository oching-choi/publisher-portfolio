$(function(){
   
  AOS.init();
    
    var swiper = new Swiper('.recommend .swiper-container', {
      pagination: {
        el: '.recommend .swiper-pagination',
      },
    });
    
    
      var swiper = new Swiper('.city_tour .swiper-container', {
        
        slidesPerView: 'auto', //auto가 먹으려면 width가 있어야함
        spaceBetween: 10,
        freeMode: true,
    });
    
    var swiper = new Swiper('.hot_place .swiper-container', {
        
        slidesPerView: 'auto',
        spaceBetween: 10, //사이간격
        freeMode: true, //슬라이드 흐르게
    });

    
    var swiper = new Swiper('.community .swiper-container', {
        
        slidesPerView: 'auto', //auto가 먹으려면 width가 있어야함- 내가 준 width
        spaceBetween: 10,
        freeMode: true,
    });

}) //지우지말기



// 헤더