
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
const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const burgerIcon = document.querySelector(".burger-menu");

burger.addEventListener('click', () => {
	sideMenu.classList.toggle('active'); // відкриває або закриває
	burgerIcon.classList.toggle('active');
});



///////filters_slider////////////
const filters_icon = document.getElementById("icon_button_filters");
const filters_block = document.querySelector(".filters");
const dark_overlay_header = document.querySelector(".header");
const icon_button_cross = document.querySelector(".icon_button_cross");
const body = document.body;


if (filters_icon) {
	filters_icon.addEventListener('click', () => {
		filters_block.classList.toggle('active'); // додає або забирає клас 'active'
		dark_overlay_header.classList.toggle('filters_media'); // додає або забирає клас 'active'
		body.classList.toggle('scroll-lock');
	});
}
if (icon_button_cross) {
	icon_button_cross.addEventListener('click', () => {
		filters_block.classList.remove('active');
		dark_overlay_header.classList.remove('filters_media');
		body.classList.remove('scroll-lock');
	});
}

/////swiper///////////////////////////////////////////////////////////////
let swiperInstance = null;

function initSwiperIfNeeded() {
	const isMobile = window.innerWidth < 768;

	if (isMobile && !swiperInstance) {
		swiperInstance = new Swiper('.swiper', {
			loop: 4,
			spaceBetween: 16,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				480: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},

			}
		});
	} else if (!isMobile && swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;

		// Очистити стилі, додані Swiper'ом
		const wrapper = document.querySelector('.swiper-wrapper');
		if (wrapper) {
			wrapper.removeAttribute('style');
			wrapper.querySelectorAll('.swiper-slide').forEach(slide => {
				slide.removeAttribute('style');
			});
		}
	}
}

window.addEventListener('load', initSwiperIfNeeded);
window.addEventListener('resize', initSwiperIfNeeded);





/////////////filters//////////////////////////////////////////////
const filterWrappers = document.querySelectorAll("[class$='_filters']");

filterWrappers.forEach((wrapper) => {
	const title = wrapper.querySelector(".title_text");
	const button = wrapper.querySelector(".filter_svg");
	const content = wrapper.querySelector(":scope > div:not(.price_filters_title):not(.color_filters_title):not(.size_filters_title):not(.dress_filters_title)");

	// Клік по заголовку або кнопці
	if (title && button && content) {
		wrapper.querySelector(".price_filters_title, .color_filters_title, .size_filters_title, .dress_filters_title")?.addEventListener("click", (e) => {
			const target = e.target;
			if (target.closest(".title_text") || target.closest(".items_button")) {
				button.classList.toggle("active");
				content.classList.toggle("active");
			}
		});
	}
});



//////////image_slider//////////////////////////////////////
document.querySelectorAll('.small_image_details img').forEach((thumbnail) => {
	thumbnail.addEventListener('click', () => {
		const mainImage = document.getElementById('mainImage');
		mainImage.src = thumbnail.dataset.src;

		// Зняти активність з усіх
		document.querySelectorAll('.small_image_details img').forEach(img => img.classList.remove('active'));
		// Додати активність до поточного
		thumbnail.classList.add('active');
	});
});


//////////////////////// вкладки реітінг ревювс//////////////////

const buttons = document.querySelectorAll('.title_menu');
const contents = document.querySelectorAll('.tab_content');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		// Зняти активність з усіх кнопок і контенту
		buttons.forEach(btn => btn.classList.remove('active'));
		contents.forEach(content => content.classList.remove('active'));

		// Додати активний клас до натиснутої кнопки
		button.classList.add('active');

		// Показати відповідний контент
		const tabId = button.getAttribute('data-tab');
		document.getElementById(tabId).classList.add('active');
	});
});




///////size_button_choose_product_sections////////
const sizeButtons = document.querySelectorAll('.size-button');

sizeButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Видаляємо клас active з усіх кнопок
		sizeButtons.forEach(btn => btn.classList.remove('active'));
		// Додаємо клас active до натиснутої кнопки
		button.classList.add('active');
	});
});


/////////////////////колор ховер///////////////////////////////////
function setupActiveSelection(containerSelector, itemSelector) {
	const containers = document.querySelectorAll(containerSelector);

	containers.forEach(container => {
		const items = container.querySelectorAll(itemSelector);

		items.forEach(item => {
			item.addEventListener('click', () => {
				// Видаляємо клас 'active' та приховуємо галочку з усіх елементів у поточному контейнері
				items.forEach(el => {
					el.classList.remove('active');
					const checkmark = el.querySelector('.checkmark-icon');
					if (checkmark) {
						checkmark.classList.remove('active');
					}
				});

				// Додаємо клас 'active' до натиснутого елемента
				item.classList.add('active');

				// Знаходимо галочку всередині натиснутого елемента і додаємо їй клас 'active'
				const activeCheckmark = item.querySelector('.checkmark-icon');
				if (activeCheckmark) {
					activeCheckmark.classList.add('active');
				}
			});
		});
	});
}

// Для .color_ellipse_block
setupActiveSelection('.color_ellipse_block', '.color_ellipse');

// Для .ellipse_color
setupActiveSelection('.ellipse_color', '.color'); // Ось це новий виклик!




////////////лічильник//////
document.addEventListener('DOMContentLoaded', () => {
	const qtyControl = document.querySelector('.quantity-control');
	const qtyValue = qtyControl.querySelector('.qty-value');
	const buttons = qtyControl.querySelectorAll('.qty-btn');

	buttons[0].addEventListener('click', () => {
		// Мінус
		let current = parseInt(qtyValue.textContent, 10);
		if (current > 1) {
			qtyValue.textContent = current - 1;
		}
	});

	buttons[1].addEventListener('click', () => {
		// Плюс
		let current = parseInt(qtyValue.textContent, 10);
		qtyValue.textContent = current + 1;
	});
});



document.addEventListener('DOMContentLoaded', () => {
	const sizeButtons = document.querySelectorAll('.size-selector button');

	sizeButtons.forEach(button => {
		button.addEventListener('click', () => {
			sizeButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');
		});
	});
});


