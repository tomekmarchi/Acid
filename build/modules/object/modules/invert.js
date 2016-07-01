/*
	Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.
*/
var invert = $.invert = (thisObject, object) => {
	object = object || {};
	eachObject(originalObject, (item, key) => {
		object[item] = key;
	});
	return object;
};
