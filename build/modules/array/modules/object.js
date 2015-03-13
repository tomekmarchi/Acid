//Converts arrays into objects. Keys as this and values as first argument
array_extend.object = function (value) {
	var array = this,
		len = array.length,
		object = {};
	for (var i = 0; i < len; i++) {
		object[array[i]] = value[i];
	}
	return object;
};