'use strict';

// Dropdown main menu on mobile
const popupBtn = document.querySelector('.header__popup-btn');
const menu = document.querySelector('.header__menu');

popupBtn.addEventListener('click', (el) => {
	let hidden = menu.style.display == 'none';
	if (!hidden) {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
});

// Drag steps
const stepsSlider = document.querySelector('.steps__list');

function scrollSteps(el) {
	let isDrag = false;

	const startDrag = () => isDrag = true;
	const endDrag = () => isDrag = false;
	const drag = (ev) => isDrag && (el.scrollLeft -= ev.movementX);

	stepsSlider.addEventListener('pointerdown', startDrag);
	window.addEventListener('pointerup', endDrag);
	window.addEventListener('pointermove', drag);
}
scrollSteps(stepsSlider);

// Assess hover
const assessItem = document.querySelectorAll('.assess__item');

assessItem.forEach((el) => {
	let assessText = el.querySelector('.assess__feature');
	// Скрыть подписи, если JS работает, если нет, покажет все
	assessText.classList.add('visually-hidden');
	// Показать подписи по наведению
	el.addEventListener('mouseover', () => {
		assessText.classList.remove('visually-hidden');
	});
	el.addEventListener('mouseout', () => {
		assessText.classList.add('visually-hidden');
	});
});