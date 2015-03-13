//loop through an array of items
var _each_array=function (array,fn) {
	//an array of results will be returned
	var results=[];
	for (var i = 0,len = array.length; i < len; i++) {
		results[i] = fn(array[i], i);
	}
	return results;
};
//loop through an object
var _each_object=function (object,fn) {
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