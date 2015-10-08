//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
var _module = (function() {
	var module = function(data) {
		var fn = data.invoke,
			callback = data.callback,
			modelName = data.name,
			importData = data.import,
			compiled = function(callbackOptional) {
				_import(importData, {
					call: fn.bind(compiled)
				});
			};
		if (modelName) {
			_model[modelName]=compiled;
		}
		return compiled;
	};

	return module;
})();

$.module = _module;
