//Creates a slice of array with n elements taken from the beginning.
$.take = function (array,amount) {
	return stringSliceCall(array,0,amount);
};

//Creates a slice of array with n elements taken from the end.
$.takeRight = function (array,amount) {
	return spliceArray(array,getLength(array)-amount,amount);
};
