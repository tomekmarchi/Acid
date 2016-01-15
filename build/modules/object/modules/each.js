//loop through an object
var _each_object = function(object, fn) {
	//an object with matching keys with results will be returned
	var results = {};
	var key;
	for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
		//object currect key
		key = keys[i];
		//call function get result
		results[key] = fn(object[key], key, len);
	}
	return results;
};
$.eachObject = _each_object;
