/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

	/*------------------
        Make feature-item fully clickable
    --------------------*/
    $(document).on('click', '.feature-item', function (e) {
        // If user clicked directly on an <a>, allow normal behaviour
        if ($(e.target).is('a')) {
            return;
        }
        var $link = $(this).find('h5 a').first();
        var href = $link.attr('href');
        if (!href || href === '#') {
            return; // nothing to follow
        }
        var target = $link.attr('target');
        if (target === '_blank') {
            window.open(href, '_blank');
        } else if (href.startsWith('#')) {
            // Jump to anchor within page
            window.location.hash = href;
        } else {
            window.location = href;
        }
    });

})(jQuery);
