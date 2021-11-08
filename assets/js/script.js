$(document).ready(function () {
	// бургер
	$(".c-hamburger").click(function (e) {
		e.preventDefault();
		// изменение иконки на крест
		$.contains("is-active") === true;
		$(this).toggleClass("is-active");
		$(".burger__content").toggleClass("burger__content_active");
	});
	//Анимация мемню
	/*$('.dropdown').hover(function() {
		$(this).children('.header__cards').fadeIn();
		$(this).children('.header__cards').css('display', 'flex')
	});
	$(document).on("mouseout", ".dropdown", function() {
		$(this).children('.header__cards').hide();
	});*/

	$('.dropdown').hover(function () {
		clearTimeout($.data(this, 'timer'));
		$('ul', this).stop(true, true).slideDown(200);
		$(this).children('.header__cards').css('display', 'flex');
	}, function () {
		$.data(this, 'timer', setTimeout($.proxy(function () {
			$('ul', this).stop(true, true).slideUp(200);
		}, this), 100));
	});

	// кнопка выбора языка
	var lang = $(".burger__lang");
	lang.click(function () {
		var textBtn = $(this).text();
		if (textBtn == "ENG") {
			textBtn = $(this).text("RUS");
		} else if (textBtn == "RUS") {
			textBtn = $(this).text("ENG");
		}
		// window.location = 'http://сайт.com' + lang.options[lang.options.selectedIndex].value + 'index.html'
	});

	// кнопка поиска
	$(".search__btn_open").click(function () {
		if ($(".search__block_visible").is(":visible")) {
			$(this).css("backgroundImage", "url(img/search-icn.svg)");
			$(".search__block").removeClass("search__block_visible");
		} else {
			$(this).css("backgroundImage", "url(img/search-close.svg)");
			$(".search__block").addClass("search__block_visible");
		}
	});

	// раскрывающееся меню в бургере
	$(".dropdown-mobile__btn").click(function () {
		var $dropMenu = $(this).parent().find(".dropdown-mobile__content");
		if ($dropMenu.is(":visible")) {
			$(this).removeClass("icon-mobile_rotate");
			$dropMenu.css("display", "none");
		} else {
			$(this).addClass("icon-mobile_rotate");
			$dropMenu.css("display", "flex");
		}
	});

	// функционал таба
	var item;
	var tab = $(".service__tab");
	//tab.hide().filter(":first").show();

	// Клики по вкладкам.
	$(".service__btn")
		.click(function () {
			//tab.hide();
			//tab.filter(this.hash).show();
			$(".service__btn").removeClass("active");
			$(this).addClass("active");
			return false;
		})
		.filter(":first")
		.click();
	/*
	if ($(window).width() > 576) {
		// кнопка показать еще (показать по три)
		item = { totalPageCount: $(".service__card:visible").length };
		x = 6;
		console.log(item);
		$(".service__other").click(function () {
			console.log($(this).closest());
			x = x + 3 >= item.totalPageCount ? x + 3 : item.totalPageCount;
			$(".service__card:lt(" + x + ")").show();
		});
	}*/

	item = { totalPageCount: $(".service__card:visible").length };
	if (document.body.clientWidth < 769) {
		x = 3;
	} else {
		x = 6;
	}
	$(".service__other").click(function () {
		var all = $('.service__card').length;
		x = x + 3 >= item.totalPageCount ? x + 3 : item.totalPageCount;
		$(".service__card:lt(" + x + ")").show();
		if (all <= x) {
			$(".service__other").hide();
		}
	});
	// слайдер лицензии и сертификаты
	if ($(window).width() <= 576) {
		// вкладка таба Все
		$(".service-all__slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		// вкладка таба Облако
		$(".service-cloud__slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		// вкладка таба ЦОД
		$(".service-coda__slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		// вкладка таба Инфобезопасность
		$(".service-infosecurity__slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		// вкладка таба Сетевые услуги
		$(".service-network__slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		// Слайдер лицензии и сертификаты
		$(".license__slider1").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		$(".license__slider2").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
		// слайдер наши партнеры
		$(".partners__slider").slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: true,
			dots: false,
		});
	}

	// вызов модального окна Обратный звонок
	$(".modal__btn").click(function () {
		$(".popup-fade__callback").fadeIn();
		return false;
	});
	$(".modal__btn_demo").click(function () {
		$(".popup-fade__callback_demo").fadeIn();
		return false;
	});

	// Закрытие по клавише Esc.
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$(".popup-fade__callback").fadeOut();
			$(".popup-fade__callback_demo").fadeOut();
		}
	});

	// Клик по фону, но не по окну.
	$(".popup-fade__callback").click(function (e) {
		if ($(e.target).closest(".popup").length == 0) {
			$(this).fadeOut();
		}
	});
	$(".popup-fade__callback_demo").click(function (e) {
		if ($(e.target).closest(".popup").length == 0) {
			$(this).fadeOut();
		}
	});
	// закрытие модального окна
	$(".popup-close").click(function (e) {
		$(".popup-fade__callback").fadeOut();
		$(".popup-fade__callback_demo").fadeOut();
	});
});
function category_list(ids, token) {
	$.ajax({
		url: "/service_ajax",
		type: "post",
		data: { service_id: ids, _token: token },
		success: function (data) {
			$('.service__content2').html(data);
			if ($('.service__card').length <= 6) {
				$(".service__other").hide();
			} else {
				$(".service__other").fadeIn(200);
			}
		}
	});
}