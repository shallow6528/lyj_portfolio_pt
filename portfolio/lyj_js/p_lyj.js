$(document).ready(function(){

    AOS.init(); //aos 실행 객체에 직접 값을 넣은것
    $(document).ready(function() {
        "use strict";})
      
        //Swiper

        var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1
});


//메뉴
    $('#allMenu').click(function(){
        $(this).toggleClass('open');
    })
    $('#gnb a').click(function(e){
        e.preventDefault();
        var clicka = $(this);
        $('body, html').animate({
            scrollTop : $(clicka.attr('href')).offset().top
        }, 400,function(){
            $('#gnb a').removeClass('act')
            clicka.addClass('act');
        })
        
    })
})


//about skill
$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

// 퀵메뉴
$(document).ready(function(){
  $('#quick > a').click(function(){
      $('#quick').toggleClass('on');
  });
  $('#quick .up').click(function(){
      $('body, html').animate({ 
          scrollTop : $($(this).attr('href')).offset().top 
          },400,function(){
          $('#quick .up').removeClass('on')         
      });
  });
});