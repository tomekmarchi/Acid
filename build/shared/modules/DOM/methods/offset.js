//offsets
var _ow = function (node) {
	return node.offsetWidth;
},
_oh = function (node) {
	return node.offsetHeight;
},
_ot = function (node) {
	return node.offsetTop;
},
_offset = function (node) {
	var i = node.getBoundingClientRect();
	var returned = {
		top: i.top + _body.scrollTop,
		left: i.left + _body.scrollLeft
	};
	return returned;
};