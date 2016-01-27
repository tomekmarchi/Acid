//Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
$.drop = function (array,amount) {
	return spliceArray(array,amount,getLength(array));
};

//Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
$.dropRight = function (array,amount) {
	return spliceArray(array,0,getLength(array)-amount);
};
