var beforeNth = function (node, newChild, position) {
	var child = node.children[position];
	if (!child) {
		append(node,newChild);
	} else {
		node.insertBefore(newChild, child);
	}
	return node;
};
