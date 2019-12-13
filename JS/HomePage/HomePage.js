/*
 * Home page js 
 */

{	
	new WOW().init();

	// Back to top button
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 100) {
	    $('.back-to-top').fadeIn('slow');
	  } else {
	    $('.back-to-top').fadeOut('slow');
	  }
	});
	$('.back-to-top').click(function(){
	  $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
	  return false;
	});

	// JQuery code
	$(document).ready(function() {

		var aboutTop = $('.about-section').offset().top;

		$(window).on('scroll', function(){
			if ($(window).scrollTop()>aboutTop-100 && $(window).width() > 700){
				TweenMax.to(".left-about-1", 1.0, {
				 	top: "0%",
				 	opacity: "1"
				});
				TweenMax.to(".left-about-2", 0.9, {
					delay: 1,
				 	top: "0%",
				 	opacity: "1"
				});
				TweenMax.to(".right-about-1", 1.0, {
				 	top: "0%"
				});
				TweenMax.to(".right-about-2", 0.9, {
					delay: 1,
				 	top: "0%"
				 	
				});
			}

		});

		TweenMax.to(".overlay h1", 3, {
			opacity: 0,
		 	y: -60,
		 	ease: Expo.easeInOut
		});
		TweenMax.to(".overlay", 4, {
		 	delay: 1,
		 	top: "-140%",
		 	ease: Expo.easeInOut
		});
		///////////
		
	});

}
