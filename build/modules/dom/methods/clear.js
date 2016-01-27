//clear
var clearNode = function (node) {
	while (node.firstChild) {
		node.firstChild.remove();
	}
	return node;
};
