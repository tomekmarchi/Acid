//Returns the first element of an array. Passing n will return the first n elements of the array.
array_extend.first = function (n) {
	var i = this;
	if (n) {
		return i.splice(0, n);
	}
	return i[i.length - 1];
};