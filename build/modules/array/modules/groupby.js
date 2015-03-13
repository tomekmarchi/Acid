//Splits a collection into sets, grouped by the result of running each value through iteratee.
array_extend.groupBy = function (funct) {
	var array = this,
		object = {},
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i],
			results = funct(item);
		if (!object[results]) {
			object[results] = [];
		}
		object[results].push(item);
	}
	return object;
};