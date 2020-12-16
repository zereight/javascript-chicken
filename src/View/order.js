import { appendChilds, makeElement } from '../utils.js';
import tableList from './tableList.js';

const OrderView = function (tableData) {
	const orderContainer = makeElement({ tag: 'div' });
	console.log(tableData);
	const tableElement = new tableList(tableData).initializer();

	this.initializer = () => {
		appendChilds(orderContainer, [tableElement]);
		return orderContainer;
	};
};

export default OrderView;
