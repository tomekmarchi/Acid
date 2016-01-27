var ensure = function(models, call) {
	var models = (isString(models)) ? [models] : models,
		importData = eachArray(models, (item) => {
			return `${item}.js`;
		});
	importMethod(importData, call);
};
$.ensure = ensure;
