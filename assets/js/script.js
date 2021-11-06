import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';


const swiperLicense = new Swiper('.license__slider2', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperInfo = new Swiper('.mobile-info', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperAdvantages = new Swiper('.advantages-product-swiper', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	pagination: {
		el: '.slick-dots',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperBenefits = new Swiper('.benefits-second-mobile', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	pagination: {
		el: '.slick-dots',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

// calculator

let processors = document.querySelector('#processors')
let processorsCount = document.querySelector('#processorsCount')
let ram = document.querySelector('#ram')
let ramCount = document.querySelector('#ramCount')
let sas = document.querySelector('#sas')
let sasCount = document.querySelector('#sasCount')
let ssd = document.querySelector('#ssd')
let ssdCount = document.querySelector('#ssdCount')
let disk = document.querySelector('#disk')
let diskCount = document.querySelector('#diskCount')
let vm = document.querySelector('#vm')
let vmCount = document.querySelector('#vmCount')

let pluses = document.querySelectorAll('.calculator-block__plus')
let minuses = document.querySelectorAll('.calculator-block__minus')
let inputs = document.querySelectorAll('.calculator-input__input')
let values = document.querySelectorAll('.calculator-block__count')
let issaPrice = document.querySelector('#issaPrice')
let baasPrice = document.querySelector('#baasPrice')
let resultPrice = document.querySelector('#calcResult')

let issa = document.querySelector('#communicativeResource')
let baas = document.querySelector('#communicativeResourceCoping')
let internet = document.querySelector('#communicativeResourceInternet')
values.forEach(item => {
	item.addEventListener('input', () => {
		if (item.value.length > 5) {
			item.value = item.value.slice(0, 5)
		}
		if (item.value > 10000) {
			item.value = 10000
		}
	})
})

let issaWithoutDiscount = 0
let issaWithDiscount = 0
let baasWithoutDiscount = 0
let baasWithDiscount = 0
let resultCount = 0
function inputRange(max, step, input, count, index) {
	input.max = max
	input.step = step
	count.addEventListener('input', () => {
		if (count.value <= 10) {
			input.value = (count.value * 250)
		} else if (count.value > 10 && count.value <= 100) {
			input.value = (count.value * 25) + 2250
		} else if (count.value > 100 && count.value < 1000) {
			input.value = (count.value * 2.5) + 4500
		} else if (count.value > 1000 && count.value <= 10000) {
			input.value = (count.value * 0.25) + 6750
		}
		input.style.setProperty('--value', input.value);
	})
	minuses[index].addEventListener('click', () => {
		input.value = +input.value - 250
		input.style.setProperty('--value', input.value);
		if (input.value <= 2500) {
			count.value = (input.value / 250)
		} else if (input.value > 2500 && input.value <= 4750) {
			count.value = (input.value / 25) - 90
		} else if (input.value > 4750 && input.value <= 7000) {
			count.value = (input.value / 2.5) - 1800
		} else if (input.value > 7000 && input.value <= 10000) {
			count.value = (input.value / 0.25) - 27000
		}
	})
	pluses[index].addEventListener('click', () => {
		input.value = +input.value + 250
		input.style.setProperty('--value', input.value);

		if (input.value <= 2500) {
			count.value = (input.value / 250)
		} else if (input.value > 2500 && input.value <= 4750) {
			count.value = (input.value / 25) - 90
		} else if (input.value > 4750 && input.value <= 7000) {
			count.value = (input.value / 2.5) - 1800
		} else if (input.value > 7000 && input.value <= 10000) {
			count.value = (input.value / 0.25) - 27000
		}
	})
	input.addEventListener('input', () => {
		if (input.value <= 2500) {
			count.value = (input.value / 250)
		} else if (input.value > 2500 && input.value <= 4750) {
			count.value = (input.value / 25) - 90
		} else if (input.value > 4750 && input.value <= 7000) {
			count.value = (input.value / 2.5) - 1800
		} else if (input.value > 7000 && input.value <= 10000) {
			count.value = (input.value / 0.25) - 27000
		}

	})
	setInterval(() => {

		issaWithoutDiscount = (+processorsCount.value * 325.97) + (+ramCount.value * 233.48) + (+sasCount.value * 4.91) + (+ssdCount.value * 21.00)
		issaWithDiscount = (+processorsCount.value * 277.07) + (+ramCount.value * 198.46) + (+sasCount.value * 4.17) + (+ssdCount.value * 17.85)
		issaPrice.innerHTML = `
		<p>Стоимость ${issaWithDiscount.toFixed(2)} <span class='calculator-block__price--without'>${issaWithoutDiscount.toFixed(2)}</span><span class="calculator-block__price--red">*</span> руб.</p>`
		baasWithoutDiscount = (+diskCount.value * 1500) + (+vmCount.value * 1600)
		baasWithDiscount = (+diskCount.value * 1275) + (+vmCount.value * 1360)
		baasPrice.innerHTML = `
		<p>Стоимость ${baasWithDiscount.toFixed(2)} <span class='calculator-block__price--without'>${baasWithoutDiscount.toFixed(2)}</span><span class="calculator-block__price--red">*</span> руб.</p>`

		if (issa.checked && !baas.checked && !internet.checked) resultCount = issaWithDiscount
		if (baas.checked && !issa.checked && !internet.checked) resultCount = baasWithDiscount
		if (internet.checked && !issa.checked && !baas.checked) resultCount = 11500
		if (issa.checked && baas.checked && !internet.checked) resultCount = issaWithDiscount + baasWithDiscount
		if (issa.checked && !baas.checked && internet.checked) resultCount = 11500 + issaWithDiscount
		if (baas.checked && internet.checked && !issa.checked) resultCount = baasWithDiscount + 11500
		if (issa.checked && baas.checked && internet.checked) resultCount = issaWithDiscount + baasWithDiscount + 11500
		if (!issa.checked && !baas.checked && !internet.checked) resultCount = 0
		resultPrice.innerHTML = `<p>Стоимость ${resultCount.toFixed(2)} Руб.</p> `
	}, 1);
}

inputRange(9250, 250, processors, processorsCount, 0)
inputRange(9250, 250, ram, ramCount, 1)
inputRange(9250, 250, sas, sasCount, 2)
inputRange(9250, 250, ssd, ssdCount, 3)
inputRange(9250, 250, disk, diskCount, 4)
inputRange(9250, 250, vm, vmCount, 5)


