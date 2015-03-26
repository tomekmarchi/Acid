//look up the tree
var _findReact = function (node, name) {
	if (!name) {
		var name = 'data-react-root';
	} else {
		var name = 'data-react-' + name;
	}
	var root = _upTo(node, '[' + name + ']');
	if (root) {
		return _getReact(root);
	}
	return false;
};

$.findReact = _findReact;