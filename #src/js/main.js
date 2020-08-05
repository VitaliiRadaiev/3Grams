var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

@@include('forms.js');

$(document).ready(function() {
	@@include('burger.js');

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

// ==== accordion =======================================================
if ($('.accordion').length>0) {
	$.each($('.spoller.active'), function (index, val) {
		$(this).next().show();
	});
	$('body').on('click', '.spoller', function (event) {
		if ($(this).hasClass('mob') && !isMobile.any()) {
			return false;
		}

		if ($(this).parents('.one').length > 0) {
			$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
			$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
		}

		if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
			$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
				$(this).removeClass('active');
				$(this).next().slideUp(300);
			});
		}
		$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
			if ($(this).parent().find('.slick-slider').length > 0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
		});
		return false;
	});
}

// ==== // accordion =======================================================


// ====  main-slider =======================================================
if($('.main-slider').length>0) {
	let progressBarSlider = document.querySelector('.progress-bar__slider');
	let controllerCurrentSlider = document.querySelector('.main-slider-controller__current-slider');

	$('.main-slider')
	.on('init', function(event, slick) {
		let totalSider = document.querySelector('.main-slider-controller__total-slider');

		totalSider.innerText = slick.slideCount;
		progressBarSlider.style.width = (100 / slick.slideCount) + '%';
	})
	.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		progressBarSlider.style.left = (100 / slick.slideCount * (nextSlide)) + '%';
		controllerCurrentSlider.innerText = nextSlide + 1;
	})

	$('.main-slider-controller__arrow_left').on('click', function() {
		$('.main-slider').slick('slickPrev');
	});

	$('.main-slider-controller__arrow_right').on('click', function() {
		$('.main-slider').slick('slickNext');
	});
}
// ==== //  main-slider =======================================================


// ====  on-discounts__slider =======================================================
if($('.on-discounts__slider').length>0) {
	let controllerCurrentSlider = document.querySelector('.on-discounts-slider-controller__current-slider');
	let progressBarSlider = document.querySelector('.progress-bar__slider-2');
	$('.on-discounts__slider')
	.on('init', function(event, slick) {
		let totalSider = document.querySelector('.on-discounts-slider-controller__total-slider');

		totalSider.innerText = slick.slideCount;
		progressBarSlider.style.width = (100 / slick.slideCount) + '%';
	})
	.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 576,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  },
		]
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		controllerCurrentSlider.innerText = nextSlide + 1;
		progressBarSlider.style.left = (100 / slick.slideCount * (nextSlide)) + '%';
	})

	$('.on-discounts-slider-controller__arrow_left').on('click', function() {
		$('.on-discounts__slider').slick('slickPrev');
	});

	$('.on-discounts-slider-controller__arrow_right').on('click', function() {
		$('.on-discounts__slider').slick('slickNext');
	});
}
// ==== //  on-discounts__slider =======================================================



});