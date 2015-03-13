var	_plugInto = function (node, string, object) {
	var model = _find(string, _model);
	if (model) {
		return model(node, object);
	} else {
		_ensure(string, function () {
			var model = _find(string, _model);
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