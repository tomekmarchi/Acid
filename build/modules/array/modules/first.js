//Returns the first element of an array. Passing num will return the first n elements of the array.
var firstItem = $.first = function (array,num) {
	if (num) {
		return sliceArray(array,0, num);
	}
	return array[0];
};
