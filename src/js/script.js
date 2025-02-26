document.addEventListener("DOMContentLoaded", function () {
	const burgerIcon = document.querySelector(".burger-menu"); // Іконка бургера
	const burgerMenu = document.querySelector(".burger_menu_list"); // Меню
	const container = document.querySelector(".container"); // Головний контейнер
	const previewTitle = document.querySelector(".preview_title_header"); // Заголовок
	const bars = document.querySelectorAll(".bar"); // Лінії бургера
	const socialIcons = document.querySelectorAll(".icon"); // Всі SVG-іконки соцмереж

	// Функція перемикання класу
	function toggleMenu() {
		burgerMenu.classList.toggle("active");
		burgerIcon.classList.toggle("active");
		container.classList.toggle("active");
		previewTitle.classList.toggle("active");
		bars.forEach(bar => bar.classList.toggle("active")); // Перемикаємо кожну лінію бургер-меню

		// Додаємо або видаляємо клас .active для всіх SVG-іконок
		socialIcons.forEach(icon => icon.classList.toggle("active"));
	}

	// Додаємо обробник кліку на бургер-іконку
	burgerIcon.addEventListener("click", toggleMenu);
});

window.addEventListener("scroll", function () {
	let header = document.querySelector(".container");
	if (window.scrollY > 500) {
		header.classList.add("scrolled"); // Додаємо клас при прокрутці
	} else {
		header.classList.remove("scrolled"); // Видаляємо клас, якщо наверху
	}
});

