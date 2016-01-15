//selectors
var _id = function (node, n) {
	return node.getElementById(n);
},
_clsDOM = function (node, n) {
	return node.getElementsByClassName(n);
},
_tagDOM = function (node, n) {
	return node.getElementsByTagName(n);
},
_qsa = function (node, n) {
	return node.querySelectorAll(n);
},
_qs = function (node, n) {
	return node.querySelector(n);
};