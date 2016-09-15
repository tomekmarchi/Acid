//Returns the first element of an array. Passing num will return the first n elements of the array.
var firstItem = $.first = function (array, num) {
	return (num) ? arraySliceCall(array, 0, num) : array[0];
};
