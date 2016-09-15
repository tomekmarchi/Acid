/*
	Each Methods
	Array
		each,eachwhileFalse,eachWhile,whileLength,eachRight
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
	generateMap = (method) =>{
		return function(array, fn, safeMode) {
			var results = [],
				returned;
			eachArray(array, function(item, index, array, length, safe) {
				returned = fn(item, index, array, length, results, safe);
				(hasValue(returned) ? results[index] = returned : False)
			}, safeMode);
			return results;
		};
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
    //loop while the count is less than the length of the array
    whileLength = $.mapWhileLength = function(array, fn) {
        //an array of results will be returned
        var results = [],
            length = getLength(array),
            index = 0;
        while (length) {
            results[index] = fn(array[index], index, array, length, results);
            length = getLength(array);
            index++;
        }
        return results;
    },
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
    eachArrayRight = $.eachArrayRight = function(array, fn, safeMode) {
        safeMode = (safeMode) ? {} : safeMode;
        for (var safeModeResult, length = getLength(array), i = length - 1; i >= 0; i--) {
            safeModeResult = safeModeCall(safeMode);
            if (safeModeResult) {
                continue;
            } else if (safeModeResult === False) {
                break;
            }
            fn(array[i], i, array, length, safeMode);
        }
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
	mapArray = $.mapArray = generateMap(eachArray),
	mapArrayRight = $.mapArrayRight = generateMap(eachArrayRight),
	//loop while the returned result is False
	eachWhileFalse = $.eachWhileFalse = whileGenerator(eachArray, True),
	//each while the check function is True
	eachWhile = $.eachWhile = whileGenerator(eachArray, False),
	//loop while the returned result is False
	whileFalse = $.mapWhileFalse = whileGenerator(mapArray, True),
	//loop through array backwards aka from the right while true
	mapArrayRightWhile = $.mapArrayRightWhile = whileGenerator(mapArrayRight, False),
	//each while the check function is True
	mapWhile = $.mapWhile = whileGenerator(mapArray, False);
