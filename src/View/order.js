import { appendChilds, makeElement } from '../utils.js';
import tableList from './tableList.js';
import { tableInputButtonEvent } from '../Controller/order.js';
import { MENU } from '../key.js';

const OrderView = function (tableData) {
	const orderContainer = makeElement({ tag: 'div' });
	const tableElement = new tableList(tableData).initializer();
	const inputElement = makeElement({
		tag: 'input',
		placeholder: '테이블 입력',
	});
	const inputButtonElement = makeElement({
		tag: 'button',
		innerText: '테이블 선택',
	});

	this.initializer = () => {
		inputButtonElement.addEventListener('click', tableInputButtonEvent);
		appendChilds(orderContainer, [
			tableElement,
			inputElement,
			inputButtonElement,
		]);
		return orderContainer;
	};
};

export default OrderView;
