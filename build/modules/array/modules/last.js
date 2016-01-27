//Returns the last element of an array. Passing n will return the last n elements of the array.
var arrayLastItem = $.last = function(array, indexFrom) {
    indexFrom = indexFrom || 1;
    return spliceArray(array, getLength(array) - indexFrom, indexFrom);
};
