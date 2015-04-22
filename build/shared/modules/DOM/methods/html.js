var _innerHTML = function (node, value) {
	if (hasValue(value)) {
		if (_isFunction(value)) {
			var value = value.call(this, node);
		}
		node.innerHTML = value;
		return node;
	}
	return node.innerHTML;
},
_ohtml = function (node, value) {
	if (hasValue(value)) {
		if (_isFunction(value)) {
			var value = value.call(this, node);
		}
		node.outerHTML = value;
		return node;
	}
	return node.outerHTML;
};