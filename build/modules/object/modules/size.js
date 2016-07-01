/*
	Return the number of values in the list.
*/
var objectSize = $.size = (object) => {
	return getLength(objectKeys(object));
};
