//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
array_extend.partition = function (funct) {
	var array = this,
		temp_a = [],
		temp_b = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i];
		if (funct(item)) {
			temp_a.push(item);
		} else {
			temp_b.push(item);
		}
	}
	return [temp_a, temp_b];
};