//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
var moduleMethod = $.module = function(data) {
	var fn = data.invoke,
		modelName = data.name,
		importData = data.import,
		compiled = data.invoke = function() {
			importMethod(importData, {
				call: bindTo(fn,compiled)
			});
		};
	objectAssign(compiled,fn);
	compiled._=objectAssign({}, data);
	compiled._.invoke=null;
	if (modelName) {
		modelMethod[modelName]=compiled;
	}
	return compiled;
};
