import { appendChilds, makeElement } from '../utils.js';
import { makeTableElement } from '../Controller/tableList.js';
const tableList = function (tableData) {
	const tableContainer = makeElement({ tag: 'div' });
	const tableListElement = makeTableElement(tableData);

	this.initializer = () => {
		appendChilds(tableContainer, tableListElement);
		return tableContainer;
	};
};

export default tableList;
