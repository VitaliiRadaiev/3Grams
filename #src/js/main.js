var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

@@include('forms.js');

$(document).ready(function() {
	@@include('burger.js');

	document.querySelector('body').classList.add('isload');

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


// ==== shop-header2__list =======================================================
{
	let shopHeaderList = document.querySelector('.shop-header2__list');
	let prevElement = false;
	let imgBox = document.querySelector('.shop-header2__img-wrap');
	let itemShop = document.querySelector('.shop-header2__link_shop');
	if(shopHeaderList) {
		let item = shopHeaderList.children[0].querySelector('.shop-header2__link');
		prevElement = item;
		imgBox.innerHTML = '';
		let arrUrls = [];

		let urlImgs = item.dataset.urlimg.split(',').map(i => i.trim());
		let ulrLink = item.dataset.urllinkforimg.split(',').map(i => i.trim());

		for(let i = 0; i < urlImgs.length; i++) {
			let urls = {
				urlImg: urlImgs[i],
				urlLink: ulrLink[i],
			}
			arrUrls.push(urls);
		}

		arrUrls.forEach(i => {
			let div = document.createElement('div');
			div.className = 'shop-header2__img';
			div.innerHTML =  '<a class="ibg shop-header2__img_animation" href="'+ i.urlLink +'"><img src="' + i.urlImg + '" alt="photo"></a>'

			imgBox.append(div);
		})

		shopHeaderList.addEventListener('mouseover', addPhoto);
	}

	function addPhoto(e) {
		if(e.target.closest('.shop-header2__link')) {
			let item = e.target.closest('.shop-header2__link');

			if(item != prevElement && item != itemShop) {
				prevElement = item;
				imgBox.innerHTML = '';
				let arrUrls = [];

				let urlImgs = item.dataset.urlimg.split(',').map(i => i.trim());
				let ulrLink = item.dataset.urllinkforimg.split(',').map(i => i.trim());

				for(let i = 0; i < urlImgs.length; i++) {
					let urls = {
						urlImg: urlImgs[i],
						urlLink: ulrLink[i],
					}
					arrUrls.push(urls);
				}

				arrUrls.forEach(i => {
					let div = document.createElement('div');
					div.className = 'shop-header2__img';
					div.innerHTML =   '<a class="ibg shop-header2__img_animation" href="'+ i.urlLink +'"><img src="' + i.urlImg + '" alt="photo"></a>'

					imgBox.append(div);
				})
			}
		}
	}
}
// ==== // shop-header2__list =======================================================


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


// ==== on-discounts__slider =======================================================
//on-discounts__slider
{
	let onDiscountsSlider = document.querySelector('.on-discounts__slider');
	if(onDiscountsSlider) {

		if(document.documentElement.clientWidth <= 575 ) {
			(async function() {
				await onDiscountsSlider.classList.add('on-discounts__slider-mobile');
				await initialLastViewsSlider()
			})();
		}

		window.addEventListener('resize', function() {
			if(document.documentElement.clientWidth <= 575 ) {
				(async function() {
					if(!onDiscountsSlider.classList.contains('on-discounts__slider-mobile')) {
						await onDiscountsSlider.classList.add('on-discounts__slider-mobile');
						await initialLastViewsSlider();
					}
				})();
			} 

			if(document.documentElement.clientWidth > 575) {

				(async function() {
					await $('.on-discounts__slider-mobile').slick('unslick')
					await onDiscountsSlider.classList.remove('on-discounts__slider-mobile');
				})();
			}
		})
	}

	function initialLastViewsSlider() {
		let controllerCurrentSlider = document.querySelector('.on-discounts-slider-controller__current-slider');

		$('.on-discounts__slider-mobile')
		.on('init', function(event, slick) {
			let totalSider = document.querySelector('.on-discounts-slider-controller__total-slider');

			totalSider.innerText = slick.slideCount;
		})
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			controllerCurrentSlider.innerText = nextSlide + 1;
		})

		$('.on-discounts-slider-controller__arrow_left').on('click', function() {
			$('.on-discounts__slider-mobile').slick('slickPrev');
		});

		$('.on-discounts-slider-controller__arrow_right').on('click', function() {
			$('.on-discounts__slider-mobile').slick('slickNext');
		});
	}
}
// ==== // on-discounts__slider =======================================================


