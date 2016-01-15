var	_plugInto = function (node, string, object) {
	model = _find(string, _model);
	if (model) {
		model=model(node, object);
		node=null;
		object=null;
		return model;
	} else {
		_ensure(string, function () {
			model = _find(string, _model);
			if (model) {
				model(node, object);
			}
			string = null;
			object = null;
			node = null;
		});
	}
	return node;
};