//Returns the first element of an array. Passing n will return the first n elements of the array.
$.first = function (array,n) {
	if (n) {
		return array.splice(0, n);
	}
	return array[array.length - 1];
};