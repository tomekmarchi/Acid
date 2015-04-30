//Produces a duplicate-free version of the array, using === to test object equality.
array_extend.uniq = function (isSorted) {
	return _uniq(this,isSorted);
};