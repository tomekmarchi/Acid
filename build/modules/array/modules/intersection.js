//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
array_extend.intersection = function () {
	var array = this,
		args=_toArray(arguments),
		len = array.length,
		arguments_length = args.length,
		intersection = [];
	for (var i = 0; i < len; i++) {
		var item = array[i],
			matched = 0;
		for (var a = 0; a < arguments_length; a++) {
			if (_has(args[a], item)) {
				var matched = matched + 1;
			}
		}
		if (matched === arguments_length) {
			intersection.push(item);
		}
	}
	return intersection;
};