/*
	pick specific properties, listed in an array, from an object and a new object is returned with those specfic properties.
*/
var pick = $.pick = (array, originalObject, newObject) => {
	return arraySortToObject((item, key, object) => {
		object[item] = originalObject[item];
	}, array, newObject);
};
