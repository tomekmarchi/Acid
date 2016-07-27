/*
	Each Methods
	Array
		each,eachSafe,eachRaw,eachwhileFalse,eachWhile,whileLength,eachRight
	Object
		Each
	Number
		Each
*/
//loop through an array of items
var safeModeCall = (safeMode) => {
        if (safeMode) {
            if (safeMode.halt) {
                return False;
            } else if (safeMode.skip) {
                safeMode.skip = false;
                return True;
            }
        }
    },
    mapArray = $.mapArray = function(array, fn, safeMode) {
        var results = [],
            returned;
        eachArray(array, function(item, index, array, length, safe) {
            returned = fn(item, index, array, length, results, safe);
            (hasValue(returned) ? results[index] = returned : False)
        }, safeMode);
        return results;
    },
    filterArray = $.filterArray = function(array, fn, safeMode) {
		var results = [],
            returned;
        eachArray(array, function(item, index, array, length, safe) {
            returned = fn(item, index, array, length, results, safe);
            (hasValue(returned) ? pushArray(results, returned) : False)
        }, safeMode);
        return results;
    },
    mapRaw = $.mapRaw = function(array, fn) {
        for (var returned, length = getLength(array), results = [], i = 0; i < length; i++) {
            returned = fn(array[i], i, array, length, results);
            (hasValue(returned) ? results[i] = returned : False)
			length = getLength(array);
        }
        return results;
    },
    whileGenerator = (mainFunc, optBool) => {
        return function(array, fn, includeLastResult) {
            return mainFunc(array, function(item, index, array, length, results, safeMode) {
				if(!safeMode){
					safeMode=results;
				}
                var result = apply(fn, fn, arguments);
                if (result === optBool) {
                    safeMode.halt = True;
					if(includeLastResult){
	                    return result;
	                }
                } else {
                    return result;
                }
            }, True);
        }
    },
    //loop while the returned result is False
    whileFalse = $.mapWhileFalse = whileGenerator(mapArray, True),
    //each while the check function is True
    mapWhile = $.mapWhile = whileGenerator(mapArray, False),
    //loop while the count is less than the length of the array
    whileLength = $.mapWhileLength = function(array, fn) {
        //an array of results will be returned
        var results = [],
            len = getLength(array),
            i = 0;
        while (i < len) {
            results[i] = fn(array[i], i, array, len, results);
            len = getLength(array);
            i++;
        }
        return results;
    },
    //loop through array backwards aka from the right
    mapArrayFromRight = $.mapRight = function(array, fn, safeMode) {
        safeMode = (safeMode) ? {} : safeMode;
        for (var safeModeResult, returned, results = [], len = getLength(array), i = len - 1; i >= 0; i--) {
            safeModeResult = safeModeCall(safeMode);
            if (safeModeResult) {
                continue;
            } else if (safeModeResult === False) {
                break;
            }
            returned = fn(array[i], i, array, len, results, safeMode);
            (hasValue(returned) ? pushArray(results, returned) : False)
        }
        return results;
    },
    //loop through array backwards aka from the right while true
    mapArrayFromRightWhile = $.mapRightWhile = whileGenerator(mapArrayFromRight, False),
    //loop through based on number
    mapNumber = $.mapNumber = function(start, end, fn) {
        if (!fn) {
            var fn = end,
                end = start,
                start = 0;
        }
        for (var results = [],returned; start < end; start++) {
            //call function get result
			returned = fn(start, end, results);
            (hasValue(returned) ? pushArray(results, returned) : False)
        }
        return results;
    },
    eachArray = $.eachArray = function(array, fn, safeMode) {
        safeMode = (safeMode) ? {} : safeMode;
        for (var safeModeResult, length = getLength(array), i = 0; i < length; i++) {
            safeModeResult = safeModeCall(safeMode);
            if (safeModeResult) {
                continue;
            } else if (safeModeResult === False) {
                break;
            }
            fn(array[i], i, array, length, safeMode);
        }
    },
	//loop while the returned result is False
	eachWhileFalse = $.eachWhileFalse = whileGenerator(eachArray, True),
	//each while the check function is True
	eachWhile = $.eachWhile = whileGenerator(eachArray, False);
