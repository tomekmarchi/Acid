//Launch functions in sync
$.sync = function(functions) {
	return _each_array(functions,(functionObject) =>{
		return functionObject();
	});
};
