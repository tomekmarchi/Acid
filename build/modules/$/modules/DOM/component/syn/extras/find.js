//look up the tree
var _findsyn = function (node, name) {
	if (!name) {
		var name = 'data-syn-root';
	} else {
		var name = 'data-syn-' + name;
	}
	var root = _upTo(node, '[' + name + ']');
	if (root) {
		return _getsyn(root);
	}
	return false;
};

$.findsyn = _findsyn;