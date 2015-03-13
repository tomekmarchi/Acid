//clear
var _clear = function (node) {
	while (node.firstChild) {
		node.firstChild.remove();
	}
	return node;
};