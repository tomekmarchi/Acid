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
var _each_array = function(array, fn) {
        //an array of results will be returned
        var returned,
            a = 0,
            length = array.length,
            results = [];
        for (var i = 0; i < length; i++) {
            returned = fn(array[i], i, length, array);
            if (hasValue(returned)) {
                results[a] = returned;
                a++;
            }
        }
        return results;
    },
    eachRaw = function(array, fn) {
        //an array of results will be returned
        for (var i = 0, length = array.length; i < length; i++) {
            fn(array[i], i, length, array);
        }
    },
    eachDo = function(array, callback, safeIteration) {
        var i = 0;

        if (safeIteration)
            while (i < array.length && (!(i in this) || callback(array[i], i, array) !== false)) ++i;
        else
            while (i < array.length && callback(array[i], i++, array) !== false);

        return array;
    },
    //loop while the returned result is false
    _whileFalse = function(array, fn) {
        //an array of results will be returned
        var result;
        for (var i = 0, results = [], len = array.length; i < len; i++) {
            result = fn(array[i], i, len);
            if (result) {
                break;
            }
            results[i] = result;
        }
        return results;
    },
    //each while the check function is true
    _eachWhile = function(array, fn, check) {
        //an array of results will be returned
        var result;
        for (var i = 0, results = [], len = array.length; i < len; i++) {
            result = fn(array[i], i, len);
            if (!result) {
                break;
            }
            results[i] = result;
        }
        return results;
    },
    //loop while the count is less than the length of the array
    _whileLength = function(array, fn) {
        //an array of results will be returned
        var results = [];
        var i = 0;
        while (i < arr.length) {
            results[i] = fn(array[i], i);
            i++;
        }
        return results;
    },
    //loop through array backwards aka from the right
    eachArrayFromRight = function(array, fn) {
        //an array of results will be returned
        for (var results = [], len = array.length, i = len - 1; i >= 0; i--) {
            results[i] = fn(array[i], i, len);
        }
        return results;
    },
    //loop through based on number
    _each_number = function(start, end, fn) {
        if (!fn) {
            var fn = end,
                end = start,
                start = 0;
        }
        var results = [];
        for (; start < end; start++) {
            //call function get result
            results[start] = fn(start);
        }
        return results;
    };

//loop through array using for loop cached
$.eachArray = _each_array;

//loop through array using for loop cached but without returning data
$.eachRaw = eachRaw;

//loop through array backwards aka from the right
$.eachRight = eachArrayFromRight;

//loop through array using for loop cached
$.eachDo = _each_array;

//each while the check function is true
$.eachWhile = _eachWhile;

//loop while the returned result is false
$.eachWhileFalse = _whileFalse;

//loop while the count is less than the length of the array
$.eachWhileLength = _whileLength;
