var _ensure = function(models, call) {
	var models = (_isString(models)) ? [models] : models,
		importData = _each_array(models, function(item) {
			return item + ".js";
		});
	_import(importData, call);
};
$.ensure = _ensure;