// // ====  on-discounts__slider =======================================================
// if($('.on-discounts__slider').length>0) {

// 	let controllerCurrentSlider = document.querySelector('.on-discounts-slider-controller__current-slider');
// 	let progressBarSlider = document.querySelector('.progress-bar__slider-2');
// 	$('.on-discounts__slider')
// 	.on('init', function(event, slick) {
// 		let totalSider = document.querySelector('.on-discounts-slider-controller__total-slider');

// 		totalSider.innerText = slick.slideCount;
// 		progressBarSlider.style.width = (100 / slick.slideCount) + '%';
// 	})
// 	.slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		responsive: [
// 		  {
// 		    breakpoint: 992,
// 		    settings: {
// 		      slidesToShow: 2,
// 		      slidesToScroll: 1,
// 		    }
// 		  },
// 		  {
// 		    breakpoint: 576,
// 		    settings: {
// 		      slidesToShow: 1,
// 		      slidesToScroll: 1,
// 		    }
// 		  },
// 		]
// 	})
// 	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
// 		controllerCurrentSlider.innerText = nextSlide + 1;
// 		progressBarSlider.style.left = (100 / slick.slideCount * (nextSlide)) + '%';
// 	})

// 	$('.on-discounts-slider-controller__arrow_left').on('click', function() {
// 		$('.on-discounts__slider').slick('slickPrev');
// 	});

// 	$('.on-discounts-slider-controller__arrow_right').on('click', function() {
// 		$('.on-discounts__slider').slick('slickNext');
// 	});
// }
// // ==== //  on-discounts__slider =======================================================


// ====  fix header =======================================================
	let header = document.querySelector('.header2');
	if(header) {
		let headerMetric = header.getBoundingClientRect();
		let wrapper = document.querySelector('.wrapper');
		window.addEventListener('scroll', function() {
			if(window.pageYOffset >= headerMetric.height) {
				header.classList.add('fixed');
				wrapper.style.paddingTop = headerMetric.height + 'px';
			}

			if(window.pageYOffset <= 2) {
				header.classList.remove('fixed');
				wrapper.style.paddingTop = '0px';
			}
		});
	}
// ==== //  fix header =======================================================


// ==== //  slider-product-card =======================================================
if($('.slider-product-card').length>0) {
	let controllerCurrentSlider = document.querySelector('.slier-product-card-controller__current-slider');

	 $('.slider-product-card')
	.on('init', function(event, slick) {
		let totalSider = document.querySelector('.slier-product-card-controller__total-slider');

		totalSider.innerText = slick.slideCount;
	})
	 .slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: false,
	  prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span class="icon-arrow-thin-up"></span></div>',
	  nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span class="icon-arrow-thin-down"></span></div>',
	  vertical: true,	
	  verticalSwiping: true,
	  touchThreshold: 10,
	  waitForAnimate: false,
	  infinite:false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	        vertical: false,
	        verticalSwiping: false,
	      }
	    }
	  ]
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		controllerCurrentSlider.innerText = nextSlide + 1;
	})

	$('.slier-product-card-controller__arrow_left').on('click', function() {
		$('.slider-product-card').slick('slickPrev');
	});

	$('.slier-product-card-controller__arrow_right').on('click', function() {
		$('.slider-product-card').slick('slickNext');
	});


	let slider = document.querySelector('.slider-product-card');
	let bigPhoto = document.querySelector('.photos-product-card__big-photo');
	let sliderTrack = document.querySelector('.slider-product-card .slick-track');

	let firsItem = sliderTrack.children[0].querySelector('.slider-product-card__inner');

	let urlImg = firsItem.dataset.urlbigphoto;
	bigPhoto.innerHTML = '<a class="ibg anim" href="' + urlImg + '" data-fancybox="image2" data-caption="My caption"><img src="' + urlImg + '" alt="photo"></a>'

	firsItem.classList.add('border');

	slider.addEventListener('click', function(e) {
		if(e.target.closest('.slider-product-card__inner')) {
			let item = e.target.closest('.slider-product-card__inner');
			let urlImg = item.dataset.urlbigphoto;
			bigPhoto.innerHTML = '<a class="ibg anim" href="' + urlImg + '" data-fancybox="image2" data-caption="My caption"><img src="' + urlImg + '" alt="photo"></a>'

			item.classList.add('border');

			for(let itemSlide of sliderTrack.children) {
				let elem = itemSlide.querySelector('.slider-product-card__inner');
				if(elem == item) {
					continue;
				}

				elem.classList.remove('border');
			}
		}
	});

}
// ==== //  slider-product-card =======================================================


