var each = function(object, funct, fn) {
    var returned;
    if (!hasValue(object)) {
        returned = () =>{};
    } else if (isArray(object)) {
        returned = eachArray;
    } else if (isPlainObject(object) || isFunction(object)) {
        returned = eachObject;
    } else if (isNodeList(object) || isHTMLCollection(object)) {
        object = toArray(object);
        returned = eachArray;
    } else if (isNumber(object)) {
        returned = eachNumber;
    } else {
		if(fn){
			returned = eachProperty;
		}else if (object.forEach) {
            returned = forEach;
        }
    }
    return returned(object, funct, fn);
};

$.each = each;
