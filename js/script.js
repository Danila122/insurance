document.addEventListener('DOMContentLoaded', ()=>{
	
	$('.header__burger').click(function () {
		$('.header__burger,.header__menu, select').toggleClass('active');
		$('body').toggleClass('lock')
		$('.select__body').toggleClass('active-burger')
	});
	
	$('.main-screen__slider').slick({
		dogs: false,
		swipe: true,
		waitForAnimate: true,
		mobileFirst: true,
		speed: 900,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
	})	
		
	$('.directions__slider').slick({
		arrows: true,
		dogs: false,
		swipe: true,
		waitForAnimate: true,
		mobileFirst: false,
		speed: 900,
		infinite: true,
		autoplay: true,
			autoplaySpeed: 2000,
	})	
		
	$('.reviews__slider').slick({
		arrows: true,
		dots: true,
		pauseOnHover: true,
		swipe: true,
		waitForAnimate: true,
		mobileFirst: false,
		speed: 900,
		infinite: false,
})
	
	$('.list__slider').slick({
		infinite: false,
		arrows: true,
		dots: true,
		pauseOnHover: true,
		swipe: true,
		waitForAnimate: true,
		mobileFirst: false,
		speed: 900,
		touchMove: true,
		adaptiveHeight: true, 
	})
		
	$('.tab').click(function (e) {
		e.preventDefault();
		
		$('.tab').removeClass('active');
		$('.list__block-tabs').removeClass('active');

		$(this).addClass('active')
		$($(this).attr('href')).addClass('active')
		$('.list__slider').slick('setPosition')
	})
})

