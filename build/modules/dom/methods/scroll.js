//scroll this node
var scrollIt = function (node, x, y) {
	if (hasValue(x)) {
		node.scrollTop = x;
	}
	if (hasValue(y)) {
		node.scrollLeft = y;
	}
	return node;
};
//scroll info
var scrollInfo = function (node) {
	var returned = {
		top: node.scrollTop,
		left: node.scrollLeft
	};
	return returned;
};
//scroll
var scrollInto = function (node, node_to_scroll_into_view) {
	node.scrollIntoView(node_to_scroll_into_view);
	return node;
};