//Returns the first element of an array. Passing n will return the first n elements of the array.
$.first = function (array,n) {
	if (n) {
		return spliceArray(array,0, n);
	}
	return array[getLength(array) - 1];
};
