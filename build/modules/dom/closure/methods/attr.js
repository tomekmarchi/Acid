//attr functions
var _hasAttr = function (node, n) {
		return node.hasAttribute(n);
	},
	//set/get attribute
	_attr = function (node, key, value) {
		if (_isString(key)) {
			if (hasValue(value)) {
				node.setAttribute(key, value);
			} else {
				return node.getAttribute(key);
			}
		} else if (isPlainObject(key)) {
			for (var i = 0, keys = _object_keys(key), len = keys.length; i < len; i++) {
				var keyed = keys[i];
				var item = key[keyed];
				node.setAttribute(keyed, item);
			}
		}
		return node;
	},
	_removeAttr = function (node, n) {
		node.removeAttribute(n);
		return node;
	};