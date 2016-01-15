var prepend = function (node, child) {
	var first = node.firstChild;
	if (first) {
		node.insertBefore(child, first);
	}else{
		node.appendChild(child);
	}
	return node;
};