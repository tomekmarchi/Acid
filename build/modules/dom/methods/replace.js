//replace a child node wrapper
var replaceChild = function (obj, born) {
	obj.parentNode.replaceChild(born, obj);
	return born;
};