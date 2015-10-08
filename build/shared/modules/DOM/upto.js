//transverse up based on a match or number
var _upTpParentLevel = function (node, i) {
		var i = (i) ? i : Number(node.getAttribute('data-lv')),
			i = i - 1,
			node = node.parentNode;
		if (i) {
			while (i--) {
				node = node.parentNode;
			}
		}
		i = null;
		return node;
	},
	_upTo = function (node, name) {
		if (isNumber(name) || !name) {
			return upTpParentLevel(node, name);
		}
		while (node=node.parentNode) {
			if (!node) {
				return false;
			} else if (!isDom(node)) {
				return false;
			} else if (_isMatch_dom(node,name)) {
				break;
			}
		}
		return node;
	};