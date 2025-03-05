document.addEventListener("DOMContentLoaded", function () {
	const burgerIcon = document.querySelector(".burger-menu");
	const burgerMenu = document.querySelector(".burger_menu_list");
	const container = document.querySelector(".container");
	const previewTitle = document.querySelector(".preview_title_header");
	const bars = document.querySelectorAll(".bar");
	const socialIcons = document.querySelectorAll(".icon");
	const shop = document.querySelector("#shop-link");
	const Collections = document.querySelector("#Collections-link");
	const shopMenu = document.querySelector(".nav_menu_list");
	const CollectionsMenu = document.querySelector(".nav_menu_Collections_list");

	// Функція для бургер-меню
	function toggleBurgerMenu() {
		burgerMenu.classList.toggle("active");
		burgerIcon.classList.toggle("active");
		container.classList.toggle("active");
		previewTitle.classList.toggle("active");
		bars.forEach(bar => bar.classList.toggle("active"));
		socialIcons.forEach(icon => icon.classList.toggle("active"));
	}

	// Функція для меню "Shop"
	function toggleShopMenu(event) {
		event.preventDefault(); // Щоб не перезавантажувалась сторінка
		shopMenu.classList.toggle("active");
		shop.classList.toggle("active");
		container.classList.toggle("active");
		socialIcons.forEach(icon => icon.classList.toggle("active"));
	}

	function toggleCollectionsMenu(event) {
		event.preventDefault(); // Щоб не перезавантажувалась сторінка
		CollectionsMenu.classList.toggle("active");
		Collections.classList.toggle("active");
		container.classList.toggle("active");
		socialIcons.forEach(icon => icon.classList.toggle("active"));
	}

	// Обробники подій
	burgerIcon.addEventListener("click", toggleBurgerMenu);
	shop.addEventListener("click", toggleShopMenu);
	Collections.addEventListener("click", toggleCollectionsMenu);
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

