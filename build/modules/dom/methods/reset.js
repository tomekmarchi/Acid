//resets html good for clearing uploaded item
var resetHTML = function (node) {
	var obj = node.parentNode;
	obj.innerHTML = obj.innerHTML;
	return obj;
};
