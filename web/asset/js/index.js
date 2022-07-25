$(function(){
   
  AOS.init();

  
  $('body').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
      h = $(window).scrollTop();
    //스크롤값을 가져온다.
    
    if(wheel>0){
      //스크롤 올릴때
      $('.header').removeClass('hide')
        if(h>0){
            $('.header').addClass("on");
        }else{
            $('.header').removeClass('on');
        }
    } else {
      //스크롤 내릴때
      $('.header').addClass('hide')
    }
  });

    
//    flag=0;
//    $(window).scroll(function(){
//        h = $(window).scrollTop();
//        
//        if(h< $('.main_vis').outerHeight()){
//            if(flag==0){
//            main_ani();
//            flag=1;
//            }
//        }else{
//          //TweenMax.killAll();
//          flag=0;
//        }
//    })
    
    //main_ani();
    //main_vis 
    main_ani();
    
    function main_ani(){
        TweenMax.staggerFromTo('.main_vis h2 span i', 1.2,
    {
       bottom:'-100%'
    },
    {
       bottom:0
    },
    0.3
    );
    }
    
    
    

    

  //var controller = new ScrollMagic.Controller();
  //한번만 쓰면 되는 것
  
  //var facial_ani01 = TweenMax.to('.intro_wrap01 .right_area .img_wrap img', 0.5, {
    //backgroundColor: "#333333",
    //scale: 2.5,
    //rotation: 360,
   // y:50
  //});
  
  var facial_ani01 = TweenMax.fromTo(".intro_wrap01 .right_area .img_wrap img", 1, {
    y:100
    }, {
    y:-100
    })

   var scene = new ScrollMagic.Scene({
     triggerElement: ".intro_wrap01",
     duration: "100%",
     offset:-100
   })
  .setTween(facial_ani01)
  .addTo(controller)
  .addIndicators({
    name: "1"
  })
   
    var woman_ani01 = TweenMax.fromTo(".intro_wrap02 .left_area", 1, {
     scale:0.9
    }, {
    scale:1.1
    })
     var scene = new ScrollMagic.Scene({
     triggerElement: ".intro_wrap02",
     duration: "100%",
     //offset:-300
   })
  .setTween(woman_ani01)
  .addTo(controller)
  .addIndicators({
    name: "1"
  })

}) //지우지말기

// 헤더