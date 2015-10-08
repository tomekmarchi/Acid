//Splits a collection into sets, grouped by the result of running each value through iteratee.
$.groupBy = function (array,funct) {
	var object = {},
		item,
		results,
		len = array.length;
	for (var i = 0; i < len; i++) {
			item = array[i],
			results = funct(item);
		if (!object[results]) {
			object[results] = [];
		}
		object[results].push(item);
	}
	return object;
};