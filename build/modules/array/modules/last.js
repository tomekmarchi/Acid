//Returns the last element of an array. Passing n will return the last n elements of the array.
array_extend.last = function (n) {
	var i = this;
	if (n) {
		return i.splice(i.length - n, n);
	}
	return i[i.length - 1];
};