var insertAfter = function (child, new_node) {
	child.parentNode.insertBefore(new_node, child.nextSibling);
	return new_node;
};