/*

	Navigate down an object's chain via a string.

*/
var find = $.get = (name, obj) => {
    var obj = obj || $,
        name = arrayLastItem(splitCall(name, slashString));
    if (hasDot(name)) {
        eachWhile(splitCall(name, dotString), (item, index) => {
            obj = obj[item];
            if (hasValue(obj)) {
                return True;
            } else {
                obj = undefined;
				return False;
            }
        });
    } else {
        obj = obj[name];
    }
    return obj;
};