// ==== choose-color =======================================================
let chooseColorBox = document.querySelector('.choose-color');
if(chooseColorBox) {
	let chooseColorList = document.querySelector('.choose-color__list'); 
	let titleSpan = document.querySelector('.choose-color__title > span')

	titleSpan.innerText = chooseColorList.children[0].dataset.colorname;
	for(let item of chooseColorList.children) {
		let color = item.dataset.coloritem;
		item.style.background = color;
	}

	chooseColorList.addEventListener('click', function(e) {
		if(e.target.closest('.choose-color__item')) {
			let item = e.target.closest('.choose-color__item');
			item.classList.add('active');
			titleSpan.innerText = item.dataset.colorname;

			for(let i of chooseColorList.children) {
				if(i == item) {
					continue;
				}

				i.classList.remove('active');
			}
		}
	})
}
// ==== //  choose-color =======================================================


// ==== last-views__slider =======================================================
//last-views__slider-mobile
{
	let lastViewsSlider = document.querySelector('.last-views__slider');

	if(lastViewsSlider) {

		if(document.documentElement.clientWidth <= 575 ) {
			(async function() {
				await lastViewsSlider.classList.add('last-views__slider-mobile');
				await initialLastViewsSlider()
			})();
		}

		window.addEventListener('resize', function() {
			if(document.documentElement.clientWidth <= 575 ) {
				(async function() {
					if(!lastViewsSlider.classList.contains('last-views__slider-mobile')) {
						await lastViewsSlider.classList.add('last-views__slider-mobile');
						await initialLastViewsSlider();
					}
				})();
			} 

			if(document.documentElement.clientWidth > 575) {

				(async function() {
					await $('.last-views__slider-mobile').slick('unslick')
					await lastViewsSlider.classList.remove('last-views__slider-mobile');
				})();
			}
		})
	}

	function initialLastViewsSlider() {
		let controllerCurrentSlider = document.querySelector('.last-views-slider-controller__current-slider');

		$('.last-views__slider-mobile')
		.on('init', function(event, slick) {
			let totalSider = document.querySelector('.last-views-slider-controller__total-slider');

			totalSider.innerText = slick.slideCount;
		})
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			controllerCurrentSlider.innerText = nextSlide + 1;
		})

		$('.last-views-slider-controller__arrow_left').on('click', function() {
			$('.last-views__slider-mobile').slick('slickPrev');
		});

		$('.last-views-slider-controller__arrow_right').on('click', function() {
			$('.last-views__slider-mobile').slick('slickNext');
		});
	}
}
// ==== //  last-views__slider =======================================================


