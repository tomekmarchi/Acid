//Launch functions in sync
$.inSync = function(functions) {
	return eachArray(functions,(functionObject) =>{
		return functionObject();
	});
};
