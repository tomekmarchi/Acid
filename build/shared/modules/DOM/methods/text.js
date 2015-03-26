//text
var	_tc = function (node, n) {
	if (hasValue(n)) {
		if (_isFunction(n)) {
			var n = n.apply(this, []);
		}
		node.textContent = n;
		return node;
	}
	return node.textContent;
},
_txt = function (node, n) {
	if (hasValue(n)) {
		if (_isFunction(n)) {
			var n = n.apply(this, []);
		}
		node.innerText = n;
		return node;
	}
	return node.innerText;
};