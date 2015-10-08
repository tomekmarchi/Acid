//change the tagname of a node and returns the a new node with the new tagname
var changeTag = function (node, tagename) {
	var attrs = node.attributes,
		object = {},
		item,
		len = attrs.length;
	for (var i = 0; i < len; i++) {
		item = attrs[i];
		object[item.name] = item.value;
	}

	attrs = null;
	return _dom(tagename, {
		attr: object
	});
};