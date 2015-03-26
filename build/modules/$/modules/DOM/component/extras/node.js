//create a component component
var _reactNode = function (object, node) {
	if (_isString(node)) {
		var node = _toDOM(node, 0);
	}
	compileNodes(object, node);
	return node;
};

$.reactNode = _reactNode