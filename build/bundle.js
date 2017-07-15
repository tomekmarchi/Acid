(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.$ = factory());
}(this, (function() {
  'use strict';

  let cacheSuper;
  /**
   * Acid Object accessible through $ default method is model.
   *
   * @function $
   * @returns {*} The return value of the superMethod. The default superMethod is model.
   *
   * @example
   * $('modelName', {example: 1});
   * // -> {example: 1}
   */
  const $ = (...args) => {
    return cacheSuper(...args);
  };
  /**
   * Re-assigns the main method for $.
   *
   * @function superMethod
   * @memberof $
   * @param {Function} method - The function that will become the main object's method.
   * @returns {undefined} - Returns nothing.
   *
   * @example
   * superMethod($.get);
   * // -> $('flow', $);
   * // -> $.flow
   */
  const superMethod = (method) => {
    cacheSuper = method;
  };
  $.superMethod = superMethod;

  const objectNative$1 = Object;
  const keys = objectNative$1.keys;
  const is = objectNative$1.is;
  const assign = objectNative$1.assign;
  const getOwnPropertyDescriptor = objectNative$1.getOwnPropertyDescriptor;
  const defineProperty = objectNative$1.defineProperty;
  const getOwnPropertyNames = objectNative$1.getOwnPropertyNames;
  const objectSize = (thisObject) => {
    return keys(thisObject).length;
  };
  assign($, {
    keys,
    is,
    assign,
    getOwnPropertyDescriptor,
    defineProperty,
    getOwnPropertyNames,
    objectSize
  });

  /**
    * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
    *
    * @function asyncEach
    * @type {Function}
    * @async
    * @param {Array} callingArray - Array of async functions that will be looped through.
    * Functions are given the supplied object, index, the calling array, and the array length.
    * @param {*} object - The first argument given to each function.
    * @returns {Object} The originally given array.
    *
    * @example
    * asyncEach([async (item, index) =>{
    *  console.log(item, index);
    * }, async (item) =>{
    *  console.log(item, index);
    * }], {a:1});
    * // {a:1} 0
    * // {a:1} 1
  */
  const asyncEach = async (callingArray, object) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      const item = callingArray[index];
      await item(object, index, callingArray, arrayLength);
    }
    return callingArray;
  };
  assign($, {
    asyncEach,
  });

  /**
    * Iterates through the given array.
    *
    * @function eachArray
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @example
    * eachArray([1, 2, 3], (item) => {
    *   console.log(item);
    * });
    * // => [1, 2, 3]
  */
  const eachArray = (callingArray, iteratee) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      iteratee(callingArray[index], index, callingArray, arrayLength);
    }
    return callingArray;
  };
  /**
    * Iterates through the given array in reverse.
    *
    * @function eachArrayRight
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @example
    * eachArrayRight([1, 2, 3], (item) => {
    *   console.log(item);
    * });
    * // => [3, 2, 1]
  */
  const eachArrayRight = (callingArray, iteratee) => {
    const arrayLength = callingArray.length;
    for (let index = arrayLength - 1; index >= 0; index--) {
      iteratee(callingArray[index], index, callingArray, arrayLength);
    }
    return callingArray;
  };
  /**
    * Iterates through the given array while the iteratee returns true.
    *
    * @function whileArray
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
    * @returns {boolean} Returns the true if all values returned are true or false if one value returns false.
    *
    * @example
    * whileArray([true, true, false], (item) => {
    *   console.log(item);
    *   return item;
    * });
    * //true
    * //true
    * // => false
  */
  const whileArray = (callingArray, iteratee) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      if (iteratee(callingArray[index], index, callingArray, arrayLength) === false) {
        return false;
      }
    }
    return true;
  };
  /**
    * Iterates through the calling array and creates an array with all elements that pass the test implemented by the iteratee.
    *
    * @function filterArray
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created object, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array with properties that passed the test.
    *
    * @example
    * filterArray([false, true, true], (item) => {
    *   return item;
    * });
    * // => [true, true]
  */
  const filterArray = (callingArray, iteratee, results = []) => {
    eachArray(callingArray, (item, index, arrayOriginal, arrayLength) => {
      if (iteratee(item, index, results, arrayOriginal, arrayLength) === true) {
        results.push(item);
      }
    });
    return results;
  };
  const generateMap = (method) => {
    return (callingArray, iteratee, results = []) => {
      method(callingArray, (item, index, arrayOriginal, arrayLength) => {
        results[index] = iteratee(item, index, results, arrayOriginal, arrayLength);
      });
      return results;
    };
  };
  /**
    * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
    *
    * @function mapArray
    * @category Utility
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array of the same calling array's type.
    *
    * @example
    * mapArray({a: 1, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {a: 2, b: 4, c: 6}
  */
  const mapArray = generateMap(eachArray);
  /**
    * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
    *
    * @function mapArrayRight
    * @category Utility
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array of the same calling array's type.
    *
    * @example
    * mapArrayRight({a: 1, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {a: 2, b: 4, c: 6}
  */
  const mapArrayRight = generateMap(eachArrayRight);
  /**
    * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
    *
    * @function compactMapArray
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array with mapped properties that are not null or undefined.
    *
    * @example
    * compactMapArray([0, 2, 3], (item) => {
    *   return item * 2;
    * });
    * // => [4, 6]
  */
  const compactMapArray = (callingArray, iteratee, results = []) => {
    eachArray(callingArray, (item, index, arrayOriginal, arrayLength) => {
      const returned = iteratee(item, index, results, arrayOriginal, arrayLength);
      if (hasValue(returned)) {
        results.push(returned);
      }
    });
    return results;
  };
  /**
    * Iterates through the given and creates an object with all elements that pass the test implemented by the iteratee.
    *
    * @function mapWhile
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Array} An array with properties that passed the test.
    *
    * @example
    * mapWhile({a: false, b: true, c: true}, (item) => {
    *   return true;
    * });
    * // => {b: true, c: true}
  */
  const mapWhile = (callingArray, iteratee, results = []) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      const returned = iteratee(callingArray[index], index, results, callingArray, arrayLength);
      if (!returned) {
        break;
      }
      results[index] = returned;
    }
    return results;
  };
  assign($, {
    compactMapArray,
    eachArray,
    eachArrayRight,
    filterArray,
    mapArray,
    mapArrayRight,
    mapWhile,
    whileArray,
  });

  const objectStringGenerate = (objectName) => {
    return `[object ${objectName}]`;
  };
  const isUndefined = function(obj) {
    return obj === undefined;
  };
  const isNull = (obj) => {
    return obj === null;
  };
  const hasValue = (item) => {
    return !isUndefined(item) && !isNull(item);
  };
  const isSameObjectGenerator = (type) => {
    return (obj) => {
      return (hasValue(obj)) ? obj.toString() === type : false;
    };
  };
  const isConstructor = (nativeObject) => {
    return (obj) => {
      return (hasValue(obj)) ? obj.constructor === nativeObject : false;
    };
  };
  const decimalCheck = /\.|\+/;
  const isDecimal = (string) => {
    return string.toString().match(decimalCheck);
  };
  const isArray = Array.isArray;
  const isString = isConstructor(String);
  const isNumber = isConstructor(Number);
  const isPlainObject = (obj) => {
    if (hasValue(obj)) {
      return obj.constructor.toString().trim()
          .slice(9, 16) === 'Object(';
    }
    return false;
  };
  const isFunction = (obj) => {
    return (hasValue(obj)) ? obj instanceof Function : false;
  };
  const has = (string, ...search) => {
    return string.includes(...search);
  };
  const hasLength = (obj) => {
    return Boolean(obj.length);
  };
  const isEmpty = (obj) => {
    if (isString(obj) || isArray(obj)) {
      return !hasLength(obj);
    } else if (isPlainObject(obj)) {
      return !objectSize(obj);
    }
    return !hasValue(obj);
  };
  const regexGenerator = (regexType) => {
    return (item) => {
      return (hasValue(item)) ? regexType.test(item) : false;
    };
  };
  const isFileCSS = regexGenerator(/\.css$/);
  const isFileJSON = regexGenerator(/\.json$/);
  const isFileJS = regexGenerator(/\.js$/);

  const getExtensionRegex = /\.([0-9a-z]+)/;
  const getFileExtension = (string) => {
    return string.match(getExtensionRegex);
  };
  const nativeObjectNames = ['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap',
    'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array',
    'Uint8Array', 'Uint8ClampedArray',
    'Uint16Array', 'Uint32Array'];
  eachArray(nativeObjectNames, (item) => {
    $[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
  });
  assign($, {
    getFileExtension,
    has,
    hasLength,
    hasValue,
    isArray,
    isDecimal,
    isEmpty,
    isFileCSS,
    isFileJS,
    isFileJSON,
    isFunction,
    isNull,
    isNumber,
    isPlainObject,
    isString,
    isUndefined,
  });

  /**
    * Ensures the object is an array. If not wraps in array.
    *
    * @function ensureArray
    * @type {Function}
    * @param {*} object - Data to be checked.
    * @returns {Array} - Returns an array.
    *
    * @example
    * ensureArray('Hello');
    * //=> ['Hello']
    *
    * ensureArray({a:1, b:2})
    * //=> [{a:1, b:2}]
  */
  const ensureArray = (object) => {
    return (isArray(object)) ? object : [object];
  };
  assign($, {
    ensureArray
  });

  /**
    * Flattens an array up to the provided level.
    *
    * @function flatten
    * @type {Function}
    * @param {Array} array - Array to flatten.
    * @param {number} [level = 1] - Number which determines how deep the array nest can be.
    * @returns {Array} - Returns an array.
    *
    * @example
    * flatten([1, [2, [3, [4]], 5]]);
    *  // => [1, 2, [3, [4]], 5]
  */
  const flatten = (arrayArg, level = 1) => {
    let array = arrayArg;
    for (let i = 0; i < level; i++) {
      array = array.reduce((previousValue, currentValue) => {
        return previousValue.concat(ensureArray(currentValue));
      }, []);
    }
    return array;
  };
  /**
    * Flattens an array to a single level.
    *
    * @function flattenDeep
    * @type {Function}
    * @param {Array} array - Array to flatten.
    * @returns {Array} - Returns a completely flattened array.
    *
    * @example
    * flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]
  */
  const flattenDeep = (array) => {
    return array.reduce((previousValue, currentValue) => {
      return previousValue.concat((isArray(currentValue)) ? flatten(currentValue) : currentValue);
    }, []);
  };
  assign($, {
    flatten,
    flattenDeep,
  });

  /**
    * Removes all occurrences of the passed in items from the array and returns the array. This mutates the given array. Clone the array if you desire to avoid mutation.
    *
    * @function remove
    * @param {Array} array - Array to be mutated.
    * @param {...(string|Array)} removeThese - Items to remove from the array.
    * @returns {Array} The array this method was called on.
    *
    * @example
    * remove([1, 2, 3, 3, 4, 3, 5], 1);
    * // -> [2, 3, 3, 4, 3, 5]
    *
    * remove([3, 3, 4, 5], 3, 4);
    * // -> [5]
  */
  const remove = (array, ...removeThese) => {
    let arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      const item = array[index];
      if (removeThese.includes(item)) {
        array.splice(index, 1);
        index--;
        arrayLength--;
      }
    }
    return array;
  };
  /**
    * Removes items that pass the method's test. This mutates the given array. Clone the array if you desire to avoid mutation.
    *
    * @function remove
    * @param {Array} array - Array to be mutated.
    * @param {Function} method - Function used to check object. Return true to remove the value.
    * @returns {Array} The array this method was called on.
    *
    * @example
    * remove([1, 2, 3, 3, 4, 3, 5], (item) => { return Boolean(item % 2);}));
    * // -> [2, 4]
  */
  const removeBy = (array, method) => {
    let arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      const item = array[index];
      if (method(item, index)) {
        array.splice(index, 1);
        index--;
        arrayLength--;
      }
    }
    return array;
  };
  assign($, {
    remove,
    removeBy
  });

  /**
    * Chunks an array according to a user defined number.
    *
    * @function chunk
    * @type {Function}
    * @param {Array} array - Array to be chunked.
    * @param {number} size - Number which determines the size of each chunk.
    * @returns {Array} - A chunked version of the source array.
    *
    * @example
    *  chunk([1,2,3], 1);
    * //=> [[1],[2],[3]]
  */
  const chunk = (array, size = 1) => {
    const chunked = [];
    let index = 0;
    array.forEach((item, key) => {
      if (!(key % size)) {
        chunked.push([]);
        if (key) {
          index++;
        }
      }
      chunked[index].push(item);
    });
    return chunked;
  };
  assign($, {
    chunk,
  });

  /**
    * Extracts all items in array except the first and last item.
    *
    * @function rest
    * @type {Function}
    * @param {Array} array - Array to be sliced.
    * @returns {Array} - Returns the aggregated array.
    *
    * @example
    * rest([1, 2, 3, 4, 5]);
    * // => [2, 3, 4, 5]
  */
  const rest = (array) => {
    return array.slice(1, array.length - 1);
  };
  assign($, {
    rest
  });

  /**
    * Clears the values out of an array.
    *
    * @function clear
    * @type {Function}
    * @param {Array} array - Takes an array to be emptied.
    * @returns {Array} The originally given array.
    *
    * @example
    * clear([1,'B', Cat]);
    * //=> []
  */
  const clear = (array) => {
    array.length = 0;
    return array;
  };
  assign($, {
    clear,
  });

  /**
    * Get the item at the supplied index starting at the end of the array.
    *
    * @function right
    * @type {Function}
    * @param {Array} array - Array to be sliced.
    * @returns {*} - Returns the object at the evaluated position.
    *
    * @example
    * right([1, 2, 3, 4, 5] , 1);
    * // => 4
  */
  const right = (array, amount) => {
    return array[array.length - 1 - amount];
  };
  assign($, {
    right
  });

  /**
    * Clears the values out of an array.
    *
    * @function cloneArray
    * @type {Function}
    * @param {Array} array - Takes an array to be cloned.
    * @returns {Array} The originally given array.
    *
    * @example
    * cloneArray([1,'B', Cat]);
    * //=> [1, 'B', Cat]
  */
  const cloneArray = (array) => {
    return array.slice();
  };
  assign($, {
    cloneArray
  });

  const mathNative = Math;
  const floorMethod = mathNative.floor;
  const randomMethod = mathNative.random;
  /**
    * Adds two numbers.
    *
    * @function add
    * @type {Function}
    * @param {number} number - First number.
    * @param {number} value - Second number.
    * @returns {number} - Returns the sum of the arguments.
    *
    * @example
    * add(1, 1);
    * // => 2
  */
  const add = (number, value) => {
    return number + value;
  };
  /**
    * Subtracts two numbers.
    *
    * @function minus
    * @type {Function}
    * @param {number} number - First number.
    * @param {number} value - Second number.
    * @returns {number} - Returns the difference of the arguments.
    *
    * @example
    * minus(1, 1);
    * // => 0
  */
  const minus = (number, value) => {
    return number - value;
  };
  /**
    * Divides two numbers.
    *
    * @function divide
    * @type {Function}
    * @param {number} number - First number.
    * @param {number} value - Second number.
    * @returns {number} - Returns the quotient of the arguments.
    *
    * @example
    * divide(10, 5);
    * // => 2
  */
  const divide = (number, value) => {
    return number / value;
  };
  /**
    * Multiplies two numbers.
    *
    * @function multiply
    * @type {Function}
    * @param {number} number - First number.
    * @param {number} value - Second number.
    * @returns {number} - Returns the product of the arguments.
    *
    * @example
    * multiply(10, 5);
    * // => 50
  */
  const multiply = (number, value) => {
    return number * value;
  };
  /**
    *  Extracts the remainder between two numbers.
    *
    * @function remainder
    * @type {Function}
    * @param {number} number - First number.
    * @param {number} value - Second number.
    * @returns {number} - Returns the remainder of the arguments.
    *
    * @example
    * remainder(10, 6);
    * // => 4
  */
  const remainder = (number, value) => {
    return number % value;
  };
  /**
    *  Increments a number.
    *
    * @function increment
    * @type {Function}
    * @param {number} number - First number.
    * @returns {number} - Returns an incremented version of the number.
    *
    * @example
    * increment(10);
    * // => 11
  */
  const increment = (number) => {
    return number + 1;
  };
  /**
    *  Decrements a number.
    *
    * @function deduct
    * @type {Function}
    * @param {number} number - First number.
    * @returns {number} - Returns a decremented version of the number.
    *
    * @example
    * deduct(10);
    * // => 9
  */
  const deduct = (number) => {
    return number - 1;
  };
  /**
    *  Produces a random number between min (included) and max (excluded).
    *
    * @function randomArbitrary
    * @type {Function}
    * @param {number} max - Establishes highest possible value for the random number.
    * @param {number} [min = 0] - Establishes lowest possible value for the random number.
    * @returns {number} - Returns random integer between the max and min range.
    *
    * @example
    * randomArbitrary(10);
    * // => 9.1
  */
  const randomArbitrary = (max, min = 0) => {
    return randomMethod() * (max - min) + min;
  };
  /**
    *  Produces a random integer between min (included) and max (excluded).
    *
    * @function randomInt
    * @type {Function}
    * @param {number} max - Establishes highest possible value for the random number.
    * @param {number} [min = 0] - Establishes lowest possible value for the random number.
    * @returns {number} - Returns random integer between the max and min range.
    *
    * @example
    * randomInt(10);
    * // => 9
  */
  const randomInt = (max, min = 0) => {
    return floorMethod(randomMethod() * (max - min)) + min;
  };
  assign($, {
    add,
    deduct,
    divide,
    increment,
    minus,
    multiply,
    randomArbitrary,
    randomInt,
    remainder,
  });

  /**
    * Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
    *
    * @function sample
    * @param {Array} array - Array to pull sample(s).
    * @returns {Array} An array of randomly pulled samples.
    *
    * @example
    * sample([1, 2, 3, 4] , 2);
    * // => [1, 3]
  */
  const sample = (array, amount = 1) => {
    if (amount === 1) {
      return array[randomInt(array.length - 1, 0)];
    }
    const sampleArray = [];
    const used = {};
    let count = 0;
    let index;
    while (count < amount) {
      index = randomInt(array.length - 1, 0);
      if (!used[index]) {
        sampleArray.push(sampleArray[index]);
        used[index] = true;
        count++;
      }
    }
    return sampleArray;
  };
  assign($, {
    sample
  });

  /**
    * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
    *
    * @function compact
    * @type {Function}
    * @param {Array} array - Array to be compacted.
    * @returns {Array} The new array of filtered values.
    *
    * @example
    * compact([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
    * //=> [1, 'B', Cat]
  */
  const compact = (array) => {
    return array.filter((item) => {
      return isString(item) && !item.length ? false : item;
    });
  };
  assign($, {
    compact,
  });

  const arrayNative = Array;
  const toArray = arrayNative.from;
  assign($, {
    toArray,
  });

  /**
    * Shuffle an array and return a new array.
    *
    * @function shuffle
    * @param {Array} array - Array to be shuffled.
    * @returns {Array} An array with the shuffled results.
    *
    * @example
    * shuffle([1, 2, 3, 4]);
    * // -> [3, 4, 2, 1]
  */
  const shuffle = (array, amount = array.length) => {
    const shuffleArray = toArray(array);
    let count = 0;
    let index;
    let value;
    while (count < amount) {
      index = randomInt(shuffleArray.length - 1, 0);
      value = shuffleArray[count];
      shuffleArray[count] = shuffleArray[index];
      shuffleArray[index] = value;
      count++;
    }
    return shuffleArray;
  };
  assign($, {
    shuffle
  });

  /**
    * Takes all but the last item in the array.
    *
    * @function initial
    * @type {Function}
    * @param {Array} array - Array to have items extracted from.
    * @returns {Array} - Returns a completely flattened array.
    *
    * @example
    * initial([1, 2, 3, 4, 5]);
    * // => [1, 2, 3, 4]
  */
  const initial = (array) => {
    return array.slice(0, array.length - 1);
  };
  assign($, {
    initial
  });

  const mathNativeMin = Math.min;
  /**
     * Plucks the smallest value from an array.
     *
     * @function smallest
     * @type {Function}
     * @param {Array} array - Array from which smallest number is taken.
     * @returns {number} The smallest number.
     *
     * @example
     * smallest([1,2,3]);
     * // => 1
   */
  const smallest = (array) => {
    return mathNativeMin(...array);
  };
  assign($, {
    smallest
  });

  const rangeUp = (start, end, increment) => {
    const rangeArray = [];
    let position = start;
    while (position < end) {
      rangeArray.push(position);
      position += increment;
    }
    return rangeArray;
  };
  const rangeDown = (start, end, incrementArg) => {
    const increment = (incrementArg < 0) ? incrementArg * -1 : incrementArg;
    const rangeArray = [];
    let position = start;
    while (position < end) {
      rangeArray.push(position);
      position -= increment;
    }
    return rangeArray;
  };
  /**
    *
    *
    * @type {Function} range
    * @param {Number} start - Value which determines the start of the range.
    * @param {Number} end - Value which determines the end of the range.
    * @param {Number} increment - Value which determines the rate of incrementation.
    * @returns {Array}
    *
    * @example
    * range([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
    * //=> [1, 'B', Cat]
  */
  const range = (start, end, increment = 1) => {
    if (start < end) {
      return rangeUp(start, end, increment);
    } else {
      return rangeDown(start, end, increment);
    }
  };
  /**
    *
    *
    * @type {Function} rangeRight
    * @param {Number} start - Value which determines the start of the range.
    * @param {Number} end - Value which determines the end of the range.
    * @param {Number} increment - Value which determines the rate of incrementation.
    * @returns {Array}
    *
    * @example
    * rangeRight([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
    * //=> [1, 'B', Cat]
  */
  const rangeRight = (start, end, increment = 1) => {
    return rangeDown(end, start, increment);
  };
  assign($, {
    range,
    rangeRight
  });

  /**
   * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
   * of the array and the input array(s).
   *
   * @function intersect
   * @param {Array} array - Array to compare other arrays to.
   * @param {...Array} arrays - A variable number of arrays.
   * @returns {Array} The new array of unique values shared by all of the arrays.
   *
   * @example
   * intersect([1, 2, 3], [2, 3, 4]);
   * // -> [2, 3]
   *
   * intersect([1, 2, 3], [101, 2, 50, 1], [2, 1]);
   * // -> [1, 2]
   */
  const intersect = (array, ...arrays) => {
    return compactMapArray(array, (item) => {
      const shouldReturn = whileArray(arrays, (otherItem) => {
        return otherItem.includes(item);
      });
      if (shouldReturn) {
        return item;
      }
    });
  };
  assign($, {
    intersect
  });

  /**
     * Perform alphabetical sort on a collection with the provided key name. Mutates the array.
     *
     * @function sortAlphabetical
     * @type {Function}
     * @param {Array} array - Array to be sorted.
     * @returns {Array} The sorted array.
     *
     * @example
     * sortAlphabetical([1,2,3]);
     * // => 1
   */
  const sortAlphabetical = (collection, key) => {
    return collection.sort((current, next) => {
      const currentKey = current[key];
      const nextKey = next[key];
      if (currentKey < nextKey) {
        return -1;
      } else if (currentKey > nextKey) {
        return 1;
      }
      return 0;
    });
  };
  assign($, {
    sortAlphabetical
  });

  /**
    * Checks for differences between arrays, then creates an array based on those differences.
    *
    * @function difference
    * @type {Function}
    * @param {Array} array - Source array.
    * @param {Array} compare - Array source array is compared against.
    * @returns {Array} An array which contains the differences between the source and compare array.
    *
    * @example
    * compact([1, 2, 3], [1, 2]);
    * //=> [3]
  */
  const difference = (array, compare) => {
    return compactMapArray(array, (item) => {
      if (!compare.includes(item)) {
        return item;
      }
    });
  };
  assign($, {
    difference
  });

  /**
    * Removes all items from an array after a specified index.
    *
    * @function drop
    * @type {Function}
    * @param {Array} array - Source array.
    * @param {number} amount - Amount of items to drop from the array.
    * @param {number} [upTo = array.length] - Index to stop at.
    * @returns {Array} An array with all values removed after a user defined index.
    *
    * @example
    * drop([1, 2, 3], 1);
    * //=> [2, 3]
  */
  const drop = (array, amount, upTo = array.length) => {
    return array.splice(amount, upTo);
  };
  /**
    * Removes all items from an array before a specified index.
    *
    * @function dropRight
    * @type {Function}
    * @param {Array} array - Source array.
    * @param {number} amount - Amount of items to drop from the array.
    * @param {number} [upTo = array.length] - Index to stop at.
    * @returns {Array} An array with all values removed before a user defined index.
    *
    * @example
    * dropRight([1, 2, 3], 1);
    * //=> [1, 2]
  */
  const dropRight = (array, amount, upTo = array.length) => {
    return drop(array, 0, upTo - amount);
  };
  assign($, {
    drop,
    dropRight
  });

  /**
     * Performs a shallow strict comparison between two objects.
     *
     * @function isMatchArray
     * @type {Function}
     * @param {Array} source - Source object.
     * @param {Array} compareArray - Object to compare to source.
     * @returns {boolean} Returns the true or false.
     *
     * @example
     * isMatchArray([1, 2, 3], [1, 2, 3]);
     * // => true
   */
  const isMatchArray = (source, compareArray) => {
    if (compareArray.length === source.length) {
      return whileArray(source, (item, index) => {
        return compareArray[index] !== item;
      });
    }
    return false;
  };
  assign($, {
    isMatchArray,
  });

  /**
     * Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
     *
     * @function sortedIndex
     * @type {Function}
     * @param {Array} array - Array to be sorted.
     * @returns {Array} The sorted array.
     *
     * @example
     * sortedIndex([1,2,3]);
     * // => 1
   */
  const sortedIndex = (array, n) => {
    let min = 0;
    whileArray(array, (item, index) => {
      if (n > item) {
        min = index;
      } else {
        return false;
      }
      return true;
    });
    if (min > 0) {
      min = min + 1;
    }
    return min;
  };
  assign($, {
    sortedIndex
  });

  const mathNativeMax = Math.max;
  /**
    * Plucks the largest value from an array.
    *
    * @function largest
    * @type {Function}
    * @param {Array} array - Array from which largest number is taken.
    * @returns {number} The largest number.
    *
    * @example
    * largest([1,2,3]);
    * // => 3
  */
  const largest = (array) => {
    return mathNativeMax(...array);
  };
  assign($, {
    largest
  });

  /**
    * Reduces the values in an array into a single number.
    *
    * @function sum
    * @type {Function}
    * @param {Array} array - Array to be reduced.
    * @returns {number} - Returns a single value.
    *
    * @example
    * sum([1, 2, 3, 4]);
    * // => 10
  */
  const sum = (array) => {
    return array.reduce((a, b) => {
      return a + b;
    }, 0);
  };
  assign($, {
    sum
  });

  /**
    * Asynchronously Iterates through the given array. Each async function is awaited as to ensure synchronous order.
    *
    * @function eachAsync
    * @type {Function}
    * @async
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @example
    * eachAsync([3,4], async (item, index) =>{
    *  console.log(item, index);
    * });
    * // 3 0
    * // 4 1
  */
  const eachAsync = async (callingArray, iteratee) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      await iteratee(callingArray[index], index, callingArray, arrayLength);
    }
    return callingArray;
  };
  /**
    * Asynchronously Iterates through the given array in reverse. Each async function is awaited as to ensure synchronous order.
    *
    * @function eachAsyncRight
    * @type {Function}
    * @async
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @example
    * eachAsyncRight([3,4], async (item, index) =>{
    *  console.log(item, index);
    * });
    * // 4 1
    * // 3 0
  */
  const eachAsyncRight = async (callingArray, iteratee) => {
    const arrayLength = callingArray.length;
    for (let index = arrayLength - 1; index >= 0; index--) {
      await iteratee(callingArray[index], index, callingArray, arrayLength);
    }
    return callingArray;
  };
  assign($, {
    eachAsync,
    eachAsyncRight,
  });

  /**
    * Extracts item(s) from an array starting from the last item in the array.
    *
    * @function last
    * @type {Function}
    * @param {Array} array - Array to have items extracted from.
    * @param {number} [indexFrom = 0] - Value which determines how many items are extracted from the array.
    * @returns {Array} Items from the array.
    *
    * @example
    * last([1, 2, 3, 4, 5] , 2);
    * // => [5, 4]
    *
    * last([1, 2, 3, 4, 5]);
    * // => 5
  */
  const last = (array, indexFrom) => {
    const arrayLength = array.length;
    return (indexFrom) ? array.slice(arrayLength - indexFrom, arrayLength) : array[arrayLength - 1];
  };
  assign($, {
    last
  });

  /**
    * Returns a shallow copy of the array up to an amount.
    *
    * @function take
    * @type {Function}
    * @param {Array} array - The array to be evaluated.
    * @returns {Array} The aggregated array.
    *
    * @example
    * take([1,2,3], 2);
    * // => [1, 2]
  */
  const take = (array, amount = 1) => {
    return array.slice(0, amount);
  };
  /**
    * Returns a shallow copy of the array up to an amount starting from the right.
    *
    * @function takeRight
    * @type {Function}
    * @param {Array} array - The array to be evaluated.
    * @returns {Array} The aggregated array.
    *
    * @example
    * takeRight([1,2,3], 2);
    * // => [3, 2]
  */
  const takeRight = (array, amount = 1) => {
    return array.slice(array.length - amount, amount);
  };
  assign($, {
    take,
    takeRight
  });

  /**
    * Asynchronously Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
    *
    * @function mapAsync
    * @category Utility
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array of the same calling array's type.
    *
    * @example
    * mapAsync({a: 1, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {a: 2, b: 4, c: 6}
  */
  const mapAsync = async (array, iteratee) => {
    const results = [];
    await eachAsync(array, async (item, index, arrayLength) => {
      results[index] = await iteratee(item, index, arrayLength);
    });
    return results;
  };
  assign($, {
    mapAsync,
  });

  const onlyUnique = (value, index, array) => {
    return array.indexOf(value) === index;
  };
  const sortUnique = (item, index, array) => {
    return item !== array[index - 1];
  };
  /**
    * Filters the array down to unique elements.
    *
    * @function take
    * @type {Function}
    * @param {Array} array - The array to be filtered.
    * @returns {Array} The filtered array.
    *
    * @example
    * union([1, 2, 2, 4]);
    * // => [1, 2, 4]
  */
  const unique = (array, isSorted) => {
    if (isSorted) {
      return array.filter(sortUnique);
    }
    return array.filter(onlyUnique);
  };
  assign($, {
    unique
  });

  /**
    * Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
    *
    * @function take
    * @type {Function}
    * @param {...Array} arrays - The arrays to be evaluated.
    * @returns {Array} The aggregated array.
    *
    * @example
    * union([1,2,4], [1,2,3]);
    * // => [1, 2]
  */
  const union = (...arrays) => {
    const result = [];
    eachArray(arrays, (array) => {
      eachArray(unique(array), (item) => {
        if (result.includes(item)) {
          result.push(item);
        }
      });
    });
    return result;
  };
  assign($, {
    union
  });

  /**
    * Asynchronously performs a function on the items within an array.
    *
    * @function compactMapAsync
    * @type {Function}
    * @async
    * @param {Array} array - Array to be compacted.
    * @param {Function} method - Iteratee to be performed on array.
    * @returns {Array} Array values after being put through an iterator.
    *
    * @example
    * compactMapAsync([1, 2, 3, false], async () => {return item});
    * //=> [1, 2, 3]
  */
  const compactMapAsync = async (array, method) => {
    const results = [];
    let result;
    await eachAsync(array, async (item, index, arrayLength) => {
      result = await method(item, index, arrayLength);
      if (hasValue(result)) {
        results.push(result);
      }
    });
    return results;
  };
  assign($, {
    compactMapAsync,
  });

  const numericalCompare = (a, b) => {
    return a - b;
  };
  /**
    * Sorts an array in place using a numerical comparison algorithm from lowest to highest.
    *
    * @function numSort
    * @type {Function}
    * @param {Array} numberList - Array of numbers.
    * @returns {Array} The array this method was called on.
    *
    * @example
    * numSort([10, 0, 2, 1]);
    * // -> [0, 1, 2, 10]
  */
  const numSort = (numberList) => {
    return numberList.sort(numericalCompare);
  };
  assign($, {
    numSort
  });

  /**
    * Takes all but the last item in the array.
    *
    * @function arrayToObject
    * @type {Function}
    * @param {Array} array - Array to have items extracted from.
    * @param {Array} properties - Array to have items extracted from.
    * @returns {Array} - Returns a completely flattened array.
    *
    * @example
    * arrayToObject([1, 2, 3], ['i', 'love', 'lucy']);
    * // => {i:1, love:2, lucy: 3}
  */
  const arrayToObject = (values, properties) => {
    const sortedObject = {};
    eachArray(values, (item, key) => {
      sortedObject[properties[key]] = item;
    });
    return sortedObject;
  };
  assign($, {
    arrayToObject
  });

  /**
    * Returns a copy of the array with all instances of the values removed.
    *
    * @function take
    * @type {Function}
    * @param {Array} array - The array to be filtered.
    * @param {Array} removeThese - Items to be removed.
    * @returns {Array} The filtered array.
    *
    * @example
    * union([1, 2, 2, 4], 4);
    * // => [1, 2, 2]
  */
  const without = (array, removeThese) => {
    return array.filter((item) => {
      return !removeThese.includes(item);
    });
  };
  assign($, {
    without
  });

  const findIndexCache = (element, index, array, indexMatch, propertyName) => {
    if (element[propertyName] === indexMatch) {
      return true;
    }
  };
  /**
    * Finds an object in a collection by the given id and property name.
    *
    * @function findItem
    * @type {Function}
    * @param {Array} array - Collection to be checked for an item.
    * @param {number|string} id - The value to look for.
    * @param {string} [propertyName = 'id'] - The name of the property to compare.
    * @returns {Object} - The found object.
    *
    * @example
    * findItem([{id: 1}, {id: 2}], 1);
    * //=> {id: 1}
  */
  const findItem = (collection, id, propertyName = 'id') => {
    const result = collection.find((element, index) => {
      return findIndexCache(element, index, collection, id, propertyName);
    });
    return (result === -1) ? false : result;
  };
  /**
    * Finds an object in a collection by the given id and property name and returns the array index of the object.
    *
    * @function findIndex
    * @type {Function}
    * @param {Array} array - Collection to be checked for an item.
    * @param {number|string} id - The value to look for.
    * @param {string} [propertyName = 'id'] - The name of the property to compare.
    * @returns {number} - The index of the object.
    *
    * @example
    * findIndex([{id: 1}, {id: 2}], 1);
    * //=> 0
  */
  const findIndex = (collection, id, propertyName = 'id') => {
    const result = collection.findIndex((element, index) => {
      return findIndexCache(element, index, collection, id, propertyName);
    });
    return (result === -1) ? false : result;
  };
  assign($, {
    findIndex,
    findItem,
  });

  /**
    * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
    *
    * @function partition
    * @type {Function}
    * @param {Array} array - Takes an array to split.
    * @param {Function} funct - Function run on each item in array.
    * @returns {Array} - One array split into two arrays.
    *
    * @example
    * partition([
    *  {user: 'barney', age: 36, active: false},
    *  {user: 'fred', age: 40, active: true},
    *  {user: 'pebbles', age: 1,  active: false}
    * ], (item) => { return item.active; });
    * // => [['fred'], ['barney', 'pebbles']]
  */
  const partition = (array, funct) => {
    const failed = [];
    return [
      compactMapArray(array, (item) => {
        if (funct(item)) {
          return item;
        }
        failed.push(item);
      }),
      failed
    ];
  };
  assign($, {
    partition
  });

  /**
    * Creates an array that is the symmetric difference of the provided arrays.
    *
    * @function take
    * @type {Function}
    * @param {Array} array - The array to be filtered.
    * @param {Array} removeThese - Items to be removed.
    * @returns {Array} The filtered array.
    *
    * @example
    * xor([2, 1], [2, 3]);
    * // => [1, 3]
  */
  const xor = (arrays) => {
    const xored = [];
    eachArray(arrays, (array) => {
      eachArray(unique(array), (item) => {
        if (xored.includes(item)) {
          xored.splice(xored.indexOf(item), 1);
        } else {
          xored.push(item);
        }
      });
    });
    return xored;
  };
  assign($, {
    xor
  });

  /**
    * Merges together the values of each of the arrays with the values at the corresponding position.
    *
    * @function zip
    * @type {Function}
    * @param {Array} properties - The arrays to process.
    * @returns {Array} - Returns the new array of regrouped elements.
    *
    * @example
    * zip(['a', 'b'], [1, 2], [true, false]);
    * // => [['a', 1, true], ['b', 2, false]]
  */
  const zip = (...args) => {
    return args[0].map((item, index) => {
      return args.map((array) => {
        return array[index];
      });
    });
  };
  /**
    * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip array configuration.
    *
    * @function unZip
    * @type {Function}
    * @param {Array} properties - The array of grouped elements to process.
    * @returns {Array} - Returns the new array of regrouped elements.
    *
    * @example
    * unZip([['a', 1, true], ['b', 2, false]]);
    * // => [['a', 'b'], [1, 2], [true, false]]
  */
  const unZip = (array) => {
    return array[0].map((item, index) => {
      return array.map((arraySet) => {
        return arraySet[index];
      });
    });
  };
  assign($, {
    unZip,
    zip,
  });

  /**
    * Takes the first or multiple items from an array.
    *
    * @function first
    * @type {Function}
    * @param {Array} array - Array to extract from.
    * @param {number} upTo - Number which determines how many items after the first item are extracted from the array.
    * @returns {Array} - Returns an array.
    *
    * @example
    * first([1, 2, 3]);
    * //=> [1]
    *
    * first([1, 2, 3], 2);
    * //=> [1, 2, 3]
  */
  const first = (array, upTo) => {
    return (upTo) ? array.slice(0, upTo) : array[0];
  };
  assign($, {
    first
  });

  const numericalCompareReverse = (a, b) => {
    return b - a;
  };
  /**
    * Sorts an array in place using a reverse numerical comparison algorithm from highest to lowest.
    *
    * @function rNumSort
    * @param {Array} numberList - Array of numbers.
    * @returns {Array} The array this method was called on.
    *
    * @example
    * rNumSort([10, 0, 2, 1]);
    * // => [10, 2, 1, 0]
  */
  const rNumSort = (numberList) => {
    return numberList.sort(numericalCompareReverse);
  };
  assign($, {
    rNumSort
  });

  /**
    * Iterates based on a start index and an end index. The loop ends when the start index is equal to the end index.
    *
    * @function times
    * @type {Function}
    * @param {number} startIndex - The number to start loop from.
    * @param {number} endIndex - The number to stop at the loop.
    * @param {Function} iteratee - Transformation function which is passed position, start, and end.
    * @returns {undefined} Nothing.
    *
    * @example
    * times(0, 3, (item) => {
    *   console.log(item);
    * });
    * //Will log
    * // 0
    * // 1
    * // 2
    * // => undefined
  */
  const times = (startIndex, endIndex, iteratee) => {
    const start = (startIndex) ? startIndex : 0;
    const end = (startIndex) ? endIndex : startIndex;
    const iterateeMethod = iteratee || endIndex;
    for (let position = start; position < end; position++) {
      iterateeMethod(position, start, end);
    }
  };
  /**
    * Iterates based on a start index and end index. Creates an array with the results of the iteratee on every element in the calling array. The loop ends when the start index is equal to the end index.
    *
    * @function timesMap
    * @category Utility
    * @type {Function}
    * @param {number} startIndex - The number to start loop from.
    * @param {number} endIndex - The number to stop at the loop.
    * @param {Function} iteratee - Transformation function which is passed position, start, and end.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array with iteratee's returned values.
    *
    * @example
    * timesMap(0, 3, (item) => {
    *   console.log(item);
    * });
    * // => [0, 1, 2]
  */
  const timesMap = (startIndex, endIndex, iteratee, results = []) => {
    const start = (iteratee) ? startIndex : 0;
    const end = (iteratee) ? endIndex : startIndex;
    const iterateeMethod = iteratee || endIndex;
    let result;
    times(start, end, (position) => {
      result = iterateeMethod(results, position, start, end);
      if (hasValue(result)) {
        results.push(result);
      }
    });
    return results;
  };
  assign($, {
    times,
    timesMap,
  });

  const isAgent = (string) => {
    return (string) ? isAgent[string] : keys(isAgent);
  };
  let userAgentNormalized = navigator.userAgent.toLowerCase();
  userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
  userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
  const userAgentSplit = userAgentNormalized.split(/ |\//);
  eachArray(userAgentSplit, (item) => {
    isAgent[item] = true;
  });
  assign($, {
    isAgent
  });

  const eventAdd = (obj, eventName, func, capture) => {
    obj.addEventListener(eventName, func, capture);
    return obj;
  };
  const eventRemove = (obj, eventName, func, capture) => {
    obj.removeEventListener(eventName, func, capture);
    return obj;
  };
  assign($, {
    eventAdd,
    eventRemove,
  });

  const isEnter = (eventObject) => {
    return eventObject.keyCode === 13;
  };
  assign($, {
    isEnter
  });

  const appState = {};
  assign($, {
    appState
  });

  const createFragment = document.createDocumentFragment.bind(document);
  assign($, {
    createFragment
  });

  const append = (node, child) => {
    node.appendChild(child);
    return node;
  };

  /**
    * Iterates through the given object.
    *
    * @function eachObject
    * @type {Function}
    * @param {Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
    * @returns {Object|Function} The originally given object.
    *
    * @example
    * eachObject({a: 1, b: 2, c: 3}, (item) => {
    *   console.log(item);
    * });
    * // => {a: 1, b: 2, c: 3}
  */
  const eachObject = (thisObject, iteratee) => {
    const objectKeys = keys(thisObject);
    eachArray(objectKeys, (key, index, array, propertyCount) => {
      iteratee(thisObject[key], key, thisObject, propertyCount, objectKeys);
    });
  };
  /**
    * Iterates through the given object while the iteratee returns true.
    *
    * @function whileObject
    * @type {Function}
    * @param {Object} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
    * @returns {boolean} Returns the true if all values returned are true or false if one value returns false.
    *
    * @example
    * whileObject({a: false, b: true, c: true}, (item) => {
    *   return item;
    *  });
    * // => false
  */
  const whileObject = (callingObject, iteratee, results = {}) => {
    return whileArray(callingObject, (item, key, thisObject, propertyCount, objectKeys) => {
      return iteratee(item, key, results, thisObject, propertyCount, objectKeys);
    });
  };
  /**
    * Iterates through the calling object and creates an object with all elements that pass the test implemented by the iteratee.
    *
    * @function filterObject
    * @type {Function}
    * @param {Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Object|Function} An object with properties that passed the test.
    *
    * @example
    * filterObject({a: false, b: true, c: true}, (item) => {
    *   return true;
    * });
    * // => {b: true, c: true}
  */
  const filterObject = (object, iteratee, results = {}) => {
    eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
      if (iteratee(item, key, results, thisObject, propertyCount, objectKeys) === true) {
        results[key] = item;
      }
    });
    return results;
  };
  /**
    * Iterates through the calling object and creates an object with the results of the iteratee on every element in the calling object.
    *
    * @function mapObject
    * @category Utility
    * @type {Function}
    * @param {Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Object|Function} An object of the same calling object's type.
    *
    * @example
    * mapObject({a: 1, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {a: 2, b: 4, c: 6}
  */
  const mapObject = (object, iteratee, results = {}) => {
    eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
      results[key] = iteratee(item, key, results, thisObject, propertyCount, objectKeys);
    });
    return results;
  };
  /**
    * Iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
    *
    * @function compactMapObject
    * @type {Function}
    * @param {Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Object|Function} An object with mapped properties that are not null or undefined.
    *
    * @example
    * compactMapObject({a: 0, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {b: 4, c: 6}
  */
  const compactMapObject = (object, iteratee, results = {}) => {
    eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
      const result = iteratee(item, key, results, propertyCount, objectKeys);
      if (hasValue(result)) {
        results[key] = result;
      }
    });
    return results;
  };
  assign($, {
    compactMapObject,
    eachObject,
    filterObject,
    mapObject,
    whileObject,
  });

  const nodeAttribute = (node, keys$$1, value) => {
    let results;
    if (isString(keys$$1)) {
      if (hasValue(value)) {
        node.setAttribute(keys$$1, value);
      } else {
        return node.getAttribute(keys$$1);
      }
    } else if (isPlainObject(keys$$1)) {
      results = mapObject(keys$$1, (item, key) => {
        return nodeAttribute(node, key, item);
      });
      if (value) {
        return results;
      }
    }
    return node;
  };
  assign($, {
    nodeAttribute
  });

  /**
    * A wrapper around the promise constructor.
    *
    * @function promise
    * @type {Function}
    * @param {Function} callback - Function to be called back.
    * @returns {Object} - A constructor with a callback function.
    *
    * @example
    * promise((a) => {});
    * //=> promise((a) => {})
  */
  const promise = (callback) => {
    return new Promise(callback);
  };
  assign($, {
    promise
  });

  /**
    * Inserts text into a string at a given position.
    *
    * @function insertInRange
    * @type {Function}
    * @param {string} string - String to insert the text into.
    * @param {number} index - Point of insertion.
    * @param {string} text - The string to be inserted.
    * @returns {string} - The string with the text inserted at the given point.
    *
    * @example
    * insertInRange('A from Lucy.', 1, ' tab');
    * // => 'A tab from Lucy.'
  */
  const insertInRange = (string, index, text) => {
    return string.slice(0, index) + text + string.slice(index, string.length);
  };
  /**
    * Plucks a letter using the index starting from the right.
    *
    * @function rightString
    * @type {Function}
    * @param {string} string - String to extract the letter from.
    * @param {number} [index=1] - The starting position.
    * @returns {string} - A letter at the given index.
    *
    * @example
    * rightString('rightString');
    * // => 'g'
    *
    * rightString('rightString', 2);
    * // => 'n'
  */
  const rightString = (string, index = 1) => {
    return string[string.length - index];
  };
  /**
    * Splits up a string into chunks.
    *
    * @function chunkString
    * @type {Function}
    * @param {string} string - String to chunked.
    * @param {number} [size] - The max string length per chunk.
    * @returns {Array} - An array with strings that are <= size parameter.
    *
    * @example
    * chunkString('chunk', 2);
    * //-> ['ch', 'un', 'k']
  */
  const chunkString = (string, size) => {
    return string.match(new RegExp(`(.|[
]){1, ${size}}`, 'g'));
  };
  /**
    * Truncates everything before the index starting from the right.
    *
    * @function initialString
    * @type {Function}
    * @param {string} string - String to extract the initial letters from.
    * @param {number} [index=1] - Starting point from the right.
    * @returns {string} A string with the characters before the index starting from the right.
    *
    * @example
    * initialString('initialString');
    * //-> 'initialStrin'
    *
    * initialString('initialString', 2);
    * //-> 'initialStri'
  */
  const initialString = (string, index = 1) => {
    return string.slice(0, index * -1);
  };
  /**
    * Truncates everything after a index.
    *
    * @function restString
    * @type {Function}
    * @param {string} string - String to extract the rest of the letters from.
    * @param {number} [index=1] - Starting point.
    * @returns {string} - A string without the characters up-to to the index.
    *
    * @example
    * restString('restString');
    * //-> 'estString'
    *
    * restString('restString', 2);
    * //-> 'stString'
  */
  const restString = (string, index = 1) => {
    return string.substr(index);
  };
  assign($, {
    chunkString,
    initialString,
    insertInRange,
    restString,
    rightString,
  });

  const dotString = '.';
  const poundString = '#';
  const classTest = /^.[\w_-]+$/;
  const tagTest = /^[A-Za-z]+$/;
  const regexSpace = /\s/;
  const getByClass = document.getElementsByClassName.bind(document);
  const getByTag = document.getElementsByTagName.bind(document);
  const getById = document.getElementById.bind(document);
  const querySelector = document.querySelector.bind(document);
  const querySelectorAll = document.querySelectorAll.bind(document);
  const selector = (select) => {
    const firstLetter = select[0];
    switch (firstLetter) {
      case poundString:
        if (!regexSpace.test(select)) {
          return getById(restString(select));
        }
        break;
      case dotString:
        if (classTest.test(select)) {
          return getByClass(restString(select));
        }
        break;
      default:
        if (tagTest.test(select)) {
          return getByTag(select);
        }
    }
    return querySelectorAll(select);
  };
  assign($, {
    getByClass,
    getById,
    getByTag,
    querySelector,
    querySelectorAll,
    selector
  });

  const createTag = document.createElement.bind(document);
  const nodeAttachLoadingEvents = (node) => {
    return promise((accept, reject) => {
      eventAdd(node, 'load', accept, true);
      eventAdd(node, 'error', reject, true);
      append(querySelector('head'), node);
    });
  };
  const importcss = (url) => {
    const node = nodeAttribute(createTag('link'), {
      href: `${url}.css`,
      rel: 'stylesheet',
      type: 'text/css',
    });
    return nodeAttachLoadingEvents(node);
  };
  const importjs = (url) => {
    const node = nodeAttribute(createTag('script'), {
      async: '',
      src: `${url}.js`
    });
    return nodeAttachLoadingEvents(node);
  };
  assign($, {
    importcss,
    importjs,
  });

  const isDocumentReady = (func) => {
    const state = document.readyState;
    const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
    if (checkStatus) {
      return (func) ? func() : true;
    }
    if (func) {
      eventAdd(document, 'DOMContentLoaded', func);
    }
    return false;
  };
  assign($, {
    isDocumentReady
  });
  isDocumentReady(() => {
    importjs('index');
  });

  const saveDimensions = () => {
    assign($.appState, {
      bodyHeight: document.body.offsetHeight,
      bodyWidth: document.body.offsetWidth,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };
  const updateDimensions = () => {
    requestAnimationFrame(saveDimensions);
  };
  isDocumentReady(updateDimensions);
  eventAdd(window, 'load', updateDimensions, true);
  eventAdd(window, 'resize', updateDimensions, true);
  assign($, {
    saveDimensions,
    updateDimensions
  });

  /**
    * Checks if the given method is a function. If it is then it invokes it with the given arguments.
    *
    * @function ifInvoke
    * @type {Function}
    * @param {Function} method - The function to be invoked if possible.
    * @param {...Array} args - Arguments to pass to the method.
    * @returns {*} Returns the method invoked or undefined.
    *
    * @example
    * ifInvoke((...args) => { return args;}, 1, 2);
    * // => [1, 2]
    * ifInvoke(undefined, 1, 2);
    * // => undefined
  */
  const ifInvoke = (method, ...args) => {
    if (isFunction(method)) {
      return method(...args);
    }
  };
  assign($, {
    ifInvoke
  });

  let batchCancelFrame;
  const batchChanges = [];
  const batchLoop = () => {
    eachArray(batchChanges, ifInvoke);
    clear(batchChanges);
    batchCancelFrame = false;
  };

  const batch = (...items) => {
    batchChanges.push(...items);
    if (!batchCancelFrame) {
      batchCancelFrame = requestAnimationFrame(batchLoop);
    }
  };
  assign($, {
    batch
  });

  const protocol = location.protocol;
  const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
  const hostname = location.hostname;
  const info = {
    hardware: {
      cores: navigator.hardwareConcurrency
    },
    host: {
      name: hostname,
      protocol,
      protocolSocket,
    }
  };
  assign($, {
    info
  });

  const jsonNative = JSON;
  /**
     * Parses JSON string.
     *
     * @function jsonParse
     * @type {Function}
     * @param {string} string - String to be parsed.
     * @returns {Object} Returns the parsed object.
     *
     * @example
     * jsonParse('{}');
     * // => {}
   */
  const jsonParse = jsonNative.jsonParse;
  /**
     * Stringify an object into a JSON string.
     *
     * @function stringify
     * @type {Function}
     * @param {Object} object - Object to Stringify.
     * @returns {string} Returns the object as a valid JSON string.
     *
     * @example
     * stringify({});
     * // => '{}'
   */
  const stringify = jsonNative.stringify;
  assign($, {
    jsonParse,
    stringify
  });

  const generateTheme = (color, bg) => {
    return `color:${color};background:${bg};`;
  };
  const themes = {
    alert: generateTheme('#fff', '#f44336'),
    important: generateTheme('#fff', '#E91E63'),
    notify: generateTheme('#fff', '#651FFF'),
    warning: generateTheme('#000', '#FFEA00'),
  };
  const cnsl = (dataArg, themeName) => {
    const data = isString(dataArg) ? dataArg : stringify(dataArg);
    console.trace(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
  };
  const addConsoleTheme = (themeName, color, bg) => {
    themes[themeName] = generateTheme(color, bg);
  };
  assign($, {
    addConsoleTheme,
    cnsl,
  });

  eachArray(['HTMLCollection', 'NodeList'], (item) => {
    $[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
  });

  /**
    * Sorts an array in place using a key from newest to oldest.
    *
    * @function sortNewest
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
    * @returns {Array} The sorted array and or a clone of the array sorted.
    *
    * @example
    * sortNewest([{id: 1}, {id: 0}], 'id');
    * // -> [{id: 1}, {id: 0}]
  */
  const sortNewest = (collection, key, pureMode = true) => {
    const array = (pureMode) ? collection : [...collection];
    return array.sort((previous, next) => {
      if (!next[key]) {
        return -1;
      } else if (!previous[key]) {
        return 1;
      } else if (previous[key] < next[key]) {
        return 1;
      } else if (previous[key] > next[key]) {
        return -1;
      }
      return 0;
    });
  };
  /**
    * Sorts an array in place using a key from newest to oldest and returns the latest. Does not mutate the array.
    *
    * @function getNewest
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @returns {Object} The newest object in the collection.
    *
    * @example
    * getNewest([{id: 1}, {id: 0}], 'id');
    * // -> {id: 1}
  */
  const getNewest = (collection, key) => {
    return sortNewest(collection, key, false)[0];
  };
  assign($, {
    getNewest,
    sortNewest,
  });

  /**
    * Sorts an array in place using a key from oldest to newest.
    *
    * @function sortOldest
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
    * @returns {Array} The sorted array and or a clone of the array sorted.
    *
    * @example
    * sortOldest([{id: 1}, {id: 0}], 'id');
    * // -> [{id: 0}, {id: 1}]
  */
  const sortOldest = (collection, key, pureMode = true) => {
    const array = (pureMode) ? collection : [...collection];
    return array.sort((previous, next) => {
      if (!next[key]) {
        return -1;
      } else if (!previous[key]) {
        return 1;
      } else if (previous[key] < next[key]) {
        return 1;
      } else if (previous[key] > next[key]) {
        return -1;
      }
      return 0;
    });
  };
  /**
    * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
    *
    * @function getOldest
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @returns {Object} The newest object in the collection.
    *
    * @example
    * sortOldest([{id: 1}, {id: 0}], 'id');
    * // -> {id: 0}
  */
  const getOldest = (collection, key) => {
    return sortOldest(collection, key)[0];
  };
  assign($, {
    getOldest,
    sortOldest,
  });

  /**
    * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
    * The order of grouped values is determined by the order they occur in collection.
    * The corresponding value of each key is an array of elements responsible for generating the key.
    *
    * @function groupBy
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {Function} iteratee - The iteratee to transform keys.
    * @returns {Object} Returns the composed aggregate object.
    *
    * @example
    * groupBy([6.1, 4.2, 6.3], Math.floor);
    * // => { '4': [4.2], '6': [6.1, 6.3] }
  */
  const groupBy = (array, iteratee) => {
    const sortedObject = {};
    eachArray(array, (item) => {
      const results = iteratee(item);
      if (!sortedObject[results]) {
        sortedObject[results] = [];
      }
      sortedObject[results].push(item);
    });
    return sortedObject;
  };
  assign($, {
    groupBy
  });

  /**
    * Creates an object composed of keys generated from the results of running each element of collection through iteratee.
    *
    * @function countBy
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {Function} iteratee - The iteratee to transform keys.
    * @returns {Object} Returns the composed aggregate object.
    *
    * @example
    * countBy([{a:1}, {a:3}], (item) => { return 'a';}));
    * // => {a: 2}
  */
  const countBy = (collection, iteratee) => {
    const object = {};
    let result;
    eachArray(collection, (item) => {
      result = iteratee(item);
      if (!object[result]) {
        object[result] = 0;
      }
      object[result]++;
    });
    return object;
  };
  /**
    * Count the amount of times a key is present in a colleciton.
    *
    * @function countKey
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {Function} property - The name of the key.
    * @returns {number} The count.
    *
    * @example
    * countKey([{a:1}, {a:3}], 'a');
    * // => 2
  */
  const countKey = (array, property) => {
    let count = 0;
    eachArray(array, (item) => {
      if (item[property]) {
        count++;
      }
    });
    return count;
  };
  /**
    * Count the amount of times a key is not present in a colleciton.
    *
    * @function countWithoutKey
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {string} property - The name of the key.
    * @returns {number} The count.
    *
    * @example
    * countWithoutKey([{a:1}, {a:3}], 'b');
    * // => 2
  */
  const countWithoutKey = (array, keyName) => {
    let count = 0;
    eachArray(array, (item) => {
      if (!item[keyName]) {
        count++;
      }
    });
    return count;
  };
  assign($, {
    countBy,
    countKey,
    countWithoutKey
  });

  /**
    * Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item.
    * Just like groupBy, but for when you know your keys are unique.
    *
    * @function groupBy
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {Function} iteratee - The iteratee to transform keys.
    * @returns {Object} Returns the composed aggregate object.
    *
    * @example
    * groupBy([{name: 'Lucy', id: 0}, {name: 'Erick', id: 1}], Math.floor);
    * // => { "0": {name: 'Lucy', id: 0}, "1": {name: 'Erick', id: 1}}
  */
  const indexBy = (array, key) => {
    const sortedObject = {};
    eachArray(array, (item) => {
      sortedObject[item[key]] = item;
    });
    return sortedObject;
  };
  assign($, {
    indexBy
  });

  /**
    * Returns an array of the plucked values from the collection.
    *
    * @function pick
    * @type {Function}
    * @param {Array} collection - Array used to determine what values to be plucked.
    * @param {string} pluckThis - Property name.
    * @returns {Array} - An array of plucked values.
    *
    * @example
    * pick([{lucy: 'Ants moving around on the walls.'}, {lucy: 'In the sky with diamonds.'}], ['a','b']);
    * //=> ['Ants moving around on the walls.', 'In the sky with diamonds.']
  */
  const pluck = (collection, pluckThis) => {
    return mapArray(collection, (item) => {
      const result = item[pluckThis];
      return result;
    });
  };
  assign($, {
    pluck
  });

  /**
    * Invokes a function on the provided property name in each object in the collection.
    *
    * @function invoke
    * @type {Function}
    * @param {Array} collection - Collection from which method will be taken.
    * @param {string} methodName - Value used to pluck method from object.
    * @param {*} args - Values to be run through method.
    * @returns {Array} - Returns the results of the invoked method.
    *
    * @example
    * invoke([{lucy(item, index) { return [item, index];}}, {lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
    * // => [['lucy', 'Arity LLC'], ['lucy', 'Arity LLC']]
  */
  const invoke = (collection, property, args) => {
    return mapArray(collection, (item, index) => {
      return item[property](args, index);
    });
  };
  assign($, {
    invoke
  });

  /**
    * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
    *
    * @function invokeAsync
    * @type {Function}
    * @param {Array} collection - Collection from which method will be taken.
    * @param {string} methodName - Value used to pluck method from object.
    * @param {*} args - Values to be run through method.
    * @returns {Array} - Returns the results of the invoked method.
    *
    * @example
    * invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
    * // => [['lucy', 'Arity LLC'], ['lucy', 'Arity LLC']]
  */
  const invokeAsync = (collection, property, args) => {
    return mapAsync(collection, async (item, index) => {
      return item[property](args, index);
    });
  };
  assign($, {
    invokeAsync
  });

  /**
    * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
    *
    * @function ary
    * @type {Function}
    * @param {Function} func - The function to cap arguments for.
    * @param {number} amount - The arity cap.
    * @returns {Object} Returns the new capped function.
    *
    * @example
    * ary((...args) => { return args }, 2)(1, 2, 3);
    * // => [1, 2]
  */
  const ary = (func, amount) => {
    return (...args) => {
      return func(...args.splice(0, amount));
    };
  };
  assign($, {
    ary
  });

  /**
    * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method length is not sufficient.
    *
    * @function curry
    * @type {Function}
    * @param {Function} methods - The function to curry.
    * @param {number} arity - The arity of method.
    * @returns {*} Returns the new curried function.
    *
    * @example
    * const curried = curry((a, b, c) => {
    *   return [a, b, c];
    * });
    * curried(1)(2)(3);
    * // => [1, 2, 3]
  */
  const curry = (method, arity = method.length) => {
    const curries = [];
    const curried = (...curryArgs) => {
      curries.push(...curryArgs);
      if (curries.length === arity) {
        const result = method(...curries);
        clear(curries);
        return result;
      }
      return curried;
    };
    return curried;
  };
  /**
    * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method.length is not sufficient. The arguments are given in reverse order.
    *
    * @function curryRight
    * @type {Function}
    * @param {Function} methods - The function to curry.
    * @param {number} arity - The arity of method.
    * @returns {*} Returns the new curried function.
    *
    * @example
    * const curried = curryRight((a, b, c) => {
    *   return [a, b, c];
    * });
    * curried(1)(2)(3);
    * // => [1, 2, 3]
  */
  const curryRight = (method, arity = method.length) => {
    const curries = [];
    const curried = (...curryArgs) => {
      curries.unshift(...curryArgs);
      if (curries.length === arity) {
        const result = method(...curries);
        clear(curries);
        return result;
      }
      return curried;
    };
    return curried;
  };
  assign($, {
    curry,
    curryRight
  });

  /**
    * Creates a function that is restricted to execute method once. Repeat calls to the function will return the value of the first call. The method is executed with the this binding of the created function.
    *
    * @function once
    * @type {Function}
    * @param {Function} method - The function to be called.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @example
    * const onceOnly = once(() => { return 1;});
    * onceOnly();
    * // => 1
    * onceOnly();
    * // => 1
  */
  const once = (method) => {
    let value;
    const onlyOnce = (...args) => {
      if (hasValue(value)) {
        value = method(...args);
      }
      return value;
    };
    return onlyOnce;
  };
  /**
    * Creates a function that executes method, only after being called n times.
    *
    * @function after
    * @type {Function}
    * @param {number} amount - The number of calls until method is invoked.
    * @param {Function} method - The function to be called.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @example
    * const onlyAfter = after(1, () => { return 1;});
    * onlyAfter();
    * // => undefined
    * onlyAfter();
    * // => 1
  */
  const after = (amount, method) => {
    let point = amount;
    let value;
    const onlyAfter = (...args) => {
      if (point !== null) {
        point--;
      }
      if (point <= 0) {
        value = method(...args);
      } else {
        point = null;
      }
      return value;
    };
    return onlyAfter;
  };
  /**
    * Creates a function that executes method, only before n times.
    *
    * @function before
    * @type {Function}
    * @param {number} amount - The number of calls before n.
    * @param {Function} method - The function to be called.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @example
    * const onlyBefore = before(3, () => { return 1;});
    * onlyBefore(1);
    * // => 1
    * onlyBefore(2);
    * // => 2
    * onlyBefore(3);
    * // => 2
  */
  const before = (amount, method) => {
    let point = amount;
    let value;
    const onlyBefore = (...args) => {
      if (point !== null) {
        point--;
      }
      if (point >= 1) {
        value = method(...args);
      } else {
        point = null;
      }
      return value;
    };
    return onlyBefore;
  };
  assign($, {
    after,
    before,
    once
  });

  /**
    * This method returns a new empty object.
    *
    * @function stubObject
    * @type {Function}
    * @returns {Object} Returns the new empty object.
    *
    * @example
    * stubObject();
    * // => {}
  */
  const stubObject = () => {
    return {};
  };
  /**
    * This method returns a new empty array.
    *
    * @function stubArray
    * @type {Function}
    * @returns {Array} Returns the new empty array.
    *
    * @example
    * stubArray();
    * // => []
  */
  const stubArray = () => {
    return [];
  };
  /**
    * This method returns a new empty string.
    *
    * @function stubString
    * @type {Function}
    * @returns {string} Returns the new empty string.
    *
    * @example
    * stubString();
    * // => ''
  */
  const stubString = () => {
    return '';
  };
  /**
    * This method returns false.
    *
    * @function stubFalse
    * @type {Function}
    * @returns {boolean} Returns false.
    *
    * @example
    * stubFalse();
    * // => false
  */
  const stubFalse = () => {
    return false;
  };
  /**
    * This method returns true.
    *
    * @function stubTrue
    * @type {Function}
    * @returns {boolean} Returns true.
    *
    * @example
    * stubTrue();
    * // => true
  */
  const stubTrue = () => {
    return true;
  };
  /**
    * This method returns undefined.
    *
    * @function noop
    * @type {Function}
    * @returns {undefined} Returns undefined.
    *
    * @example
    * noop();
    * // => undefined
  */
  const noop = () => {
    return undefined;
  };
  assign($, {
    noop,
    stubArray,
    stubFalse,
    stubObject,
    stubString,
    stubTrue,
  });

  const forEachWrap = (object, callback) => {
    return object.forEach(callback);
  };
  const generateCheckLoops = (arrayLoop, objectLoop) => {
    return (callingObject, iteratee, results) => {
      let returned;
      if (!hasValue(callingObject)) {
        return;
      } else if (isArray(callingObject)) {
        returned = arrayLoop;
      } else if (isPlainObject(callingObject) || isFunction(callingObject)) {
        returned = objectLoop;
      } else if (callingObject.forEach) {
        returned = forEachWrap;
      } else {
        returned = objectLoop;
      }
      return returned(callingObject, iteratee, results);
    };
  };
  /**
    * Iterates through the given object while the iteratee returns true.
    *
    * @function eachWhile
    * @type {Function}
    * @param {Object|Array|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
    * @returns {boolean} Returns the true if all values returned are true or false if one value returns false.
    *
    * @example
    * eachWhile({a: false, b: true, c: true}, (item) => {
    *   return item;
    *  });
    * // => false
  */
  const eachWhile = generateCheckLoops(whileArray, whileObject);
  /**
    * Iterates through the given object.
    *
    * @function each
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @returns {Array|Object|Function} The originally given object.
    *
    * @example
    * each([1, 2, 3], (item) => {
    *   console.log(item);
    * });
    * // => [1, 2, 3]
    * each({a: 1, b: 2, c: 3}, (item) => {
    *   console.log(item);
    * });
    * // => {a: 1, b: 2, c: 3}
  */
  const each = generateCheckLoops(eachArray, eachObject);
  /**
    * Iterates through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
    *
    * @function filter
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Array|Object|Function} - A new object of the same calling object's type.
    *
    * @example
    * filter([false, true, true], (item) => {
    *   return item;
    * });
    * // => [true, true]
    * filter({a: false, b: true, c: true}, (item) => {
    *   return true;
    * });
    * // => {b: true, c: true}
  */
  const filter = generateCheckLoops(filterArray, filterObject);
  /**
    * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
    *
    * @function map
    * @category Utility
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Array|Object|Function} A new object of the same calling object's type.
    *
    * @example
    * map([1, 2, 3], (item) => {
    *   return item * 2;
    * });
    * // => [2, 4, 6]
    * map({a: 1, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {a: 2, b: 4, c: 6}
  */
  const map = generateCheckLoops(mapArray, mapObject);
  /**
    * Iterates through the calling object and creates a new object based on the calling object's type with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
    *
    * @function compactMap
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Array|Object|Function} A new object of the same calling object's type.
    *
    * @example
    * compactMap([0, 2, 3], (item) => {
    *   return item * 2;
    * });
    * // => [4, 6]
    * compactMap({a: 0, b: 2, c: 3}, (item) => {
    *   return item * 2;
    * });
    * // => {b: 4, c: 6}
  */
  const compactMap = generateCheckLoops(compactMapArray, compactMapObject);
  assign($, {
    compactMap,
    each,
    filter,
    map
  });

  /**
    * Loops through an object or an array and binds the given object to all functions encountered.
    *
    * @function bindAll
    * @type {Function}
    * @param {Function} method - The function to be invoked if possible.
    * @param {...Array} args - Arguments to pass to the method.
    * @returns {*} Returns the method invoked or undefined.
    *
    * @example
    * const collection = bindAll([() => { return this;}], 'Lucy');
    * collection[0]();
    * // => 'Lucy'
    *
    * const collection = bindAll({a() { return this;}}, 'Lucy');
    * collection.a();
    * // => 'Lucy'
  */
  const bindAll = (bindThese, withThis) => {
    return map(bindThese, (item) => {
      return isFunction(item) ? item.bind(withThis) : item;
    });
  };
  assign($, {
    bindAll
  });

  /**
    * Creates a function that negates the result of the predicate method.
    *
    * @function negate
    * @type {Function}
    * @param {Function} method - The function to be invoked.
    * @returns {*} Returns the given methods result.
    *
    * @example
    * negate(() => { return false;})();
    * // => true
  */
  const negate = (method) => {
    return (...args) => {
      return !method(...args);
    };
  };
  assign($, {
    negate
  });

  /**
    * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
    *
    * @function every
    * @type {Function}
    * @param {Array|Object} collection - The collection to iterate over.
    * @param {Function} predicate - The function invoked per iteration.
    * @returns {boolean} Returns true if all elements pass the predicate check, else false.
    *
    * @example
    * every([[], true, 1, null, 'string'], Boolean);
    * // => false
  */
  const every = eachWhile;
  assign($, {
    every,
  });

  /**
    * Creates a function that invokes iteratees with the arguments it receives and returns their results.
    *
    * @function over
    * @type {Function}
    * @param {Array|Object} iteratees - The iteratees to invoke.
    * @returns {Function} Returns the new function.
    *
    * @example
    * over([Math.max, Math.min])(1, 2, 3, 4);
    * // => [4, 1]
  */
  const over = (iteratees) => {
    return (...args) => {
      return map(iteratees, (item) => {
        return item(...args);
      });
    };
  };
  /**
    * Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
    *
    * @function overEvery
    * @type {Function}
    * @param {Array|Object} predicates -  The predicates to check.
    * @returns {Function} Returns the new function.
    *
    * @example
    * const overEveryThing = overEvery([Boolean, isFinite]);
    * overEveryThing('1');
    * // => true
    * overEveryThing(null);
    * // => false
  */
  const overEvery = (predicates) => {
    return (...args) => {
      return eachWhile(predicates, (item) => {
        return item(...args);
      });
    };
  };
  assign($, {
    over,
    overEvery
  });

  const timer = (method, time) => {
    return setTimeout(method, time);
  };
  const interval = (method, time) => {
    return setInterval(method, time);
  };


  const debounce = (original, time) => {
    let timeout = false;
    const debounced = (...args) => {
      if (timeout !== false) {
        clearTimeout(timeout);
      }
      timeout = timer(() => {
        original(...args);
        timeout = false;
      }, time);
    };
    debounced.clear = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = false;
      }
    };
    return debounced;
  };
  const throttle = (method, time) => {
    let timeout = false;
    let shouldThrottle;
    const throttled = (...args) => {
      if (timeout) {
        shouldThrottle = true;
        return;
      }
      method(...args);
      timeout = timer(() => {
        if (shouldThrottle) {
          method(...args);
        }
        timeout = false;
      }, time);
    };
    throttled.clear = () => {
      clearTimeout(timeout);
      timeout = false;
    };
    return throttled;
  };
  assign($, {
    debounce,
    interval,
    throttle,
    timer,
  });

  const add$1 = (link, methods) => {
    each(methods, (item, key) => {
      link.methods[key] = (...args) => {
        item(link.value, ...args);
        return link.methods;
      };
    });
    return link;
  };
  /**
    * Creates a chainable set of functions.
    *
    * @function chain
    * @type {Function}
    * @param {Array|Object} methods - The object to take methods from.
    * @returns {*} Returns a function which has value, methods, add, and done. When invoking the function the argument is saved as the value property for further chaining.
    *
    * @example
    * const chained = chain({a(item) { return item;}});
    * chained('Acid').a();
    * // => 'Acid'
  */
  const chain = (methods) => {
    const link = (value) => {
      link.value = value;
      return link.methods;
    };
    assign(link, {
      add(addToChain) {
        return add$1(link, addToChain);
      },
      done() {
        const value = link.value;
        link.value = null;
        return value;
      },
      methods: {},
    });
    link.link(methods);
    return link;
  };
  assign($, {
    chain
  });

  /**
    * Invoke an array of functions.
    *
    * @function curry
    * @type {Function}
    * @param {Function} methods - The functions to be invoked.
    * @param {*} arg - The object passed to each method.
    * @returns {undefined} Returns undefined.
    *
    * @example
    * inSync([() => {console.log(1);}, () => {console.log(2);}]);
    * // 1
    * // 2
    * // => undefined
  */
  const inSync = (methods, arg) => {
    return each(methods, (item) => {
      item(arg);
    });
  };
  /**
    * Invoke an array of functions asynchronously. Each function is awaited to ensure execution order.
    *
    * @function curry
    * @type {Function}
    * @param {Function} methods - The functions to be invoked.
    * @param {*} arg - The object passed to each method.
    * @returns {undefined} Returns undefined.
    *
    * @example
    * inAsync([async () => {console.log(1);}, async () => {console.log(2);}]);
    * // 1
    * // 2
    * // => undefined
  */
  const inAsync = async (methods, arg) => {
    return eachAsync(methods, async (item) => {
      await item(arg);
    });
  };
  assign($, {
    inAsync,
    inSync,
  });

  /**
    * Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
    *
    * @function nthArg
    * @type {Function}
    * @param {number} [index = 0] - The index of the argument to return.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @example
    * nthArg(1)('a', 'b');
    * // => 'b'
  */
  const nthArg = (index = 0) => {
    return (...args) => {
      return args[index];
    };
  };
  assign($, {
    nthArg
  });

  /**
    * Creates a function that invokes method with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
    *
    * @function over
    * @type {Function}
    * @param {Function} method - The function to be invoked.
    * @param {Array} indexes - The arranged argument indexes.
    * @returns {Function} Returns the new function.
    *
    * @example
    * const reArged = ((a, b, c) => {
    *   return [a, b, c];
    * }, [1,2,0]);
    * reArged(1,2,3);
    * // => [2, 3, 1]
  */
  const reArg = (method, indexes) => {
    return (...args) => {
      return method(...indexes.map((item) => {
        return args[item];
      }));
    };
  };
  assign($, {
    reArg
  });

  const wrap = (...args) => {
    const list = [];
    const wrapped = (...wrappedArgs) => {
      return list.map((item) => {
        return item(...wrappedArgs);
      });
    };
    assign(wrapped, {
      add(...addTheseArg) {
        list.push(...addTheseArg);
      },
      list,
    });
    wrapped.add(args);
    return wrapped;
  };
  const wrapBefore = (...args) => {
    const list = [];
    const wrapped = (...wrappedArgs) => {
      return list.map((item) => {
        return item(...wrappedArgs);
      });
    };
    assign(wrapped, {
      add(...addThese) {
        list.unshift(...addThese);
      },
      list,
    });
    wrapped.add(args);
    return wrapped;
  };
  assign($, {
    wrap,
    wrapBefore
  });

  /**
    * Strictly checks if a number is zero.
    *
    * @function isZero
    * @type {Function}
    * @param {number} item - Number to be checked.
    * @returns {boolean} True or False.
    *
    * @example
    * isZero(0);
    * // => true
    *
    * isZero(1);
    * // => False
  */
  const isZero = (item) => {
    return item === 0;
  };
  /**
    * Strictly checks if a number equal to another number.
    *
    * @function isNumberEqual
    * @type {Function}
    * @param {number} item - Number to be checked against num.
    * @param {number} num - Number to be checked against item.
    * @returns {boolean} True or False.
    *
    * @example
    * isNumberEqual(0, 0);
    * // => true
    *
    * isNumberEqual(0, 1);
    * // => False
  */
  const isNumberEqual = (item, num) => {
    return item === num;
  };
  /**
    * Checks if a number is within a range.
    *
    * @function isNumberInRange
    * @type {Function}
    * @param {number} num - Number to be checked.
    * @param {number} [start = 0] - Beginning of range.
    * @param {number} [end] - End of range.
    * @returns {boolean} True or False.
    *
    * @example
    * isNumberInRange(1, 0, 2);
    * // => True
    *
    * isNumberInRange(1, -1, 0);
    * // => False
  */
  const isNumberInRange = (num, start = 0, end = start) => {
    return num > start && num < end;
  };
  assign($, {
    isNumberEqual,
    isNumberInRange,
    isZero
  });

  /**
    * Checks to see if an object has all of the given property names.
    *
    * @function compactKeys
    * @type {Function}
    * @param {Object} object - Object from which keys are extracted.
    * @param {Array} properties - Array of object keys.
    * @returns {boolean} - Returns true or false.
    *
    * @example
    * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Thor']);
    * //=> true
    *
    * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
    * //=> false
  */
  const hasKeys = (object, properties) => {
    const objectKeys = keys(object);
    return whileArray(properties, (item) => {
      return objectKeys.include(item);
    });
  };
  /**
    * Checks to see if an object has any of the given property names.
    *
    * @function hasAnyKeys
    * @type {Function}
    * @param {Object} object - Object from which keys are extracted.
    * @param {Array} properties - Array of object keys.
    * @returns {boolean} - Returns true or false.
    *
    * @example
    * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
    * //=> true
    *
    * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Other','Tom']);
    * //=> false
  */
  const hasAnyKeys = (object, properties) => {
    const objectKeys = keys(object);
    return properties.find((item) => {
      return objectKeys.include(item);
    });
  };
  assign($, {
    hasAnyKeys,
    hasKeys,
  });

  /**
    * Returns a clone of the source object with the plucked properties.
    *
    * @function pick
    * @type {Function}
    * @param {Object} source - Object to be cloned.
    * @param {Array} array - Array used to determine what values to be plucked.
    * @param {Object} [newObject = {}] - Object to be populated with plucked values.
    * @returns {Object} - A new object with plucked properties.
    *
    * @example
    * pick({a:1, b:2, c:3}, ['a','b']);
    * //=> {a:1, b:2}
  */
  const pick = (source, array, newObject = {}) => {
    eachArray(array, (item) => {
      newObject[item] = source[item];
    });
    return newObject;
  };
  assign($, {
    pick
  });

  /**
    * Extracts all key values from an object.
    *
    * @function compactKeys
    * @type {Function}
    * @param {Object} object - Object from which keys are extracted.
    * @returns {Array} - Returns an array of key values.
    *
    * @example
    * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
    * //=> ['Lucy', 'John', 'other']
    *
  */
  const compactKeys = (object) => {
    const keys$$1 = [];
    eachObject(object, (item, key) => {
      if (hasValue(item)) {
        keys$$1.push(key);
      }
    });
    return keys$$1;
  };
  assign($, {
    compactKeys
  });

  /**
     * Performs a shallow strict comparison between two objects.
     *
     * @function isMatchObject
     * @type {Function}
     * @param {Object} source - Source object.
     * @param {Object} compareObject - Object to compare to source.
     * @returns {boolean} Returns the true or false.
     *
     * @example
     * isMatchObject({a: [1,2,3]}, {a: [1,2,3]});
     * // => true
   */
  const isMatchObject = (source, compareObject) => {
    const sourceProperties = keys(source);
    if (isMatchArray(sourceProperties, keys(compareObject))) {
      return whileArray(sourceProperties, (key) => {
        return source[key] === compareObject[key];
      });
    }
    return false;
  };
  assign($, {
    isMatchObject,
  });

  /**
    * Creates an object from two arrays, one of property identifiers and one of corresponding values.
    *
    * @function zipObject
    * @type {Function}
    * @param {Array} properties - The property identifiers.
    * @param {Array} values - The property values.
    * @returns {Object} - Returns the new object.
    *
    * @example
    * zipObject(['a', 'b'], [1, 2]);
    * // => { 'a': 1, 'b': 2 }
  */
  const zipObject = (properties, values) => {
    const zipedObject = {};
    eachArray(properties, (item, key) => {
      zipedObject[item] = values[key];
    });
    return zipedObject;
  };
  /**
    * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip object configuration.
    *
    * @function unZipObject
    * @type {Function}
    * @param {Object} object - The object to process.
    * @returns {Array} - Returns two arrays one of keys and the other of values inside a single array.
    *
    * @example
    * unZipObject({ 'a': 1, 'b': 2 });
    * // => [['a', 'b'], [1, 2]]
  */
  const unZipObject = (object) => {
    const keys$$1 = [];
    const values = [];
    eachObject(object, (item, key) => {
      keys$$1.push(key);
      values.push(item);
    });
    return [keys$$1, values];
  };
  assign($, {
    unZipObject,
    zipObject,
  });

  /**
    * Creates an inverted version of a given object by switching it's keys and values.
    *
    * @function invert
    * @type {Function}
    * @param {Object} thisObject - Object to be inverted.
    * @param {Array} [invertedObject = {}] - Empty object to be populated with inverted values from thisObject.
    * @returns {Object} - Returns object with keys and values switched.
    *
    * @example
    * invert({a:1});
    * //=> {1:a}
  */
  const invert = (thisObject, invertedObject = {}) => {
    eachObject(thisObject, (item, key) => {
      invertedObject[item] = key;
    });
    return invertedObject;
  };
  assign($, {
    invert,
  });

  /**
    * Returns a clone of the given object without the given properties.
    *
    * @function omit
    * @type {Function}
    * @param {Object} originalObject - Object from which keys are extracted.
    * @param {Array} array - Array of object keys.
    * @returns {Object} - A new object with the removed.
    *
    * @example
    * omit({a:1, b:2, ['a']});
    * //=> {b:2}
    *
  */
  const omit = (originalObject, array) => {
    return filterObject(originalObject, (item, key) => {
      return !array.includes(key);
    });
  };
  assign($, {
    omit
  });

  const normalizeCase = /[-_]/g;
  const spaceFirstLetter = / (.)/g;
  /**
    * Converts a string and converts it entirely into uppercase.
    *
    * @function upperCase
    * @type {Function}
    * @param {string} string - String to be converted into upper case.
    * @returns {string} - Converted string in upper case.
    *
    * @example
    * upperCase('upper case');
    * // => 'UPPER CASE'
  */
  const upperCase = (string) => {
    return string.replace(normalizeCase, ' ')
      .trim()
      .toUpperCase();
  };
  /**
    * Converts a string into Camel case format.
    *
    * @function camelCase
    * @type {Function}
    * @param {string} string - String to be converted into Camel case.
    * @returns {string} - Converted string in Camel case.
    *
    * @example
    * camelCase('camel case');
    * // => 'camelCase'
  */
  const camelCase = (string) => {
    return string.toLowerCase()
      .replace(spaceFirstLetter, (match) => {
        return match.toUpperCase();
      });
  };
  /**
    * Converts a string into Kebab case format.
    *
    * @function kebabCase
    * @type {Function}
    * @param {string} string - String to be converted into Kebab case.
    * @returns {string} - Converted string in Kebab case.
    *
    * @example
    * kebabCase('kebab case');
    * // => 'kebab-case'
  */
  const kebabCase = (string) => {
    return string.replace(normalizeCase, ' ')
      .trim()
      .toLowerCase()
      .replace(spaceFirstLetter, '-$1');
  };
  /**
    * Converts a string into snake case format.
    *
    * @function snakeCase
    * @type {Function}
    * @param {string} string - String to be converted into snake case.
    * @returns {string} - Converted string in Snake case.
    *
    * @example
    * snakeCase('snake case');
    * // => 'snake_case'
  */
  const snakeCase = (string) => {
    return string.replace(normalizeCase, ' ')
      .trim()
      .toLowerCase()
      .replace(spaceFirstLetter, '_$1');
  };
  assign($, {
    camelCase,
    kebabCase,
    snakeCase,
    upperCase,
  });

  /**
    * Replaces all occurrences of strings in an array with a value.
    *
    * @function replaceList
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @param {Array} array - Strings to replace.
    * @param {string} value - The match replacement.
    * @returns {string} - The string with the replacement.
    *
    * @example
    * replaceList('Her name was @user.', ['@user'], 'Lucy');
    * // => 'Her name was Lucy.'
  */
  const replaceList = (string, array, value) => {
    return string.replace(new RegExp(`\b${array.join('|')}\b`, 'gi'), value);
  };
  assign($, {
    replaceList
  });

  const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
  const andRegex = /&/g;
  const lessThanRegex = /</g;
  const moreThanRegex = />/g;
  const doubleQuoteRegex = /"/g;
  /**
    * Raw URL decoder.
    *
    * @function rawURLDecode
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @returns {string} - Converted string into the decoded URI Component .
    *
    * @example
    * rawURLDecode('Lucy%20saw%20diamonds%20in%20the%20sky.');
    * // => 'Lucy saw diamonds in the sky.'
  */
  const rawURLDecode = (string) => {
    return decodeURIComponent(string.replace(rawURLDecodeRegex, () => {
      return '%25';
    }));
  };
  /**
    * Replaced sensitive characters with their matching html entity.
    *
    * @function htmlEntities
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @returns {string} Replaced string.
    *
    * @example
    * htmlEntities(`<script>console.log('Lucy & diamonds.')</script>`);
    * // => '&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;'
  */
  const htmlEntities = (string) => {
    return string.replace(andRegex, '&amp;')
      .replace(lessThanRegex, '&lt;')
      .replace(moreThanRegex, '&gt;')
      .replace(doubleQuoteRegex, '&quot;');
  };
  /**
    * Executes rawURLDecode followd by htmlEntities methods on a string.
    *
    * @function sanitize
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @returns {string} Replaced string.
    *
    * @example
    * sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`);
    * // => '&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;'
  */
  const sanitize = (string) => {
    return htmlEntities(rawURLDecode(string));
  };
  assign($, {
    htmlEntities,
    rawURLDecode,
    sanitize
  });

  const tokenizeRegEx = /\S+/g;
  const wordsRegEx = /\w+/g;
  /**
    * Break string by non-white space characters matches.
    *
    * @function tokenize
    * @type {Function}
    * @param {string} string - String to be broken up.
    * @returns {Array} - Array of words without white space characters.
    *
    * @example
    * tokenize('I am Lucy!');
    * // => ["I", "am", "Lucy!"]
  */
  const tokenize = (string) => {
    return string.match(tokenizeRegEx) || [];
  };
  /**
    * Break string into word matches.
    *
    * @function words
    * @type {Function}
    * @param {string} string - String to be broken up.
    * @returns {Array} - Array of words with word characters only.
    *
    * @example
    * words('I am Lucy!');
    * // => ["I", "am", "Lucy"]
  */
  const words = (string) => {
    return string.match(wordsRegEx) || [];
  };
  assign($, {
    tokenize,
    words
  });

  const truncateDown = (string, maxLength, stringLength) => {
    const breakAll = string.split('');
    const breakAllLength = breakAll.length;
    let item;
    let index = stringLength - maxLength;
    for (; index < breakAllLength && index >= 0; index--) {
      item = breakAll[index];
      if (item === ' ') {
        break;
      }
    }
    return string.slice(0, index).trim();
  };
  const truncateUp = (string, maxLength, stringLength) => {
    const breakAll = string.split('');
    const breakAllLength = breakAll.length;
    let item;
    let index = maxLength;
    for (; index < breakAllLength && index > 0; index++) {
      item = breakAll[index];
      if (item === ' ') {
        break;
      }
    }
    return string.substr(index, stringLength).trim();
  };
  /**
    * Truncates the string, accounting for word placement and character count.
    *
    * @function truncate
    * @type {Function}
    * @param {string} string - String to be truncated.
    * @param {number} maxLength - The desired max length of the string.
    * @returns {string} - The mutated string.
    *
    * @example
    * truncate('Where is Lucy?', 2);
    * // => 'Where'
  */
  const truncate = (string, maxLength) => {
    const stringLength = string.length;
    return (stringLength > maxLength) ? truncateDown(string, maxLength, stringLength) : string;
  };
  /**
    * Truncates the string, accounting for word placement and character count from the right.
    *
    * @function truncateRight
    * @type {Function}
    * @param {string} string - String to be truncated.
    * @param {number} maxLength - The desired max length of the string.
    * @returns {string} - The mutated string.
    *
    * @example
    * truncateRight('Where is Lucy?', 6);
    * // => 'Lucy?'
  */
  const truncateRight = (string, maxLength) => {
    const stringLength = string.length;
    return (stringLength > maxLength) ? truncateUp(string, maxLength, stringLength) : string;
  };
  assign($, {
    truncate,
    truncateRight,
  });

  const spaceFirstLetter$1 = / (.)/g;
  /**
    * Returns the first letter capitalized.
    *
    * @function upperFirstLetter
    * @type {Function}
    * @param {string} string - String to extract first letter from.
    * @returns {string} - An upper case letter.
    *
    * @example
    * upperFirstLetter('upper');
    * // => 'U'
  */
  const upperFirstLetter = (string) => {
    return string[0].toUpperCase();
  };
  /**
    * Capitalizes the first letter.
    *
    * @function upperFirst
    * @type {Function}
    * @param {string} string - String to be mutated.
    * @returns {string} - String with first letter capitalized.
    *
    * @example
    * upperFirstLetter('upper');
    * // => 'Upper'
  */
  const upperFirst = (string) => {
    return upperFirstLetter(string) + restString(string);
  };
  /**
    * Capitalize all first letters.
    *
    * @function upperFirstAll
    * @type {Function}
    * @param {string} string - String to be mutated.
    * @returns {string} - String with all first letters capitalized.
    *
    * @example
    * upperFirstAll('Lucy is next up.');
    * // => 'Lucy Is Next Up.'
  */
  const upperFirstAll = (string) => {
    return string.replace(spaceFirstLetter$1, (match) => {
      return match.toUpperCase();
    });
  };
  /**
    * Capitalize first letter and lower case the rest.
    *
    * @function upperFirstOnly
    * @type {Function}
    * @param {string} string - String to be mutated.
    * @returns {string} - String with first letter capitalized.
    *
    * @example
    * upperFirstOnly('LYSERGIC ACID DIETHYLAMIDE');
    * // => 'Lysergic acid diethylamide'
  */
  const upperFirstOnly = (string) => {
    return upperFirstLetter(string) + restString(string).toLowerCase();
  };
  /**
    * Capitalize all first letters and lower case the rest.
    *
    * @function upperFirstOnlyAll
    * @type {Function}
    * @param {string} string - String to be mutated.
    * @returns {string} - String with all first letters capitalized.
    *
    * @example
    * upperFirstOnlyAll('LYSERGIC ACID DIETHYLAMIDE');
    * // => 'Lysergic Acid Diethylamide'
  */
  const upperFirstOnlyAll = (string) => {
    return string.toLowerCase()
      .replace(spaceFirstLetter$1, (match) => {
        return match.toUpperCase();
      });
  };
  assign($, {
    upperFirst,
    upperFirstAll,
    upperFirstOnly,
    upperFirstOnlyAll,
  });

  /**
    * Creates new object with deeply assigned values from another object/array.
    *
    * @function assignDeep
    * @type {Function}
    * @param {Object} object - Object to be assigned new properties.
    * @param {Object} otherObject - Object from which properties are extracted.
    * @param {boolean} [mergeArrays = true] - Array from which items are assigned to the new object.
    * @returns {Object} - Returns object with the newly assigned properties.
    *
    * @example
    * assignDeep({a:1}, {b:2})
    * //=> {a:1, b:2}
    *
  */
  const assignDeep = (object, otherObject, mergeArrays = true) => {
    each(otherObject, (item, key) => {
      if (isPlainObject(item) && isPlainObject(object[key])) {
        assignDeep(object[key], item, mergeArrays);
      } else if (mergeArrays && isArray(item) && isArray(object[key])) {
        object[key].push(...item);
      } else {
        object[key] = item;
      }
    });
    return object;
  };
  assign($, {
    assignDeep
  });

  const functionPrototype = Function.prototype;
  /**
    * Caches a prototype method.
    *
    * @function cacheNativeMethod
    * @type {Function}
    * @param {Function} method - Prototype method.
    * @returns {Function} - Cached method.
    *
    * @example
    * cacheNativeMethod(Array.prototype.push);
    * // => function call() { [native code] }
  */
  function cacheNativeMethod(method) {
    return functionPrototype.call.bind(method);
  }
  assign($, {
    cacheNativeMethod
  });

  /**
     * Checks if a property on an object has a value. If not, it will assign a value.
     *
     * @function ifNotEqual
     * @type {Function}
     * @param {Object} rootObject - The object to check.
     * @param {string} property - The property name which is to be checked.
     * @param {*} equalThis - The reassignment value for the property being checked.
     * @returns {Object} - Returns the provided rootObject.
     *
     * @example
     * ifNotEqual({}, 'a', 1);
     * // => {a:1}
   */
  const ifNotEqual = (rootObject, property, equalThis) => {
    if (property && !hasValue(rootObject[property])) {
      rootObject[property] = equalThis;
    }
    return rootObject;
  };
  assign($, {
    ifNotEqual,
  });

  /**
     * Performs a deep comparison between two objects.
     *
     * @function isEqual
     * @type {Function}
     * @param {Object} source - Source object.
     * @param {Object} compareObject - Object to compare to source.
     * @returns {boolean} Returns the true or false.
     *
     * @example
     * isEqual({a: [1,2,3]}, {a: [1,2,3]});
     * // => true
   */
  const isEqual = (object, compareObject) => {
    if (object === compareObject) {
      return true;
    } else if (object.toString() === compareObject.toString()) {
      if (isPlainObject(object)) {
        const sourceProperties = keys(object);
        if (isMatchArray(sourceProperties, keys(compareObject))) {
          return whileArray(sourceProperties, (key) => {
            return isEqual(object[key], compareObject[key]);
          });
        }
      } else if (isArray(object)) {
        if (object.length === compareObject.length) {
          return whileArray(object, (item, index) => {
            return isEqual(item, compareObject[index]);
          });
        }
      }
    }
    return false;
  };
  assign($, {
    isEqual,
  });

  /**
    * Using a deep comparison it checks if properties of two objects using an array are equal.
    *
    * @function propertyMatch
    * @type {Function}
    * @property {Object} - takes an object.
    * @property {Object} - takes an object.
    * @property {Array} - takes in an array of properties.
    *
    * @example
    * propertyMatch({
    *   a: 1,
    *   b: 2
    * }, {
    *   a: 1,
    *   b: 2
    * }, ['a', 'b']);
    * //-> true
  */
  const propertyMatch = (object, compareObject, properties = keys(object)) => {
    return whileArray(properties, (property) => {
      return isEqual(object[property], compareObject[property]);
    });
  };
  assign($, {
    propertyMatch,
  });

  const regexToPath = /\.|\[/;
  const regexCloseBracket = /]/g;
  const emptyString = '';
  /**
    * Breaks up string into object chain list.
    *
    * @function toPath
    * @type {Function}
    * @param {string} string - String to be broken up.
    * @returns {Array} - Array used to go through object chain.
    * 
    * @example
    * toPath('post.like[2]');
    * //=> ['post', 'like', '2']
  */
  const toPath = (string) => {
    return string.replace(regexCloseBracket, emptyString).split(regexToPath);
  };
  assign($, {
    toPath,
  });

  let count = 0;
  const uidFree = [];
  const uidClosed = {};
  /**
    * Creates a numerical unique ID and recycles old ones. UID numerically ascends however freed UIDs are later reused.
    *
    * @function uid
    * @category utility
    * @type {Function}
    * @returns {number} - Returns a unique id.
    *
    * @example
    * uid();
    * //=> 0
    *
    * uid();
    * //=> 1
  */
  const uid = () => {
    let result = uidFree.shift(uidFree);
    if (!hasValue(result)) {
      result = count;
      uidClosed[result] = true;
      count++;
    }
    return result;
  };
  /**
    * Frees an UID so that it may be recycled for later use.
    *
    * @function free
    * @memberof uid
    * @type {Function}
    * @param {number} id - Number to be freed.
    * @returns {undefined} - Nothing is returned.
    *
    * @example
    * uid();
    * //=> 0
    *
    * uid();
    * //=> 1
    *
    * uid.free(0);
    * //=> undefined
    *
    * uid();
    * //=> 0
  */
  const free = (id) => {
    uidClosed[id] = null;
    uidFree.push(id);
  };
  uid.free = free;
  assign($, {
    uid,
  });

  /**
    * Returns property on an object.
    *
    * @function get
    * @type {Function}
    * @param  {string} propertyString - String used to retrieve properties.
    * @param {Object} objectChain - Object which has a property retrieved from it.
    * @returns {Object} - Returns property from the given object.
    *
    * @example
    * get('post.like[2]', {
    *   post: {
    *     like: ['a','b','c']
    *   }
    * });
    * //=> c
  */
  const get = (propertyString, objectChain = $) => {
    let link = objectChain;
    whileArray(toPath(propertyString), (item) => {
      link = link[item];
      return hasValue(link);
    });
    return link;
  };
  assign($, {
    get
  });

  /**
    * Set & Get a model.
    *
    * @function model
    * @type {Function}
    * @param {string} modelName - Name of the model.
    * @property {Object} - The model object.
    * @returns {*} Returns the associated model.
    *
    * @example
    * model('test', {a: 1});
    * //=> {a: 1}
    *
    * model('test');
    * //=> {a: 1}
  */
  const model = (modelName, object) => {
    if (hasValue(object)) {
      model[modelName] = object;
    }
    return get(modelName, model);
  };
  $.superMethod(model);
  assign($, {
    model
  });

  /**
    * Performs a toggle between 2 values using a deep or strict comparison.
    *
    * @function toggle
    * @type {Function}
    * @param  {(string|number|Object|Array)} value - Strictly compared against the on argument.
    * @param {(string|number|Object|Array)} on -  Strictly compared against the value argument.
    * @param {(string|number|Object|Array)} off -  Value to be returned.
    * @returns {(string|number|Object|Array)} - The opposing value to the current.
    *
    * @example
    * toggle(1, 2, 3);
    * //=> 2
  */
  const toggle = (value, on, off) => {
    return (isEqual(on, value)) ? off : on;
  };
  assign($, {
    toggle
  });

  const returnFlow = (method) => {
    return (...methods) => {
      return (arg) => {
        let value = arg;
        method(methods, (item) => {
          value = item(value);
        });
        return value;
      };
    };
  };
  /**
    * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
    *
    * @function flow
    * @type {Function}
    * @param {Array} eachArray - Array to flatten
    * @returns {*}
    *
    * @example
    * flow(increment, increment, deduct)(0);
    * // => 2
  */
  const flow = returnFlow(eachArray);
  /**
    * This method is like flow except that it creates a function that invokes the given functions from right to left.
    *
    * @function flowRight
    * @type {Function}
    * @param {Array} eachArray - Array to flatten
    * @returns {*}
    *
    * @example
    * flowRight(increment, increment, deduct)(0);
    * // => 2
  */
  const flowRight = returnFlow(eachArrayRight);
  assign($, {
    flow,
    flowRight,
  });

  const returnFlow$1 = (method) => {
    return (...methods) => {
      return async (arg) => {
        let value = arg;
        await method(methods, async (item) => {
          value = await item(value);
        });
        return value;
      };
    };
  };
  /**
    * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
    *
    * @function flowAsync
    * @type {Function}
    * @param {Array} eachArray - Array to flatten
    * @returns {*}
    *
    * @example
    * flowAsync(increment, increment, deduct)(0);
    * // => 2
  */
  const flowAsync = returnFlow$1(eachAsync);
  /**
    * This method is like flow except that it creates a function that invokes the given functions from right to left.
    *
    * @function flowRightAsync
    * @type {Function}
    * @param {Array} eachArray - Array to flatten
    * @returns {*}
    *
    * @example
    * flowRightAsync(increment, increment, deduct)(0);
    * // => 2
  */
  const flowAsyncRight = returnFlow$1(eachAsyncRight);
  assign($, {
    flowAsync,
    flowAsyncRight,
  });

  return $;

})));
//# sourceMappingURL=bundle.js.map
