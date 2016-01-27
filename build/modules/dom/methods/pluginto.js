var	plugInto = function (node, string, object) {
	model = find(string, modelMethod);
	if (model) {
		return model(node, object);
	} else {
		ensure(string,  () => {
			model = find(string, modelMethod);
			if (model) {
				model(node, object);
			}
			node = null;
		});
	}
	return node;
};
