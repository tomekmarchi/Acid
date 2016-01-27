var prepend = function (node, child) {
	var first = node.firstChild;
	if (first) {
		node.insertBefore(child, first);
	}else{
		append(node,child);
	}
	return node;
};
