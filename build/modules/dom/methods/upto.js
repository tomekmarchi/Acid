//transverse up based on a match or number
var nodeUpToParentLevel = function (node, i) {
		var i = i - 1,
			node = parNode(node);
		if (i) {
			while (i--) {
				node = parNode(node);
			}
		}
		i = null;
		return node;
	},
	nodeUpTo = function (node, name) {
		if (isNumber(name)) {
			return upToParentLevel(node, name);
		}
		while (node=node.parentNode) {
			if (!node) {
				return false;
			} else if (!isDom(node)) {
				return false;
			} else if (matchesSelector(node,name)) {
				break;
			}
		}
		return node;
	};
