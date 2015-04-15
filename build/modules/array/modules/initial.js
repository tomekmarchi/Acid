//Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
array_extend.initial = function (startFrom) {
	var array = this;
	if (startFrom) {
		return _arrayLastItem(array,startFrom);
	}
	array.pop();
	return array;
};