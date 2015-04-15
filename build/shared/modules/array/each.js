//loop through an array of items
var _each_array = function (array, fn) {
	//an array of results will be returned
	var results = [];
	for (var i = 0, len = array.length; i < len; i++) {
		results[i] = fn(array[i], i);
	}
	return results;
};
var eachArrayFromRight = function (array, fn) {
	//an array of results will be returned
	var results = [];
	var len=array.length;
	for (var i = len - 1; i >= 0; i--) {
		results[i] = fn(array[i], i);
	}
	return results;
};

//loop through an object
var _each_object = function (object, fn) {
		//an object with matching keys with results will be returned
		var results = {};
		for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
			//object currect key
			var key = keys[i];
			//call function get result
			results[key] = fn(object[key], key, object);
		}
		return results;
	};
//loop through based on number
var _each_number = function (start, end, fn) {
		if (!fn) {
			var fn = end;
			var end = start;
			var start = 0;
		}
		var results = [];
		for (; start < end; start++) {
			//call function get result
			results[start] = fn(start);
		}
		return results;
	};