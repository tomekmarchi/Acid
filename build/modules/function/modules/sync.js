//Launch functions in sync
$.inSync = function(functions) {
	return mapArray(functions,(functionObject) =>{
		return functionObject();
	});
};
