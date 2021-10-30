$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(".header-menu").toggleClass('active');
    $(".profile-card").slideUp(333);
	});
  $(".header-menu__close").on("click", function() {
    $(".header-menu").removeClass('active');
  });

	/*==========/menu-toggle=========*/

  /*===========Favourites============*/
     $(".offers-card-about__favourites a").on("click", function() {
     event.preventDefault();
    $(this).toggleClass('active');
  });
  /*===========/favourite============*/

  /*======Header-menu__item_open=============*/
  $(".header-menu__item_open").on("click", function() {
    $(this).find(".header-menu__list").slideToggle(333);
    $(this).toggleClass('active');
  });
  /*==========/header-menu__item_open=========*/

  /*======Profile-card=============*/
  $(".profile").on("click", function() {
    $(".profile-card").slideToggle(333);
    $(".header-menu").removeClass('active');
  });
  /*==========/profile-card=========*/

  /*======FAQ=============*/
  $(".faq__question").on("click", function() {
    $(this).next().slideToggle(333);
    $(this).toggleClass('active');
  });
  /*==========/FAQ=========*/

  /*===========Slider=============*/
  $('.offers__slider_best').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 4,
  prevArrow: $('.offers__best .slider-arrow_prev'),
  nextArrow: $('.offers__best .slider-arrow_next'),
  responsive: [
    {
      breakpoint: 1321,
      settings: {
        prevArrow: $('.offers__best .slider-arrow_prev'),
        nextArrow: $('.offers__best .slider-arrow_next'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        prevArrow: $('.offers__best .slider-arrow_prev'),
        nextArrow: $('.offers__best .slider-arrow_next'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 546,
      settings: {
        prevArrow: $('.offers__best .slider-arrow_prev'),
        nextArrow: $('.offers__best .slider-arrow_next'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}).on('setPosition', function (event, slick) {
 	
 	h = 0;
 	par =  $('.offers__slider_best .slick-slide');
 	 par.each(function() {
	 	 
	 	 
 if($(this).height() > h)
 {
	 h = $(this).height();
 }
 

});
 
 	$('.offers__slider_best .slick-slide').css('height', h+'px');
 
});

  $('.offers__slider_last').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 4,
  prevArrow: $('.offers__last .slider-arrow_prev'),
  nextArrow: $('.offers__last .slider-arrow_next'),
  responsive: [
    {
      breakpoint: 1321,
      settings: {
        prevArrow: $('.offers__last .slider-arrow_prev'),
        nextArrow: $('.offers__last .slider-arrow_next'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        prevArrow: $('.offers__last .slider-arrow_prev'),
        nextArrow: $('.offers__last .slider-arrow_next'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 546,
      settings: {
        prevArrow: $('.offers__last .slider-arrow_prev'),
        nextArrow: $('.offers__last .slider-arrow_next'),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}).on('setPosition', function (event, slick) {
 	
 	h = 0;
 	par =  $('.offers__last .slick-slide');
 	 par.each(function() {
	 	 
	 	 
 if($(this).height() > h)
 {
	 h = $(this).height();
 }
 

});
 
 	$('.offers__last .slick-slide').css('height', h+'px');
 
});

  $('.reviews__slider').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

  /*================/slider============*/


  /*==============Owl-slider==============*/

  $('.gallery').owlCarousel({
    center: true,
    smartSpeed:500,
    items:2,
    loop:true,
    dots: true,
    margin:0,
    dots:true,
    });

  	
});


