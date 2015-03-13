//select text in node
var selectIt = function (node) {
	var range = document.createRange();
	range.selectNodeContents(node);
	var sel = _window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	return node;
};