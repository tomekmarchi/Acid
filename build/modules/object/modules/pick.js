/*
	Pluck specific properties, listed in an array, from an object and a new object is returned with those specfic properties.
*/
var pick = $.pick = (originalObject, array, newObject) => {
    newObject = newObject || {};
    mapArray(array, (item) => {
        newObject[item] = originalObject[item];
    });
	return newObject;
};
