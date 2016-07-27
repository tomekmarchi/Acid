//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
var moduleMethod = $.module = (data, otherData) => {
	data = setupModelData(data, otherData);
	return setUpModel(function compiled() {
		importMethod(data.import, {
			call: bindTo(data.invoke, compiled)
		});
	}, data);
};
