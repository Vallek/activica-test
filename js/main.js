'use strict';

// Dropdown main menu
const header = document.querySelector('.header');
const popupBtn = document.querySelector('.header__popup-btn');
const menu = document.querySelector('.header__menu');
const content = document.querySelector('.header__content');
const about = document.querySelector('.header__about');
const contacts = document.querySelector('.header__contacts');
const action = document.querySelector('.header__action');

// Elemtns to hide on mobile
let arr = [];
arr.push(menu, about, contacts);

function handleMenu() {
	let hidden = content.classList.contains('no-menu');
	if (!hidden) {
		for (let el of arr) {
			el.classList.add('visually-hidden');
		}
		if (window.innerWidth <= 768) {
			action.classList.add('visually-hidden');
		}
		action.classList.remove('in-menu');
		popupBtn.classList.remove('header__popup-btn_close');
		content.classList.add('no-menu');
	} 
	else {
			for (let el of arr) {
				el.classList.remove('visually-hidden');
			}
			if (window.innerWidth <= 768) {
				action.classList.remove('visually-hidden');
			}
			action.classList.add('in-menu');
			popupBtn.classList.add('header__popup-btn_close');
			content.classList.remove('no-menu');
	}
}
popupBtn.addEventListener('click', handleMenu); 

function hideNav() {
	for (let el of arr) {
		if (window.innerWidth <= 1400) {
			el.classList.add('visually-hidden');
			content.classList.add('no-menu');
			action.classList.remove('in-menu');
			popupBtn.classList.remove('header__popup-btn_close');
		}
		else {
			el.classList.remove('visually-hidden');
			content.classList.remove('no-menu');
		}
	}
	if (window.innerWidth <= 768) {
		action.classList.add('visually-hidden');
	} else {
		action.classList.remove('visually-hidden');
	}
}
hideNav();
window.addEventListener('resize', hideNav);

// Sticky header animation
const body = document.querySelector('body');
function scrollHeader() {
	if (window.innerWidth <= 1400) {
			let headerHeightStr = getComputedStyle(content).height;
			let headerHeight = parseInt(headerHeightStr, 10);
			let pageTop = body.getBoundingClientRect().top;
			if (pageTop <= -headerHeight) {
				header.style.top = '0px';
				header.classList.add('header_sticky');
			}
			else {
				header.style.top = headerHeightStr;
				header.classList.remove('header_sticky');
			}
	} else {
		header.classList.remove('header_sticky');
	}
}
scrollHeader();
window.addEventListener('scroll', scrollHeader);
window.addEventListener('resize', scrollHeader);

// Close when click outside
document.addEventListener('click', (el) => {
	let target = el.target;
	if (!header.contains(target)) {
		popupBtn.classList.remove('header__popup-btn_close');
		action.classList.remove('in-menu');
		hideNav();
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
		el.style.zIndex = 2;
	});
});