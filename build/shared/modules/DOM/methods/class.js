/*
METHODS FOR CLASS MODS
*/
//classname
var _cn = function (node, n) {
	if (hasValue(n)) {
		node.className = n;
		return node;
	}
	return node.className;
},
//classlist
_cl = function (node, args) {
	var node_classList=node.classList;
	if (args) {
		if (!_isArray(args)) {
			if (!node_classList.contains(args)) {
				node_classList.add(args);
			}
		} else {
			_each_array(args, function (item) {
				if (!node_classList.contains(item)) {
					node_classList.add(item);
				}
			});
		}
		return node;
	}
	return node_classList;
},
//classlist functions
_clHas = function (node, key) {
	return node.classList.contains(key);
},
_clRemove = function (node, args) {
	var node_classList=node.classList;
	if (!_isArray(args)) {
		if (node_classList.contains(args)) {
			node_classList.remove(args);
		}
	} else {
		_each_array(args, function (item) {
			if (node_classList.contains(item)) {
				node_classList.remove(item);
			}
		});
	}
	return node;
},
_clTog = function (node, args) {
	var node_classList=node.classList;
	if (!_isArray(args)) {
		node_classList.toggle(args);
	} else {
		_each_array(args, function (item) {
			node_classList.toggle(item);
		});
	}
	return node;
};
