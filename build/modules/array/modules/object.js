//Converts arrays into objects. Keys as this and values as first argument
$.object = function (array,value) {
	var len = array.length,
		object = {};
	for (var i = 0; i < len; i++) {
		object[array[i]] = value[i];
	}
	return object;
};