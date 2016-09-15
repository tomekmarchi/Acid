//Returns the last element of an array. Passing n will return the last n elements of the array.
var arrayLastItem = $.last = function(array, indexFrom) {
	var length=getLength(array);
    return (indexFrom)? arraySliceCall(array,length - indexFrom, length) : array[length-1];
};
