import { makeElement } from '../utils.js';
export const makeTableElement = (tableData) =>
	tableData.map((data, index) =>
		makeElement({
			tag: 'div',
			innerText: `${index + 1} (${data.hasOrders() ? '$' : ''})`,
		})
	);
