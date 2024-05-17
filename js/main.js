'use strict';

// Dropdown main menu on mobile
const popupBtn = document.querySelector('.header__popup-btn');
const menu = document.querySelector('.header__menu');
const content = document.querySelector('.header__content');
const about = document.querySelector('.header__about');
const contacts = document.querySelector('.header__contacts');
const action = document.querySelector('.header__action');

// Elemtns to hide on mobile
let arr = [];
arr.push(menu, about, contacts, action);

popupBtn.addEventListener('click', () => {
	let hidden = content.classList.contains('no-menu');
	if (!hidden) {
		for (let el of arr) {
			el.classList.add('visually-hidden');
		}
		popupBtn.classList.remove('header__popup-btn_close');
		content.classList.add('no-menu');
	} else {
			for (let el of arr) {
				el.classList.remove('visually-hidden');
			}
			popupBtn.classList.add('header__popup-btn_close');
			content.classList.remove('no-menu');
	}
});

function hideNav() {
	for (let el of arr) {
		if (el != null &&
		window.innerWidth <= 1400) {
			el.classList.add('visually-hidden');
			content.classList.add('no-menu');
		} else {
			el.classList.remove('visually-hidden');
			content.classList.remove('no-menu');
		}
	}
}
hideNav();
window.addEventListener('resize', hideNav);

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