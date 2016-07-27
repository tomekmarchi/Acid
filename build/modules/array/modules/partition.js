//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
$.partition = (array, funct) => {
	var temp = [];
    return [filterArray(array, (item, index) => {
		return funct(item)? item : pushArray(temp, item) && undefinedNative;
    }),temp];
};