// ==== filter-slider =======================================================
let priceSlider = document.querySelector('.price-filter__slider');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	noUiSlider.create(priceSlider, {
		start: [10, 100],
		connect: true,
		range: {
			'min': [+min],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// @media (min-width: 992px ) {
// 	&:hover {
// 		background-color: $mainColor;
// 		color: #000000;
// 		border:2px solid $mainColor;
// 	}
// }
	// ====  filter-slider price btn click animation ===============
	{
	let ilterSliderBtn = document.querySelector('.price-filter__btn');
		if(ilterSliderBtn) {
			ilterSliderBtn.addEventListener('mousedown', function() {
				ilterSliderBtn.style.backgroundColor = '#71eeb8';
				ilterSliderBtn.style.border = '2px solid #71eeb8';
			});

			ilterSliderBtn.addEventListener('mouseup', function() {
				ilterSliderBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.278)';
				ilterSliderBtn.style.border = '2px solid #000';
			})
		}
	}

	// ==== //  filter-slider price btn click animation ===============



// ==== //  filter-slider =======================================================


// ====  shop-content mobile filter and category =======================================================
{
	let categoryBtn = document.querySelector('.mobile-top__title_category');
	if(categoryBtn) {
		let categoryCloseBtn = document.querySelector('.menu-shop__close-btn');

		categoryBtn.addEventListener('click', openCategory);
		categoryCloseBtn.addEventListener('click', closeCategory);

		function openCategory() {
			$('.menu-shop').slideDown(300);
		}
		function closeCategory() {
			$('.menu-shop').slideUp(300);
		}
	}
}
{
	let filterBtn = document.querySelector('.mobile-top__title_sort');
	if(filterBtn) {
		let filterCloseBtn = document.querySelector('.filter-form__close-btn');

		filterBtn.addEventListener('click', openFilter);
		filterCloseBtn.addEventListener('click', closeFilter);

		function openFilter() {
			$('.filter-form').slideDown(300);
		}
		function closeFilter() {
			$('.filter-form').slideUp(300);
		}
	}
}
// ==== //  shop-content mobile filter and category =======================================================


// ==== last-views__slider =======================================================
//rebuild__cards
{
	let rebuildCards = document.querySelector('.rebuild__cards');

	if(rebuildCards) {

		if(document.documentElement.clientWidth <= 767 ) {
			(async function() {
				await rebuildCards.classList.add('rebuild__cardsr_slider-mobile');
				await initialLastViewsSlider()
			})();
		}

		window.addEventListener('resize', function() {
			if(document.documentElement.clientWidth <= 767 ) {
				(async function() {
					if(!rebuildCards.classList.contains('rebuild__cardsr_slider-mobile')) {
						await rebuildCards.classList.add('rebuild__cardsr_slider-mobile');
						await initialLastViewsSlider();
					}
				})();
			} 

			if(document.documentElement.clientWidth > 767) {

				(async function() {
					await $('.rebuild__cardsr_slider-mobile').slick('unslick');
					await rebuildCards.classList.remove('rebuild__cardsr_slider-mobile');
				})();
			}
		})
	}

	function initialLastViewsSlider() {
		let controllerCurrentSlider = document.querySelector('.rebuild-cards-controller__current-slider');

		$('.rebuild__cardsr_slider-mobile')
		.on('init', function(event, slick) {
			let totalSider = document.querySelector('.rebuild-cards-controller__total-slider');

			totalSider.innerText = slick.slideCount;
		})
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			controllerCurrentSlider.innerText = nextSlide + 1;
		})

		$('.rebuild-cards-controller__arrow_left').on('click', function() {
			$('.rebuild__cardsr_slider-mobile').slick('slickPrev');
		});

		$('.rebuild-cards-controller__arrow_right').on('click', function() {
			$('.rebuild__cardsr_slider-mobile').slick('slickNext');
		});
	}
}
// ==== //  last-views__slider =======================================================

// ==== aboutUs__cards-slider =======================================================
{
	//aboutUs__cards-slider
	let aboutUsCards = document.querySelector('.aboutUs__cards-slider');

	if(aboutUsCards) {

		if(document.documentElement.clientWidth <= 575 ) {
			(async function() {
				await aboutUsCards.classList.add('aboutUs__cards-slider-mobile');
				await initialLastViewsSlider()
			})();
		}

		window.addEventListener('resize', function() {
			if(document.documentElement.clientWidth <= 575 ) {
				(async function() {
					if(!aboutUsCards.classList.contains('aboutUs__cards-slider-mobile')) {
						await aboutUsCards.classList.add('aboutUs__cards-slider-mobile');
						await initialLastViewsSlider();
					}
				})();
			} 

			if(document.documentElement.clientWidth > 575) {

				(async function() {
					await $('.aboutUs__cards-slider-mobile').slick('unslick')
					await aboutUsCards.classList.remove('aboutUs__cards-slider-mobile');
				})();
			}
		})
	}

	function initialLastViewsSlider() {
		let controllerCurrentSlider = document.querySelector('.aboutUs-cards-controller__current-slider');

		$('.aboutUs__cards-slider-mobile')
		.on('init', function(event, slick) {
			let totalSider = document.querySelector('.aboutUs-cards-controller__total-slider');

			totalSider.innerText = slick.slideCount;
		})
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			adaptiveHeight: true,
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			controllerCurrentSlider.innerText = nextSlide + 1;
		})

		$('.aboutUs-cards-controller__arrow_left').on('click', function() {
			$('.aboutUs__cards-slider-mobile').slick('slickPrev');
		});

		$('.aboutUs-cards-controller__arrow_right').on('click', function() {
			$('.aboutUs__cards-slider-mobile').slick('slickNext');
		});
	}


}

