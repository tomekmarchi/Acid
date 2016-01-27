//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
var moduleMethod = $.module = function(data) {
	var fn = data.invoke,
		callback = data.callback,
		modelName = data.name,
		importData = data.import,
		compiled = function(callbackOptional) {
			importMethod(importData, {
				call: bindTo(fn,compiled)
			});
		};
	if (modelName) {
		modelMethod[modelName]=compiled;
	}
	return compiled;
};
