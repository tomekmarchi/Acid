/*
Each Methods
Array
	each,eachDo,eachRaw,eachwhileFalse,eachWhile,whileLength,eachRight
Object
	Each
Number
	Each
*/

//loop through an array of items
var eachArray = function(array, fn) {
        var returned,
            a = 0,
            length = getLength(array),
            results = [];
        for (var i = 0; i < length; i++) {
            returned = fn(array[i], i, length, array, results);
            if (hasValue(returned)) {
                results[a] = returned;
                a++;
            }
        }
        return results;
    },
    eachRaw = function(array, fn) {
        var returned,
            a = 0,
            length = getLength(array),
            results = [];
        for (var i = 0; i < getLength(array); i++) {
            returned = fn(array[i], i, length, array, results);
            if (hasValue(returned)) {
                results[a] = returned;
                a++;
            }
        }
        return results;
    },
    eachDo = function(array, callback, safeIteration) {
        var i = 0;

        if (safeIteration)
            while (i < getLength(array) && (!(i in this) || callback(array[i], i, array) !== false)) ++i;
        else
            while (i < getLength(array) && callback(array[i], i++, array) !== false);

        return array;
    },
    //loop while the returned result is false
    whileFalse = function(array, fn) {
        //an array of results will be returned
        var result;
        for (var i = 0, results = [], len = getLength(array); i < len; i++) {
            result = fn(array[i], i, len);
            if (result) {
                break;
            }
            results[i] = result;
        }
        return results;
    },
    //each while the check function is true
    eachWhile = function(array, fn, check) {
        //an array of results will be returned
        var result;
        for (var i = 0, results = [], len = getLength(array); i < len; i++) {
            result = fn(array[i], i, len, array, results);
            if (!result) {
                break;
            }
            results[i] = result;
        }
        return results;
    },
    //loop while the count is less than the length of the array
    whileLength = function(array, fn) {
        //an array of results will be returned
        var results = [],
            len = getLength(array),
            i = 0;
        while (i < len) {
            results[i] = fn(array[i], i, len, array, results);
            len = getLength(array);
            i++;
        }
        return results;
    },
    //loop through array backwards aka from the right
    eachArrayFromRight = function(array, fn) {
        //an array of results will be returned
        for (var results = [], len = getLength(array), i = len - 1; i >= 0; i--) {
            results[i] = fn(array[i], i, len, array, results);
        }
        return results;
    },
    //loop through array backwards aka from the right
    eachArrayFromRightWhile = function(array, fn) {
        //an array of results will be returned
        for (var results = [], len = getLength(array), i = len - 1; i >= 0; i--) {
            result = fn(array[i], i, len, array, results);
            if (!result) {
                break;
            }
            results[i] = result;
        }
        return results;
    },
    //loop through based on number
    eachNumber = function(start, end, fn) {
        if (!fn) {
            var fn = end,
                end = start,
                start = 0;
        }
        var results = [];
        for (; start < end; start++) {
            //call function get result
            results[start] = fn(start,end);
        }
        return results;
    };

$.eachArray = eachArray;
$.eachRaw = eachRaw;
$.eachRight = eachArrayFromRight;
$.eachDo = eachDo;
$.eachWhile = eachWhile;
$.eachWhileFalse = whileFalse;
$.eachRightWhile = eachArrayFromRightWhile;
$.whileLength = whileLength;
