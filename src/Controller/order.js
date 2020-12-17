import { MENU } from '../key.js';
import { appendChilds, makeElement } from '../utils.js';

const menuInputButtonEvent = (e) => {
	const { target: buttonElement } = e;

	const menuInputElement = buttonElement.parentElement.querySelector('input');
	const amountInputElement = makeElement({
		tag: 'input',
		placeholder: '수량을 입력해주세요.',
	});
	const menuInputButtonElement = makeElement({
		tag: 'button',
		innerText: '수량입력',
	});

	appendChilds(buttonElement.parentNode, [
		amountInputElement,
		menuInputButtonElement,
	]);
};

export const tableInputButtonEvent = (e) => {
	const { target: buttonElement } = e;
	const tableInputElement = buttonElement.parentElement.querySelector('input');
	const menuTextElement = makeElement({ tag: 'p', innerText: MENU });
	const menuInputElement = makeElement({
		tag: 'input',
		placeholder: '메뉴 번호를 입력해주세요.',
	});
	const menuInputButtonElement = makeElement({
		tag: 'button',
		innerText: '메뉴입력',
	});

	menuInputButtonElement.addEventListener('click', menuInputButtonEvent);

	appendChilds(buttonElement.parentNode, [
		menuTextElement,
		menuInputElement,
		menuInputButtonElement,
	]);
};
