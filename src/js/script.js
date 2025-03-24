document.addEventListener("DOMContentLoaded", function () {
	const burgerIcon = document.querySelector(".burger-menu");
	const burgerMenu = document.querySelector(".burger_menu_list");
	const container = document.querySelector(".container");
	const previewTitle = document.querySelector(".preview_title_header");
	const bars = document.querySelectorAll(".bar");
	const socialIcons = document.querySelectorAll(".icon");
	const overlay = document.querySelector('.overlay');
	const overlay_right = document.querySelector('.overlay_right');



	const firstMenu = document.querySelector('.js-nav_link a.nav_link:first-child');
	const all_menu = document.querySelectorAll('.js-nav_link a');
	const all_menu_right = document.querySelectorAll('.js-nav_link_right a');
	const burgerMenuRight = document.querySelector(".burger_menu_list_right.js-nav_link_right");

	// Функція для бургер-меню
	function toggleBurgerMenu() {
		let target = this.dataset.menu;
		let targetpopup = this.dataset.popupmenu;

		if (typeof targetpopup !== 'undefined') {
			target = targetpopup;
		}
		let active_tab_menu = document.querySelector('div[data-target="' + target + '"]');
		let all_tabs = document.querySelectorAll('.js-sub-list');

		all_tabs.forEach(tab => tab.classList.remove("open"));
		active_tab_menu.classList.toggle("open");

		if (typeof targetpopup == 'undefined') {

			burgerIcon.classList.toggle("active");
			burgerMenu.classList.toggle("active");
			container.classList.toggle("active");
			previewTitle.classList.toggle("active");
			bars.forEach(bar => bar.classList.toggle("active"));
			socialIcons.forEach(icon => icon.classList.toggle("active"));
			overlay.classList.add('active');
		}
	}

	//функція для burger_menu_right
	function toggleBurgerMenuRight() {
		let target = this.dataset.menu; // Отримуємо значення data-menu

		let active_tab_menu = document.querySelector('div[data-target="' + target + '_right"]'); // Додаємо _right
		let all_tabs = document.querySelectorAll('.js-sub-list');

		all_tabs.forEach(tab => tab.classList.remove("open"));
		if (active_tab_menu) {
			active_tab_menu.classList.toggle("open");
		}

		if (typeof targetpopup == 'undefined') {
			burgerMenuRight.classList.toggle("active"); // Використовуємо burgerMenuRight
			previewTitle.classList.toggle("active");
			overlay_right.classList.add('active');

		}
	}





	// Закрити меню при кліку на фон
	overlay.addEventListener("click", () => {
		burgerMenu.classList.remove("active");
		overlay.classList.remove("active");
		container.classList.remove("active");
		previewTitle.classList.remove("active");
		bars.forEach(bar => bar.classList.remove("active"));
		socialIcons.forEach(icon => icon.classList.remove("active"));
	});

	// Закрити меню при кліку на фон
	overlay_right.addEventListener("click", () => {
		burgerMenuRight.classList.remove("active");
		overlay_right.classList.remove("active");
		container.classList.remove("active");
		previewTitle.classList.remove("active");
		socialIcons.forEach(icon => icon.classList.remove("active"));
	});


	// Обробники подій
	burgerIcon.addEventListener("click", function () {
		firstMenu.click()
	});

	all_menu_right.forEach(menu => menu.addEventListener("click", toggleBurgerMenuRight));



	for (const menu of all_menu) {
		menu.addEventListener("click", toggleBurgerMenu, false);
	}

});














//scroll!!!!
window.addEventListener("scroll", function () {
	let header = document.querySelector(".container");
	if (window.scrollY > 500) {
		header.classList.add("scrolled"); // Додаємо клас при прокрутці
	} else {
		header.classList.remove("scrolled"); // Видаляємо клас, якщо наверху
	}
});

