//make action on object via acid event
var	nodeAction = function (node, type) {
	$['on' + type](node);
	return node;
};

//make action on object via acid event
var	nodeTrigger = function (node, type) {
	node[type]();
	return node;
};
