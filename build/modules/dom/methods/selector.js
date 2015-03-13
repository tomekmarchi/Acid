//selectors
var _id = function (node, n) {
	return node.getElementById(n);
},
_cls = function (node, n) {
	return node.getElementsByClassName(n);
},
_tag = function (node, n) {
	return node.getElementsByTagName(n);
},
_qsa = function (node, n) {
	return node.querySelectorAll(n);
},
_qs = function (node, n) {
	return node.querySelector(n);
};