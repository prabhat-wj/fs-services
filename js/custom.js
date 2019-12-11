(function($) {
	
	'use strict';
	
	//Cache jQuery Selector
	var $window		= $(window),
		$header		= $('#header'),					// 3. Update Header Style + Scroll to Top
		$dropdown   = $('.dropdown-toggle'),		// 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
		$team		= $('.our-team'),				// 7. Our Engineers Carousel
		$gallery	= $('.photo_gallery'),			// 8. Photo Gallery Carousel
		$client		= $('.testimonials_carousel'),	// 9. Testimonials Carousel Slider
		$client2	= $('.testimonials_carousels'),	// 10. Testimonials Carousel-2 Slider
		$brand		= $('.partner-slider'),			// 13. Our Partner Logos Slider Auto
		$contact	= $('#contact-form');
	
	
	// 1. Preloader For Hide loader
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
			$('body').removeClass('page-load');
		}
	}
	
	
	//Scroll top by clicking arrow up
	$window.scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#scroll').fadeIn();
		}
		else {
			$('#scroll').fadeOut();
		}
	});
	$('#scroll').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return !1;
	});
	
	// 2. Running the code when the document is ready
    $(document).ready(function() {
		$('#slider').layerSlider({
			sliderVersion: '6.0.0',
			type: 'fullwidth',
			responsiveUnder: 0,
			layersContainer: 1200,
			maxRatio: 1,
			parallaxScrollReverse: true,
			hideUnder: 0,
			hideOver: 100000,
			skin: 'v5',
			showBarTimer: true,
			thumbnailNavigation: 'disabled',
			allowRestartOnResize: true,
			skinsPath: 'skins/',
			height: 740
		});
	});
	
	
	// 2. Update Header Style + Scroll to Top
	function headerStyle() {
		if($header.length){
			var windowpos = $window.scrollTop();
			if (windowpos >= 130) {
				$header.addClass('fixed-header');
			} else {
				$header.removeClass('fixed-header');
			}
		}
	}
	
	
	// 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile	
	$('#bs-example-navbar-collapse-1').each(function() {
		$dropdown.on('click', function(e){
			if($window.width() < 1100){
				if($(this).parent('.dropdown').hasClass('visible')){
				//	$(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
				//	$(this).parent('.dropdown').removeClass('visible');
					window.location = $(this).attr('href');
				}
				else{
					e.preventDefault();
					$(this).parent('.dropdown').siblings('.dropdown').children('.dropdown-menu').slideUp(300);
					$(this).parent('.dropdown').siblings('.dropdown').removeClass('visible');
					$(this).parent('.dropdown').children('.dropdown-menu').slideDown(300);
					$(this).parent('.dropdown').addClass('visible');
				}
				e.stopPropagation();
			}
		});
		
		$('body').on('click', function(e){
			$dropdown.parent('.dropdown').removeClass('visible');
		});
		
		$window.on('resize', function(){
			if($window.width() > 991){
				$('.dropdown-menu').removeAttr('style');
				$('.dropdown ').removeClass('visible');
			}
		});
		
	});
	
	
	// 3. Click Search Icon and Open Search Field	
	var $srcicon = $('.search-bar a'),
		$srcfield = $('#search');
		$srcicon.on('click', function(event){
		event.preventDefault();
		$srcfield.addClass('visible');
		event.stopPropagation();
	});
	
	$('.src-close').on('click', function(){
		$srcfield.removeClass('visible');
	});
	
	$srcfield.on('click', function(event){
		event.stopPropagation();
	});
	
	$window.on('click', function(e){
		$srcfield.removeClass('visible');
	});
	
	
	// 4. Auto active class adding with navigation
	$window.on('load', function(){
		var current = location.pathname;
		var $path = current.substring(current.lastIndexOf('http://unicoderbd.com/') + 1);
		$('.navbar-nav li a').each(function(e){
			var $this = $(this);
			// if the current path is like this link, make it active
			if($path == $this.attr('href')){
				$this.parent('li').addClass('active');
			}
			else if($path == ''){
				$('.navbar-nav li.first').addClass('active');
			}
		})
	})
	
	// 10. Use for Accordion Box
	if($('.according_area').length){
		$('.according_title').on('click', function(){		
			if($(this).hasClass('active')){
				$(this).addClass('active');			
			}
			
			//if ($(this).next('.according_details').is(':visible')){
//				$(this).removeClass('active');
//			}
			else{
				$('.according_title').removeClass('active');
				$('.according_details').slideUp(300);
				$(this).addClass('active');
				$(this).next('.according_details').slideDown(300);	
			}
		});	
	}
	// 6. Photo Gallery Carousel
	if ($gallery.length) {
		$gallery.owlCarousel({
		 loop: true,
		 autoplay: false,
		 margin: 30,
		 nav: true,
		smartSpeed: 500,
		 dots: false,
		 navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
		responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		 });
	}
	
	// 7. Testimonials Carousel Slider
	if ($client.length) {
		$client.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				}
			}
		});    		
	}
	// 5. Our Engineers Carousel
	if ($team.length) {
	$team.owlCarousel({
	 loop: true,
	 autoplay: true,
	 margin: 30,
	 nav: true,
	smartSpeed: 500,
	 dots: false,
	 navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		71024:{
			items:3
		},
		1200:{
			items:4
		}
	}
	 });
	}
	
	
	// 8. Testimonials Carousel-2 Slider
	if ($client2.length) {
	$client2.owlCarousel({
	 loop: true,
	 autoplay: true,
	 margin: 30,
	 nav: true,
	smartSpeed: 500,
	 dots: false,
	 navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		760:{
			items:2
		},
		1024:{
			items:3
		},
		1200:{
			items:3
		}
	}
	 });
	}
	
	
	
	// 9. Our Partner Logos Slider Auto
	if ($brand.length) {
		$brand.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			dots:false,
			autoplay: 4000,
			navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}
	
	
	
	// 11. Fact Counter For Achivement Counting
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .count.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-num").attr("data-stop"),
					r = parseInt($t.find(".count-num").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-num").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-num").text(this.countNum);
						}
					});
				}
				
				//set skill building height


					var size = $(this).children('.progress-bar').attr('aria-valuenow');
					$(this).children('.progress-bar').css('width', size+'%');

				
			});
		}
	}
			
			
	// 4. Cart dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
	$('#bs-example-navbar-collapse-1').each(function() {
	
		$('.cart-dropdown').click(function(e) {
			if($window.width() > 992){
				e.stopPropagation();
			}
		});		
	});
	
	
	// 13. Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.sortable-masonry .filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 1 
				 },
				animationOptions:{
					duration:1000,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 1000,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('bind', 'resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 1000,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.sortable-masonry .filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	
	
	// 14. Contact Form Validation
	if($contact.length){
		$contact.validate({  //#contact-form contact form id
			rules: {
				firstname: {
					required: true    // Field name here
				},
				email: {
					required: true, // Field name here
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			},
			
			messages: {
                firstname: "Please enter your First Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
				message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function() {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

		});
	} 

	
	// 15. Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  });
		wow.init();
	}
	

	// 16. Range Slider
	$(document).ready(function(){
		var rangeSlider = function(){
		  var slider = $('.range-slider'),
			  range = $('.range-slider__range'),
			  value = $('.range-slider__value');
			
		  slider.each(function(){

			value.each(function(){
			  var value = $(this).prev().attr('value');
			  $(this).html(value);
			});

			range.on('input', function(){
			  $(this).next(value).html(this.value);
			});
		  });
		};

		rangeSlider();

	});
	
    // 17. When document is Scrollig, do	
	$window.on('scroll', function() {
		headerStyle();
		factCounter();
	});
		
    // 18. When document is loading, do	
	$window.on('load', function() {
		handlePreloader();
		enableMasonry();
	});
		
	// 19. Youtube and Vimeo video popup control
	jQuery(function(){
		jQuery("a.video-popup").YouTubePopUp();
	});
	
	// 20. LightBox / Fancybox
	if($('.img_view').length) {
		$('.img_view').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	// 21. Put slider space for nav not in mini screen
	 if(document.querySelector('.nav-on-top') !== null) {
		var get_height = jQuery('.nav-on-top').height();
			if(get_height > 0 && $window.width() > 991){
			jQuery('.nav-on-top').next().css('margin-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 991){
				jQuery('.nav-on-top').next().css('padding-top', '0');
			}
			else {
				jQuery('.nav-on-top').next().css('margin-top', get_height);
			}
		});
	 }
	 if(document.querySelector('.nav-on-banner') !== null) {
		var get_height = jQuery('.nav-on-banner').height();
			if(get_height > 0 && $window.width() > 991){
			jQuery('.nav-on-banner').next().css('padding-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 991){
				jQuery('.nav-on-banner').next().css('padding-top', '0');
			}
			else {
				jQuery('.nav-on-banner').next().css('padding-top', get_height);
			}
		});
	 }
	
})(window.jQuery);