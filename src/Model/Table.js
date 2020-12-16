const Table = function () {
	this.orderList = [];
	this.addOrderList = (menu) => {
		if (!this.orderList.includes(menu)) this.orderList.push(menu);
    };
    this.hasOrders = () => this.orderList !== [];
};

export default Table;
