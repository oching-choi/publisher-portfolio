$(function(){
    
    $('.episode>ul').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
    });
    
    $('.watching>ul').slick({
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 5
    });
    
    
    $('.selected>ul').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6
    });
    
    
    $('.po_con').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6
    });
    
    
    $('.release>ul').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 5,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    
    
    $('.recommend>ul').slick({
    infinite: true,
    slidesToShow:6,
    slidesToScroll: 6
    });
    
});