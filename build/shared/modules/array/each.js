/*
Each Methods
Array
	Each,EachDo,whileTrue,whileFalse,eachWhile,whileLength,eachRight
Object
	Each
Number
	Each
*/

//loop through an array of items
var _each_array = function(array, fn) {
	//an array of results will be returned
	var returned,
		a = 0,
		length = array.length,
		results = [];
	for (var i = 0; i < length; i++) {
		returned = fn(array[i], i, length, array);
		if(hasValue(returned)){
			results[a] = returned;
			a++;
		}
	}
	return results;
};

var eachRaw = function(array, fn) {
	//an array of results will be returned
	for (var i = 0,length = array.length; i < length; i++) {
		fn(array[i], i, length, array);
	}
};

var eachDo = function(array, callback, safeIteration) {
	var i = 0;

	if (safeIteration)
		while (i < array.length && (!(i in this) || callback(array[i], i, array) !== false)) ++i;
	else
		while (i < array.length && callback(array[i], i++, array) !== false);

	return array;
};

//loop while the returned result is true
var _whileTrue = function(array, fn) {
	//an array of results will be returned
	for (var i = 0, results = [], len = array.length; i < len; i++) {
		if (!(results[i] = fn(array[i], i, len))) {
			break;
		}
	}
	return results;
};

//loop while the returned result is false
var _whileFalse = function(array, fn) {
	//an array of results will be returned
	for (var i = 0, results = [], len = array.length; i < len; i++) {
		if (results[i] = fn(array[i], i, len)) {
			break;
		}
	}
	return results;
};

//each while the check function is true
var _eachWhile = function(array, fn, check) {
	//an array of results will be returned
	for (var i = 0, results = [], len = array.length; i < len; i++) {
		if (!check(results[i] = fn(array[i], i, len))) {
			break;
		}
	}
	return results;
};

//loop while the count is less than the length of the array
var _whileLength = function(array, fn) {
	//an array of results will be returned
	var results = [];
	var i = 0;
	while (i < arr.length) {
		results[i] = fn(array[i], i);
		i++;
	}
	return results;
};

//loop through array backwards aka from the right
var eachArrayFromRight = function(array, fn) {
	//an array of results will be returned
	for (var results = [], len = array.length, i = len - 1; i >= 0; i--) {
		results[i] = fn(array[i], i, len);
	}
	return results;
};

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
//loop through based on number
var _each_number = function(start, end, fn) {
	if (!fn) {
		var fn = end,
			end = start,
			start = 0;
	}
	var results = [];
	for (; start < end; start++) {
		//call function get result
		results[start] = fn(start);
	}
	return results;
};
