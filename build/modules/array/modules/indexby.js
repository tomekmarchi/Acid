//Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
$.indexBy = function (array,index) {
	var object = {},
		obj,
		i,
		len = array.length;
	for (i = 0; i < len; i++) {
		obj = array[i];
		object[obj[index]] = obj;
	}
	return object;
};