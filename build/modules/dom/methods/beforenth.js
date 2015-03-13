var beforeNth = function (node, new_child, position) {
	var child = node.children[position];
	if (!child) {
		node.appendChild(new_child);
	} else {
		node.insertBefore(new_child, child);
	}
	return node;
};