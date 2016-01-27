/*

This is for finding an object method via a string used througout events

*/
//find method
var find = $.get = (name, obj) => {
        var obj = (obj) ? obj : $,
            name = splitCall(name, slashString),
            name = name[getLength(name) - 1];
        if (hasDot(name)) {
            eachWhile(splitCall(name, dotString), (item, index) => {
                    obj = obj[item];
                    if (hasValue(obj)) {
                        return true;
                    }
                });
            } else {
                obj = obj[name];
            }
            return obj || false;
        };
