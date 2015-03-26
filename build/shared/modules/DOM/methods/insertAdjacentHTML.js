//insertAdjacentHTML
var _generate_insertAdjacentHTML = function (type) {
		var returned = function (node, data) {
				node.insertAdjacentHTML(type, data);
				return node;
			};
		return returned;
	},
	_be = _generate_insertAdjacentHTML('beforeEnd'),
	_ab = _generate_insertAdjacentHTML('afterbegin'),
	_bb = _generate_insertAdjacentHTML('beforeBegin'),
	_ae = _generate_insertAdjacentHTML('afterEnd');