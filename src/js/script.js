const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const burgerIcon = document.querySelector(".burger-menu");
////header/////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
	const toggle = document.querySelector(".search-toggle");
	const overlay = document.querySelector(".side-menu-search");
	const overlay_click = document.querySelector(".overlay_click");

	if (toggle && overlay) {
		toggle.addEventListener("click", () => {
			overlay.classList.toggle("active"); // додає або забирає клас
			overlay_click.classList.toggle("active"); // додає або забирає клас
		});

		overlay_click.addEventListener("click", () => {
			overlay.classList.remove("active");
			overlay_click.classList.remove("active");
		});
	}
});

///////burger///////
burger.addEventListener('click', () => {
	sideMenu.classList.toggle('active'); // відкриває або закриває
	burgerIcon.classList.toggle('active');
});


window.addEventListener('click', (e) => {
	if (sideMenu.classList.contains('active') &&
		!sideMenu.contains(e.target) &&
		!burger.contains(e.target)) {
		sideMenu.classList.remove('active');
		burgerIcon.classList.remove('active');

	}
});

/////swiper///////////////////////////////////////////////////////////////
let swiperInstance = null;

function initSwiperIfNeeded() {
	const isMobile = window.innerWidth < 768;

	if (isMobile && !swiperInstance) {
		swiperInstance = new Swiper('.swiper', {
			loop: true,
			slidesPerView: 2,
			spaceBetween: 16,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	} else if (!isMobile && swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;
	}
}

window.addEventListener('load', initSwiperIfNeeded);
window.addEventListener('resize', initSwiperIfNeeded);




/////////akordeon/////
const filterTitle = document.querySelector(".color_filters_title");
const button = document.querySelector(".filter_svg");
const colors = document.querySelector(".ellipse_color");

filterTitle.addEventListener("click", (e) => {
	// Перевіряємо, чи клік був по тексту або SVG
	const target = e.target;

	if (
		target.closest(".title_text") ||
		target.closest(".filter_svg")
	) {
		button.classList.toggle("active");
		if (colors) {
			colors.classList.toggle("active");
		}
	}
});



