//Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
array_extend.initial = function (n) {
	var array = this;
	if (n) {
		return array.last(n);
	}
	array.pop();
	return array;
};