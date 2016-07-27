var assignDeep = $.assignDeep = (object, otherObject, mergeArrays) => {
	eachObject(otherObject, (item, key) => {
		(isPlainObject(item) && isPlainObject(object[key]) ? assignDeep(object[key], item, mergeArrays) : mergeArrays && isArray(item) && isArray(object[key])? pushApply(object[key], item) : object[key] = item);
	});
	return object;
};
