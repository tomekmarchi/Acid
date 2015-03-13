//change the tagname of a node and returns the a new node with the new tagname
var changeTag = function (node, tagename) {
	var attrs = node.attributes,
		object = {},
		len = attrs.length;
	for (var i = 0; i < len; i++) {
		var item = attrs[i];
		object[item.name] = item.value;
	}
	var attrs = null;
	return _dom(tagename, {
		attr: object
	});
};