// ==== //  aboutUs__cards-slider =======================================================


// ==== scroll modificator =======================================================
{
	const selectscrolloptions = (cursorwidth) => {
			var scs=100;
			var mss=50;
		if(isMobile.any()){
			scs=10; 
			mss=1;
		}
		var opt={
			cursorcolor:"#000",
			cursorwidth,
			background: "#000",
			backgroundwidth: '1px',
			autohidemode:false,
			bouncescroll:false,
			cursorborderradius: "0px",
			scrollspeed:scs,
			mousescrollstep:mss,
			directionlockdeadzone:0,
			cursorborder: "",
		};
		return opt;
	}
	let baskedIcon = document.querySelector('.icon-header2__item.hover');

	let hoverBascet = document.querySelector('.hover-bascet');

	if(baskedIcon && document.documentElement.clientWidth >= 992) {

		baskedIcon.addEventListener('mouseover', function() {
			
				hoverBascet.style.display = 'block';
				hoverBascet.style.opacity = '1';
				$(".hover-bascet__list").niceScroll(selectscrolloptions('6px'));
		});

		baskedIcon.addEventListener('mouseout', function() {
            hoverBascet.style.display = 'none';
		})
	}

	if($('.textarea').length>0) {
		function selectscrolloptionss(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#000",
				cursorwidth: "6px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "0px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
				cursorminheight: 32,
			};
			return opt;
		}

		$('.textarea').niceScroll(selectscrolloptionss());
	}
}



// ==== // scroll modificator =======================================================




// ====  checkout submit click animation ===============
{
let ilterSliderBtn = document.querySelector('.your-order__submit');
	if(ilterSliderBtn) {
		ilterSliderBtn.addEventListener('mousedown', function() {
			ilterSliderBtn.style.backgroundColor = '#71eeb8';
			ilterSliderBtn.style.border = '2px solid #71eeb8';
		});

		ilterSliderBtn.addEventListener('mouseup', function() {
			ilterSliderBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.278)';
			ilterSliderBtn.style.border = '2px solid #000';
		})
	}
}
 
// ==== //  checkout submit click animation ===============


// ====  form-bascket__sumbit submit click animation ===============
{
let ilterSliderBtn = document.querySelector('.form-bascket__sumbit');
	if(ilterSliderBtn) {
		ilterSliderBtn.addEventListener('mousedown', function() {
			ilterSliderBtn.style.backgroundColor = '#71eeb8';
			ilterSliderBtn.style.border = '2px solid #71eeb8';
		});

		ilterSliderBtn.addEventListener('mouseup', function() {
			ilterSliderBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.278)';
			ilterSliderBtn.style.border = '2px solid #000';
		})
	}
}
 
// ==== //  form-bascket__sumbit submit click animation ===============


// ====  form-contact__submit click animation ===============
{
let ilterSliderBtn = document.querySelector('.form-contact__submit');
	if(ilterSliderBtn) {
		ilterSliderBtn.addEventListener('mousedown', function() {
			ilterSliderBtn.style.backgroundColor = '#71eeb8';
			ilterSliderBtn.style.border = '2px solid #71eeb8';
		});

		ilterSliderBtn.addEventListener('mouseup', function() {
			ilterSliderBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.278)';
			ilterSliderBtn.style.border = '2px solid #000';
		})
	}
}
 
// ==== //  form-contact__submit click animation ===============





// ==== form-checkout ===============
{
	let formCheckout = document.querySelector('.form-checkout');
//console.dir(formCheckout.iUnderstend)
	if(formCheckout) {
		formCheckout.addEventListener('submit', function(e) {
			if(!formCheckout.iUnderstend.checked) {
				e.preventDefault();
			}
		})
	}
}
// ==== //  form-checkout ===============




