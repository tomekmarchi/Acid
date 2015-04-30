/*
Each Methods
Array
	Each,EachDo,whileTrue,whileFalse,eachWhile,whileLength,eachRight
Object
	Each
Number
	Each
*/

//loop through an array of items
var _each_array = function(array, fn) {
    //an array of results will be returned
    for (var i = 0, results = [], len = array.length; i < len; i++) {
        results[i] = fn(array[i], i);
    }
    return results;
};

  /**
   * @callback Array#each~eachCallback
   * @param {*} value - The current element being processed.
   * @param {number} index - The index of the current element being processed.
   * @param {Array} array - The array {@link Array#each|`.each()`} was called on.
   */
  /**
   * Invokes a callback function on each element in the array.
   *
   * A generic iterator method similar to [`.forEach()`](http://goo.gl/n6z5Jz) but with the following differences:
   *
   * 1. `this` always refers to the current element in the iteration (the `value` argument to the callback).
   * 2. Returning `false` in the callback will cancel the iteration (similar to a `break` statement).
   * 3. The array is returned to allow for function chaining.
   * 4. The callback __is__ invoked for indexes that have been deleted or elided unless `safeIteration` is `true`.
   *
   * @function Array#each
   * @param {Array#each~eachCallback} callback - A function to be executed on each element in the array.
   * @param {boolean} [safeIteration=false] - When `true`, the callback will not be invoked
   *     for indexes that have been deleted or elided (are undefined).
   * @returns {Array} The array this method was called on.
   *
   * @example
   * ['a', 'b', 'c'].each(console.log.bind(console));
   * // -> 'a' 0 ['a', 'b', 'c']
   * // -> 'b' 1 ['a', 'b', 'c']
   * // -> 'c' 2 ['a', 'b', 'c']
   * // -> ['a', 'b', 'c']
   *
   * ['a', 'b', 'c'].each(function(value, index) {
   *   console.log(value);
   *   if (index === 1) return false;
   * });
   * // -> 'a'
   * // -> 'b'
   * // -> ['a', 'b', 'c']
   *
   * [[1, 2], [3, 4, 5]].each(Array.prototype.pop);
   * // -> [[1], [3, 4]]
   *
   * new Array(1).each(console.log.bind(console));
   * // -> undefined 0 ['a', 'b', 'c']
   * // -> [undefined]
   *
   * new Array(1).each(console.log.bind(console), true);
   * // -> [undefined]
   */
var eachDo = function(array, callback, safeIteration) {
    var i = 0;

    if (safeIteration)
        while (i < array.length && (!(i in this) || callback(array[i], i, array) !== false))++i;
    else
        while (i < array.length && callback(array[i], i++, array) !== false);

    return array;
};

//loop while the returned result is true
var _whileTrue = function(array, fn) {
    //an array of results will be returned
    for (var i = 0, results = [], len = array.length; i < len; i++) {
        if (!(results[i] = fn(array[i], i))) {
            break;
        }
    }
    return results;
};

//loop while the returned result is false
var _whileFalse = function(array, fn) {
    //an array of results will be returned
    for (var i = 0, results = [], len = array.length; i < len; i++) {
        if (results[i] = fn(array[i], i)) {
            break;
        }
    }
    return results;
};

//each while the check function is true
var _eachWhile = function(array, fn, check) {
    //an array of results will be returned
    for (var i = 0, results = [], len = array.length; i < len; i++) {
        if (!check(results[i] = fn(array[i], i))) {
            break;
        }
    }
    return results;
};

//loop while the count is less than the length of the array
var _whileLength = function(array, fn) {
    //an array of results will be returned
    var results = [];
    var i = 0;
    while (i < arr.length) {
        results[i] = fn(array[i], i);
        i++;
    }
    return results;
};

//loop through array backwards aka from the right
var eachArrayFromRight = function(array, fn) {
    //an array of results will be returned
    for (var results = [], len = array.length, i = len - 1; i >= 0; i--) {
        results[i] = fn(array[i], i);
    }
    return results;
};

//loop through an object
var _each_object = function(object, fn) {
    //an object with matching keys with results will be returned
    var results = {};
    for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
        //object currect key
        var key = keys[i];
        //call function get result
        results[key] = fn(object[key], key, object);
    }
    return results;
};
//loop through based on number
var _each_number = function(start, end, fn) {
    if (!fn) {
        var fn = end;
        var end = start;
        var start = 0;
    }
    var results = [];
    for (; start < end; start++) {
        //call function get result
        results[start] = fn(start);
    }
    return results;
};