//loop through an object
var mapObject = $.mapObject = (object, fn) => {
        var results = {};
        eachObject(object, function(item,key) {
            results[key] = apply(fn,arguments);
        });
        return results;
    },
	filterObject = $.filterObject = (object, fn) => {
        var results = {},result;
        eachObject(object, function(item,key) {
			result = apply(fn,arguments);
			if(hasValue(result)){
				results[key] = result;
			}
        });
        return results;
    },
    eachObject = $.eachObject = (object, fn) => {
        eachArray(objectKeys(object), (key, index, array, len) => {
            fn(object[key], key, object, len);
        });
    },
    forEach = $.forEach = (array, funct) => {
        var results = [],
            result;
        array.forEach((item, key, array) => {
            result = funct(item, key, array);
            if (hasValue(result)) {
                pushArray(results, result);
            }
        });
        return results;
    },
    mapProperty = $.mapProperty = (array, funct) => {
        var object = {};
        eachArray(getOwnPropertyNames(array), (item, key, length) => {
            object[item] = funct(array[item], item, array, length, object);
        });
        return object;
    },
    forIn = $.forIn = (object, fn) => {
        var results = {};
        for (var key in object) {
            newObject[property] = fn(object[key], key, object, results);
        }
        return results;
    };
