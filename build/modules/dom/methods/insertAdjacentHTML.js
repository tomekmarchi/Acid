//insertAdjacentHTML
var generateInsertAdjacentHTML = function (type) {
		var returned = function (node, data) {
				node.insertAdjacentHTML(type, data);
				return node;
			};
		return returned;
	},
	beforeEndNode = generateInsertAdjacentHTML('beforeEnd'),
	afterBeginNode = generateInsertAdjacentHTML('afterbegin'),
	beforeBeginNode = generateInsertAdjacentHTML('beforeBegin'),
	afterEndNode = generateInsertAdjacentHTML('afterEnd');
