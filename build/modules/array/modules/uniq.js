//Produces a duplicate-free version of the array, using === to test object equality.
array_extend.uniq = function () {
	var array = this,
		uniq = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i];
		if (!_has(uniq, item)) {
			uniq.push(item);
		}
	}
	return uniq;
};