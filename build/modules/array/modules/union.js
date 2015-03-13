//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
array_extend.union = function () {
	var array = this.flatten(),
		len = array.length,
		union = [];
	for (var i = 0; i < len; i++) {
		var item = array[i];
		if (!_has(union, item)) {
			union.push(item);
		}
	}
	return union;
};