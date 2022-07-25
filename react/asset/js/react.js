$(document).ready(function() {
    
    AOS.init();
    
    $.getJSON('./asset/js/actor.json', null, function(data, status){
       if (status == "success"){
         var result = data;
         var html = '';
          $.each(result, function(index, entry){
            //alert(entry['name'])
            html += '<div class="swiper-slide">';
            html += '<img src="' + entry.img + '">';
            html += '<p>'+entry.name+'</p>';
            html += '</div>';
         });
          $('.actor ul').append(html)

        }else if (status == "error" || status == "parsererror" ){
            alert("An error occured");
         }


   });
    
      
function slideShow(target,sort){
    $.getJSON('./asset/js/list.json', null, function(data, status){
       if (status == "success"){
         var result = data.filter(function (parm) {return parm.sort == sort });
         var html = '';
          $.each(result, function(index, entry){
            //alert(entry['name'])
            html += '<li class="swiper-slide">';
                 html += '<a>';
                  if(sort == 'watching'){
                     html += '<img src="' + entry.src + '" />';
                     html += '<h5>' + entry.title + '</h5>';
                     html += '<p>' + entry.desc + '</p>';
                   }else if(sort == 'popular'){
                     html += '<img src="' + entry.src + '" />';
                     html += '<span>' + (index+1) + '</span>';
                   }else{
                     html += '<img src="' + entry.src + '" />';
                   }
            //html += '<img src="' + entry.src + '">';
                  html += '</a>';
                  html += '</li>';
         });
          $(target).find('.swiper-wrapper').append(html)


        }else if (status == "error" || status == "parsererror" ){
            alert("An error occured");
         }
        
    var swiper = new Swiper('.main_vis .swiper-container', {
        autoplay: {
            delay: 3000,
        },
        effect : 'fade', // 페이드 효과 사용
        navigation: {
            nextEl: '.main_vis .next',
            prevEl: '.main_vis .prev',
        },
    });
        
        
   var swiper = new Swiper('.watching .swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
      breakpoints:{
        640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768:{
             slidesPerView: 4, 
             slidesPerGroup: 4,
        },
        1024:{
             slidesPerView: 5,    
             slidesPerGroup: 5,
        }, 
        1800:{
             slidesPerView: 7,    
             slidesPerGroup: 7,
        }
     },
      //loop: true,
      pagination: {
        el: '.watching .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.watching .next',
        prevEl: '.watching .prev',
      },
    });
        
        

    
    var swiper = new Swiper('.selected .swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
      breakpoints:{
        640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768:{
             slidesPerView: 4, 
             slidesPerGroup: 4,
        },
        1024:{
             slidesPerView: 5,    
             slidesPerGroup: 5,
        }, 
        1800:{
             slidesPerView: 7,    
             slidesPerGroup: 7,
        }
     },
      //loop: true,
      pagination: {
        el: '.selected .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.selected .next',
        prevEl: '.selected .prev',
      },
    });
    
    
    
    
    var swiper = new Swiper('.popular .swiper-container', {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
        breakpoints:{
        768:{
             slidesPerView: 5, 
             slidesPerGroup: 5,
        },
        1800:{
             slidesPerView: 10,    
             slidesPerGroup: 10,
        }
     },
      
      pagination: {
        el: '.popular .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.popular .next',
        prevEl: '.popular .prev',
      }
    });
    
    
    var swiper = new Swiper('.release .swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
      breakpoints:{
        640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768:{
             slidesPerView: 4, 
             slidesPerGroup: 4,
        },
        1024:{
             slidesPerView: 5,    
             slidesPerGroup: 5,
        }, 
        1800:{
             slidesPerView: 7,    
             slidesPerGroup: 7,
        }
     },
      ////loop: true,
      pagination: {
        el: '.release .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.release .next',
        prevEl: '.release .prev',
      },
    });
    
    
    var swiper = new Swiper('.recom01 .swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
      breakpoints:{
        640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768:{
             slidesPerView: 4, 
             slidesPerGroup: 4,
        },
        1024:{
             slidesPerView: 5,    
             slidesPerGroup: 5,
        }, 
        1800:{
             slidesPerView: 7,    
             slidesPerGroup: 7,
        }
     },
      //loop: true,
      pagination: {
        el: '.recom01 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.recom01 .next',
        prevEl: '.recom01 .prev',
      },
    });
    
    var swiper = new Swiper('.recom02 .swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
      breakpoints:{
        640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768:{
             slidesPerView: 4, 
             slidesPerGroup: 4,
        },
        1024:{
             slidesPerView: 5,    
             slidesPerGroup: 5,
        }, 
        1800:{
             slidesPerView: 7,    
             slidesPerGroup: 7,
        }
     },
      //loop: true,
      pagination: {
        el: '.recom02 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.recom02 .next',
        prevEl: '.recom02 .prev',
      },
    });
    
    var swiper = new Swiper('.recom03 .swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
      breakpoints:{
        640:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768:{
             slidesPerView: 4, 
             slidesPerGroup: 4,
        },
        1024:{
             slidesPerView: 5,    
             slidesPerGroup: 5,
        }, 
        1800:{
             slidesPerView: 7,    
             slidesPerGroup: 7,
        }
     },
      pagination: {
        el: '.recom03 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.recom03 .next',
        prevEl: '.recom03 .prev',
      },
    });
    
        
        
        
   });


    }
    
    //json 함수 실행;
    slideShow('.watching', 'watching');
    slideShow('.selected', 'selected');
    slideShow('.popular', 'popular');
    slideShow('.release', 'release');
    slideShow('.recom01', 'recom01');
    slideShow('.recom02', 'recom02');
    slideShow('.recom03', 'recom03');
    
    
    
     
    
  
    
    
    
    
    
    

    
    
    
    
    
});