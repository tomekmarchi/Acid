//make action on object via acid event
var	_act = function (node, type) {
	$['on' + type](node);
	return node;
};

$.act=_act;