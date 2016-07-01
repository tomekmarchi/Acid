var map = $.map = function(object, funct, safeMode, rawProp) {
        var returned;
        if (!hasValue(object)) {
            return False;
        } else if (isArray(object)) {
            returned = mapArray;
        } else if (isPlainObject(object) || isFunction(object)) {
            returned = mapObject;
        } else if (isNodeList(object) || isHTMLCollection(object)) {
            object = toArray(object);
            returned = mapArray;
        } else {
            if (rawProp) {
                returned = mapProperty;
            } else if (object.forEach) {
                returned = forEach;
            } else {
                returned = mapObject;
            }
        }
        return returned(object, funct, safeMode);
    },
    each = $.each = function(object, funct, safeMode, rawProp) {
        var returned;
        if (!hasValue(object)) {
            returned = function() {};
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
            if (rawProp) {
                returned = mapProperty;
            } else if (object.forEach) {
                returned = forEach;
            } else {
                returned = eachObject;
            }
        }
        return returned(object, funct, safeMode);
    };
