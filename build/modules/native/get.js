/*

	Navigate down an object's chain via a string.

*/
var find = $.get = (name, obj) => {
    obj = obj || $;
	eachWhile(splitCall(arrayLastItem(splitCall(name, slashString)), dotString), (item, index) => {
		obj = obj[item];
		return hasValue(obj)? True : False;
	});
    return obj;
};
