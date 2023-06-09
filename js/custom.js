/*
  file name : custom.js
*/

(function($) {
	"use strict";
	
	/*==================================================
        wow
	  ===================================================*/
		new WOW().init();
	/*==================================================
        Slider
	 ===================================================*/
	 $('.slider').slick({
		// dots: true,
		infinite: true,
		centerMode: true,
		centerPadding: '12%',
		slidesToShow: 3,
		prevArrow: false,
    	nextArrow: false,
		autoplay: true,
  		autoplaySpeed: 1,
		speed: 1000,
		responsive: [
		     {
			  	breakpoint: 1200,
			    settings: {
				slidesToShow: 3
			  }
			},
				{
			  	breakpoint: 992,
			    settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
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
	
	/*==================================================
        Sidebar
	 ===================================================*/
	 $("#menu-close").click(function(e) {
		e.preventDefault();
		$("#sidebar").toggleClass("active");
	  });
	  $("#top-menu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('collapsed');
		$("#sidebar").toggleClass("active");
	  });
	  
	
	/*==================================================
        Toggle
	 ===================================================*/
	 
	 $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
        $("#header").toggleClass("head-add");
    });
	
	/*==================================================
        fixed menu
	  ===================================================*/
		// $(window).on('scroll', function () {
		// 	if ($(window).scrollTop() > 50) {
		// 		$('.top-head').addClass('fixed-menu');
		// 	} else {
		// 		$('.top-head').removeClass('fixed-menu');
		// 	}
		// });
		
	/*==================================================
		Select2
	===================================================*/
	
		$(".select2").select2();
	
	
	
	/*==================================================
        selectpicker 
	 ===================================================*/
		$('.selectpicker').selectpicker();
	
	
	
	
	
	
	
})(jQuery);


