var _html = function (node, n) {
	if (hasValue(n)) {
		if (_isFunction(n)) {
			var n = n.apply(this, []);
		}
		node.innerHTML = n;
		return node;
	}
	return node.innerHTML;
},
_ohtml = function (node, n) {
	if (hasValue(n)) {
		if (_isFunction(n)) {
			var n = n.apply(this, []);
		}
		node.outerHTML = n;
		return node;
	}
	return node.outerHTML;
};