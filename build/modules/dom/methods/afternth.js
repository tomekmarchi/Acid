var afterNth = function (node, newChild, position) {
	var child = node.children[position + 1];
	if (!child) {
		append(node,newChild);
	} else {
		node.insertBefore(newChild, child);
	}
	return node;
};
