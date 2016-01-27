//wrap 2 functions 'this' is launched after the argument function(s)
var wrapCall = $.wrap = (funct, object, bind) => {
        if (isFunction(object)) {
            return function() {
                var args = toArray(arguments);
                return [apply(object, bind, args), apply(funct, bind, args)];
            };
        } else if (isPlainObject(object)) {
            eachObject(object, (item, key) => {
                object[key] = apply(wrapCall, funct, funct, [item, bind]);
            });
        }
        return object;
    },
	//wrap 2 functions 'this' is launched before the argument function(s)
    wrapBefore = $.wrapBefore = (funct, object, bind) => {
        if (isFunction(object)) {
            return function() {
                var args = toArray(arguments);
                return [apply(funct, bind, args), apply(object, bind, args)];
            };
        } else if (isPlainObject(object)) {
            eachObject(object, (item, key) => {
                object[key] = call(wrapBefore, bind, funct, item, bind);
            });
        }
        return object;
    };