// ====   contact top btn ===============
{
	let topContactBtn = document.querySelector('.top-contact-btn');
	if(topContactBtn) {
		let leftBtn = document.querySelector('.top-contact-btn__left');
		let rightBtn = document.querySelector('.top-contact-btn__right');
		let adress = document.querySelector('.contact__marker-address');
	
		leftBtn.addEventListener('click', function() {
			leftBtn.classList.add('active');
			rightBtn.classList.remove('active');
			adress.innerHTML = '<span><img src="img/contact/marker.png" alt="marker"></span>3GRAMS INC. West Palm Beach, Florida 33460';
		});

		rightBtn.addEventListener('click', function() {
			leftBtn.classList.remove('active');
			rightBtn.classList.add('active');
			adress.innerHTML = '<span><img src="img/contact/marker.png" alt="marker"></span>3G WELLNESS LAKE WORTH BEACH 631 Lucerne Avenue, Suite 205 Lake Worth Beach, Florida 33460';

		});
		
	}
}
// ==== //  contact top btn ===============




});



// ==== //  google map ===============

{

	let isMap = document.getElementById("map");
	if(isMap) {
		var map;

		let center = {
			lat: 26.636016,
			lng: -80.057007,
		}

		if(document.documentElement.clientWidth <= 767) {
			center.lat = 26.613380;
			center.lng = -80.061003;
		}

		let markerPosition = {
			lat: 26.613380,
			lng: -80.061003,
		}

		let topContactBtn = document.querySelector('.top-contact-btn');
		if(topContactBtn) {
			let leftBtn = document.querySelector('.top-contact-btn__left');
			let rightBtn = document.querySelector('.top-contact-btn__right');
			let adress = document.querySelector('.contact__marker-address');
		
			leftBtn.addEventListener('click', function() {
				leftBtn.classList.add('active');
				rightBtn.classList.remove('active');
				adress.innerHTML = '<span><img src="img/contact/marker.png" alt="marker"></span>3GRAMS INC. West Palm Beach, Florida 33460';
				center.lat = 26.636016;
				center.lng = -80.057007;
				if(document.documentElement.clientWidth <= 767) {
					center.lat = 26.613380;
					center.lng = -80.061003;
				}
				markerPosition.lat = 26.613380;
				markerPosition.lng = -80.061003;
				initMap()
			});

			rightBtn.addEventListener('click', function() {
				leftBtn.classList.remove('active');
				rightBtn.classList.add('active');
				adress.innerHTML = '<span><img src="img/contact/marker.png" alt="marker"></span>3G WELLNESS LAKE WORTH BEACH 631 Lucerne Avenue, Suite 205 Lake Worth Beach, Florida 33460';
				center.lat = 26.636016;
				center.lng = -80.057007;
				markerPosition.lat = 26.636016;
				markerPosition.lng = -80.057007;
				initMap()
			});
			
		}

		// Функция initMap которая отрисует карту на странице
		function initMap() {

			// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
			map = new google.maps.Map(document.getElementById('map'), {
				// При создании объекта карты необходимо указать его свойства
				// center - определяем точку на которой карта будет центрироваться
				center: {lat: center.lat, lng: center.lng},
				// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.

				zoom: 14,

				// Добавляем свои стили для отображения карты
				styles: [
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#f5f5f5"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#616161"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#f5f5f5"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#bdbdbd"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#eeeeee"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#e5e5e5"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#ffffff"
		      }
		    ]
		  },
		  {
		    "featureType": "road.arterial",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dadada"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#616161"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#e5e5e5"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#eeeeee"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#c9c9c9"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  }
		]
			});

			// Создаем маркер на карте
			var marker = new google.maps.Marker({

				// Определяем позицию маркера
			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
			    map: map,

			    // Пишем название маркера - появится если навести на него курсор и немного подождать
			    //title: '',

			    // Укажем свою иконку для маркера
			    icon: 'img/contact/googlMarker.svg',
			});

		}
	}
}
// ==== //  google map ===============
