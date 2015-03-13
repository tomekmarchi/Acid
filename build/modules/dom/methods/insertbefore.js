var insertBefore = function (child, new_node) {
	child.parentNode.insertBefore(new_node, child);
	return new_node;
};