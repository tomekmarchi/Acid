//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
$.partition = function (array,funct) {
	var temp_a = [],
		temp_b = [],
		item,
		len = array.length;
	for (var i = 0; i < len; i++) {
		item = array[i];
		if (funct(item)) {
			temp_a.push(item);
		} else {
			temp_b.push(item);
		}
	}
	return [temp_a, temp_b];
};