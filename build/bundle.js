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
   * @param {string} modelName - Model key.
   * @param {Object} model - An object that is saved as the value using the modelName as the string.
   * @returns {Object} The model associated with the modelName as the key.
   *
   * @example
   * $('modelName', {example: 1});
   * // -> {example: 1}
   */
  const $ = (...args) => {
    return cacheSuper(...args);
  };
  /**
   * Re-assigns the main Acid function.
   *
   * @function $.superMethod
   * @param {Function} method - The function that will become the main object's method.
   *
   * @example
   * $.superMethod($.get);
   * // -> $('flow', $);
   * // -> $.flow
   */
  $.superMethod = (method) => {
    cacheSuper = method;
  };

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

  const asyncEach = async (array, arg) => {
    const arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      const item = array[index];
      await item(arg, index, arrayLength);
    }
  };
  assign($, {
    asyncEach,
  });

  const whileGenerator = (optBool) => {
    return (array, iteratee) => {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        if (iteratee(array[index], index, array, arrayLength) !== optBool) {
          break;
        }
      }
    };
  };
  const times = (startArg, endArg, iterateeArg) => {
    const start = (iterateeArg) ? startArg : 0;
    const end = (iterateeArg) ? endArg : startArg;
    const iteratee = iterateeArg || endArg;
    for (let position = start; position < end; position++) {
      iteratee(position, start, end);
    }
  };
  const timesMap = (startArg, endArg, iterateeArg) => {
    const start = (iterateeArg) ? startArg : 0;
    const end = (iterateeArg) ? endArg : startArg;
    const iteratee = iterateeArg || endArg;
    const results = [];
    let result;
    times(start, end, (position) => {
      result = iteratee(position, results, start, end);
      if (hasValue(result)) {
        results.push(result);
      }
    });
    return results;
  };
  const eachArrayRight = (array, iteratee) => {
    const arrayLength = array.length;
    for (let index = arrayLength - 1; index >= 0; index--) {
      iteratee(array[index], index, array, arrayLength);
    }
  };
  const eachArray = (array, iteratee) => {
    const arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      iteratee(array[index], index, array, arrayLength);
    }
  };
  const generateMap = (method) => {
    return (array, iteratee) => {
      const results = [];
      method(array, (item, index, arrayOriginal, arrayLength) => {
        results[index] = iteratee(item, index, results, arrayOriginal, arrayLength);
      });
      return results;
    };
  };
  const compactMapArray = (array, iteratee) => {
    const results = [];
    let returned;
    eachArray(array, (item, index, arrayOriginal, arrayLength) => {
      returned = iteratee(item, index, results, arrayOriginal, arrayLength);
      if (hasValue(returned)) {
        results.push(returned);
      }
    });
    return results;
  };
  const filterArray = (array, iteratee) => {
    const results = [];
    eachArray(array, (item, index, arrayOriginal, arrayLength) => {
      if (iteratee(item, index, results, arrayOriginal, arrayLength) === true) {
        results.push(item);
      }
    });
    return results;
  };
  const mapWhile = (array, iteratee) => {
    const arrayLength = array.length;
    const results = [];
    let returned;
    for (let index = 0; index < arrayLength; index++) {
      returned = iteratee(array[index], index, results, array, arrayLength);
      if (!returned) {
        break;
      }
      results[index] = returned;
    }
    return results;
  };
  const mapArray = generateMap(eachArray);
  const mapArrayRight = generateMap(eachArrayRight);
  const eachWhile = whileGenerator(true);
  assign($, {
    compactMapArray,
    eachArray,
    eachArrayRight,
    eachWhile,
    filterArray,
    mapArray,
    mapArrayRight,
    mapWhile,
    times,
    timesMap,
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

  const ensureArray = (object) => {
    return (isArray(object)) ? object : [object];
  };
  assign($, {
    ensureArray
  });

  // Flattens a nested array. Pass level to flatten up to a depth;
  const flatten = (arrayArg, level = 1) => {
    let array = arrayArg;
    for (let i = 0; i < level; i++) {
      array = array.reduce((previousValue, currentValue) => {
        return previousValue.concat(ensureArray(currentValue));
      }, []);
    }
    return array;
  };
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
   * Removes all occurrences of the passed in items from the array and returns the array.
   *
   * @function remove
   * @param {Array} array - Mutated Array without with removed occurrences.
   * @param {Array} removeThese - Items to remove from the array.
   * @returns {Array} The array this method was called on.
   *
   * @example
   * const array = [1, 2, 3, 3, 4, 3, 5];
   *
   * remove(array,1);
   * // -> [2, 3, 3, 4, 3, 5]
   *
   * remove(array,3);
   * // -> [2, 4, 5]
   *
   * remove(array,[2, 5]);
   * // -> [4]
   */
  const remove = (array, removeThese) => {
    const removeTheseArray = ensureArray(removeThese);
    eachArray(array, (item) => {
      if (removeTheseArray.includes(item)) {
        array.splice(array, removeTheseArray.indexOf(item), 1);
      }
    });
    return array;
  };
  assign($, {
    remove
  });

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

  const returnFlow = (method) => {
    return (...funcs) => {
      return (arg) => {
        let value;
        method(funcs, (item) => {
          const temp = (hasValue(value)) ? value : arg;
          value = item(temp);
        });
        return value;
      };
    };
  };
  // Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
  const flow = returnFlow(eachArray);
  // Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
  const flowRight = returnFlow(eachArrayRight);
  assign($, {
    flow,
    flowRight,
  });

  const rest = (array) => {
    return array.slice(1, array.length - 1);
  };
  assign($, {
    rest
  });

  const clear = (array) => {
    array.length = 0;
    return array;
  };
  assign($, {
    clear,
  });

  const arraySortToObject = (func, array, sortedObject = {}) => {
    eachArray(array, (item, key) => {
      func(item, key, sortedObject);
    });
    return sortedObject;
  };
  assign($, {
    arraySortToObject
  });

  const groupBy = (array, funct) => {
    return arraySortToObject((item, index, objectArg) => {
      const results = funct(item);
      if (!objectArg[results]) {
        objectArg[results] = [];
      }
      objectArg[results].push(item);
    }, array);
  };
  assign($, {
    groupBy
  });

  // start from end array using amount as index
  const right = (array, amount) => {
    return array[array.length - 1 - amount];
  };
  assign($, {
    right
  });

  const cloneArray = (array) => {
    return array.splice();
  };
  assign($, {
    cloneArray
  });

  const mathNative = Math;
  const floorMethod = mathNative.floor;
  const randomMethod = mathNative.random;
  const add = (number, value) => {
    return number + value;
  };
  const minus = (number, value) => {
    return number - value;
  };
  const divide = (number, value) => {
    return number / value;
  };
  const multiply = (number, value) => {
    return number * value;
  };
  const remainder = (number, value) => {
    return number % value;
  };
  const increment = (number) => {
    return number + 1;
  };
  const deduct = (number) => {
    return number - 1;
  };
  // Returns a random number between min (inclusive) and max (exclusive)
  const randomArbitrary = (max, min = 0) => {
    return randomMethod() * (max - min) + min;
  };
  // Returns a random integer between min (included) and max (excluded)
  const randomInt = (max, min = 0) => {
    return floorMethod(randomMethod() * (max - min)) + min;
  };
  assign($, {
    add,
    minus,
    divide,
    multiply,
    remainder,
    increment,
    deduct,
    randomArbitrary,
    randomInt
  });

  /*
    Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
    sample([1,2,3,4] , 2);
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

  const compact = (array) => {
    return array.filter((item) => {
      return isString(item) && !item.length ? false : item;
    });
  };
  assign($, {
    compact,
  });

  // Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
  const indexBy = (array, index) => {
    return arraySortToObject((item, key, object) => {
      object[item[index]] = item;
    }, array);
  };
  assign($, {
    indexBy
  });

  const arrayNative = Array;
  const toArray = arrayNative.from;
  assign($, {
    toArray,
  });

  // shuffle an array and return a new array
  const shuffle = (array, amount = 1) => {
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

  const countBy = (array, funct) => {
    const object = {};
    let result;
    eachArray(array, (item) => {
      result = funct(item);
      if (!object[result]) {
        object[result] = 0;
      }
      object[result]++;
    });
    return object;
  };
  const countKey = (array, keyName) => {
    let count = 0;
    eachArray(array, (item) => {
      if (item[keyName]) {
        count++;
      }
    });
    return count;
  };
  const countNoKey = (array, keyName) => {
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
    countNoKey
  });

  const initial = (array) => {
    return array.slice(0, array.length - 1);
  };
  assign($, {
    initial
  });

  const mathNativeMin = Math.min;
  // get smallest number from array
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
  const range = (start, end, increment = 1) => {
    if (start < end) {
      return rangeUp(start, end, increment);
    } else {
      return rangeDown(start, end, increment);
    }
  };
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
    let yes;
    return compactMapArray(array, (item) => {
      yes = true;
      eachWhile(arrays, (otherItem) => {
        if (!otherItem.includes(item)) {
          yes = false;
        }
        return yes;
      });
      if (yes) {
        return item;
      }
    });
  };
  assign($, {
    intersect
  });

  /*
  	Perform alphabetical sort on collection on provided key name
  */
  const sortAlpha = (collection, key) => {
    let currentKey;
    let nextKey;
    collection.sort((current, next) => {
      currentKey = current[key];
      nextKey = next[key];
      if (currentKey < nextKey) {
        return -1;
      } else if (currentKey > nextKey) {
        return 1;
      }
      return 0;
    });
    return collection;
  };
  assign($, {
    sortAlpha
  });

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

  // Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
  const invoke = (array, methodName, args) => {
    return mapArray(array, (item) => {
      return item[methodName](...args);
    });
  };
  assign($, {
    invoke
  });

  const drop = (array, amount, arrayLength = array.length) => {
    return array.splice(amount, arrayLength);
  };
  const dropRight = (array, amount) => {
    return drop(array, 0, array.length - amount);
  };
  assign($, {
    drop,
    dropRight
  });

  const isMatchArray = (original, array) => {
    let result = false;
    if (array.length === original.length) {
      eachWhile(original, (item, index) => {
        result = array[index] !== item;
        return result;
      });
    }
    return result;
  };
  assign($, {
    isMatchArray,
  });

  // Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
  const sortedIndex = (array, n) => {
    let min = 0;
    eachArray(array, (item, index) => {
      if (n > item) {
        min = index;
      }
    });
    if (min > 0) {
      min = min + 1;
    }
    return min;
  };
  assign($, {
    sortedIndex
  });

  // get largest number from array
  const mathNativeMax = Math.max;
  const largest = (array) => {
    return mathNativeMax(...array);
  };
  assign($, {
    largest
  });

  const sumOf = (array, resultArg = 0) => {
    let result = resultArg;
    let item;
    eachArray(array, (itemArg) => {
      item = itemArg;
      if (item) {
        result = result + Number(item);
      }
    });
    return result;
  };
  assign($, {
    sumOf
  });

  /*
    const array = [async function(...args){
      console.log(1,args);
    }, async function(...args){
      console.log(2,args);
    }];
    acid.asyncEach(array,[3,4]);
  */
  const eachAsync = async (array, funct) => {
    const arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      await funct(array[index], index, arrayLength);
    }
  };
  assign($, {
    eachAsync,
  });

  // Returns the last element of an array. Passing n will return the last n elements of the array.
  const last = (array, indexFrom) => {
    const arrayLength = array.length;
    return (indexFrom) ? array.slice(arrayLength - indexFrom, arrayLength) : array[arrayLength - 1];
  };
  assign($, {
    last
  });

  const take = (array, amount) => {
    return array.slice(0, amount);
  };
  const takeRight = (array, amount) => {
    return array.slice(array.length - amount, amount);
  };
  assign($, {
    take,
    takeRight
  });

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
  const unique = (array, isSorted) => {
    if (isSorted) {
      return array.filter(sortUnique);
    }
    return array.filter(onlyUnique);
  };
  assign($, {
    unique
  });

  // Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
  const union = (...args) => {
    const result = [];
    eachArray(args, (array) => {
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

  const compactMapAsync = async (array, funct) => {
    const results = [];
    let result;
    await eachAsync(array, async (item, index, arrayLength) => {
      result = await funct(item, index, arrayLength);
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
   * Sorts an array in place using a numerical comparison algorithm
   * (sorts numbers from lowest to highest) and returns the array.
   *
   * @function numsort
   * @returns {Array} The array this method was called on.
   *
   * @example
   * var files = [10, 0, 2, 1];
   * numsort(files);
   * console.log(files);
   * // -> [0, 1, 2, 3]
   */
  const numSort = (array) => {
    return array.sort(numericalCompare);
  };
  assign($, {
    numSort
  });

  const findDifference = (array, sum) => {
    const returnedObject = {};
    const arrayLength = array.length;
    let item;
    let end;
    let check;
    for (let index = 0; index < arrayLength; index++) {
      item = array[index];
      end = sum - item;
      check = array.indexOf(end);
      if (check !== -1 && check !== index) {
        returnedObject.start = item;
        returnedObject.end = end;
        returnedObject.startIndex = index;
        returnedObject.endIndex = check;
        break;
      }
    }
    return returnedObject;
  };
  assign($, {
    findDifference
  });

  // Converts arrays into objects.
  const arrayToObject = (values, keys$$1) => {
    return arraySortToObject((item, index, objectArg) => {
      objectArg[keys$$1[index]] = item;
    }, values);
  };
  assign($, {
    arrayToObject
  });

  // Returns a copy of the array with all instances of the values removed.
  const without = (array, ...args) => {
    return array.filter((item) => {
      return !args.includes(item);
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
  const findItem = (array, indexMatch, propertyName = 'id') => {
    const result = array.find((element, index) => {
      return findIndexCache(element, index, array, indexMatch, propertyName);
    });
    return (result === -1) ? false : result;
  };
  const findIndex = (array, indexMatch, propertyName = 'id') => {
    const result = array.findIndex((element, index) => {
      return findIndexCache(element, index, array, indexMatch, propertyName);
    });
    return (result === -1) ? false : result;
  };
  assign($, {
    findItem,
    findIndex
  });

  // Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
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

  // Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
  const xor = (others) => {
    const xored = [];
    eachArray(others, (array) => {
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

  const findSum = (array, sum) => {
    const returnedObject = {};
    const arrayLength = array.length;
    let item;
    let end;
    let check;
    for (let index = 0; index < arrayLength; index++) {
      item = array[index];
      end = sum - item;
      check = array.indexOf(end);
      if (check !== -1 && check !== index) {
        returnedObject.start = item;
        returnedObject.end = end;
        returnedObject.startIndex = index;
        returnedObject.endIndex = check;
        break;
      }
    }
    return returnedObject;
  };
  assign($, {
    findSum
  });

  // Pluck an attribute from each object in an array.
  const pluck = (array, pluckThis) => {
    let pluckMethod;
    if (isArray(pluckThis)) {
      pluckMethod = (item) => {
        return arraySortToObject((pluckItem, pluckKey, object) => {
          object[pluckItem] = item[pluckItem];
        }, pluckThis);
      };
    } else {
      pluckMethod = (item) => {
        const result = item[pluckThis];
        return result;
      };
    }
    return mapArray(array, pluckMethod);
  };
  assign($, {
    pluck
  });

  // Merges together the values of each of the arrays with the values at the corresponding position.
  const zip = (...args) => {
    return args[0].map((item, index) => {
      return args.map((array) => {
        return array[index];
      });
    });
  };
  // unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
  const unZip = (array) => {
    return array[0].map((item, index) => {
      return array.map((arraySet) => {
        return arraySet[index];
      });
    });
  };
  assign($, {
    zip,
    unZip
  });

  const first = (array, upTo) => {
    return (upTo) ? array.slice(0, upTo) : array[0];
  };
  assign($, {
    first
  });

  /**
   * Sorts an array in place using a reverse numerical comparison algorithm
   * (sorts numbers from highest to lowest) and returns the array.
   *
   * @function rnumsort
   * @returns {Array} The array this method was called on.
   *
   * @example
   * var files = [10, 0, 2, 1];
   * rnumsort(files);
   * // -> [3, 2, 1, 0]
   */
  const numericalCompareReverse = (a, b) => {
    return b - a;
  };
  const rNumSort = (array) => {
    return array.sort(numericalCompareReverse);
  };
  assign($, {
    rNumSort
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

  const eachObject = (thisObject, iteratee) => {
    const objectKeys = keys(thisObject);
    eachArray(keys, (key, index, array, propertyCount) => {
      iteratee(thisObject[key], key, thisObject, propertyCount, objectKeys);
    });
  };
  const mapObject = (object, iteratee) => {
    const results = {};
    eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
      results[key] = iteratee(item, key, results, thisObject, propertyCount, objectKeys);
    });
    return results;
  };
  const compactMapObject = (object, iteratee) => {
    const results = {};
    let result;
    eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
      result = iteratee(item, key, results, propertyCount, objectKeys);
      if (hasValue(result)) {
        results[key] = result;
      }
    });
    return results;
  };
  const filterObject = (object, iteratee) => {
    const results = {};
    let result;
    eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
      if (iteratee(item, key, results, propertyCount, objectKeys) === true) {
        results[key] = result;
      }
    });
    return results;
  };
  const mapProperty = (thisObject, iteratee) => {
    const results = {};
    const properties = getOwnPropertyNames(thisObject);
    eachArray(properties, (item, key, propertyCount) => {
      results[item] = iteratee(thisObject[item], item, results, properties, propertyCount, thisObject);
    });
    return thisObject;
  };
  assign($, {
    compactMapObject,
    eachObject,
    filterObject,
    mapObject,
    mapProperty,
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
    * @returns {string} The string with the text inserted at the given point.
    *
    * @example
    * insertInRange('A from Lucy.', 1, ' tab');
    * // => A tab from Lucy.
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
    * @returns {string} A letter at the given index.
    *
    * @example
    * rightString('rightString');
    * // => g
    *
    * rightString('rightString', 2);
    * // => n
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
    * @returns {Array} An array with strings that are <= size parameter.
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
    * //-> initialStrin
    *
    * initialString('initialString', 2);
    * //-> initialStri
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
    * @returns {string} A string without the characters up-to to the index.
    *
    * @example
    * restString('restString');
    * //-> estString
    *
    * restString('restString', 2);
    * //-> stString
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
     * @function jsonParse
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

  const sortNewest = (arrayArg, key, pureMode) => {
    const array = (pureMode) ? arrayArg : [...arrayArg];
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
  const getNewest = (array, key) => {
    return sortNewest(array, key)[0];
  };
  assign($, {
    getNewest,
    sortNewest,
  });

  const sortOldest = (arrayArg, key, pureMode) => {
    const array = (pureMode) ? arrayArg : [...arrayArg];
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
  const getOldest = (array, key) => {
    return sortOldest(array, key)[0];
  };
  assign($, {
    getOldest,
    sortOldest,
  });

  // Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
  const ary = (funct, amount) => {
    return (...args) => {
      return funct(...args.splice(0, amount));
    };
  };
  assign($, {
    ary
  });

  const curry = (funts) => {
    const args = [];
    const curried = (...curryArgs) => {
      eachArray(curryArgs, (item) => {
        args.push(item);
      });
      return curried;
    };
    curried.result = () => {
      const results = funts(...args);
      clear(args);
      return results;
    };
    return curried;
  };
  const curryRight = (funts) => {
    const args = [];
    const curried = (...curryArgs) => {
      eachArray(curryArgs, (item) => {
        args.unshift(item);
      });
      return curried;
    };
    curried.result = () => {
      const results = funts(...args);
      clear(args);
      return results;
    };
    return curried;
  };
  assign($, {
    curry,
    curryRight
  });

  // Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
  const once = (fn) => {
    let value;
    const onlyOnce = (...args) => {
      if (!value) {
        value = fn(...args);
      }
      return value;
    };
    return onlyOnce;
  };
  // Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
  const afterFn = (amountArg, fn) => {
    let amount = amountArg;
    const onlyAfter = (...args) => {
      amount--;
      if (amount < 0) {
        return fn(...args);
      }
    };
    return onlyAfter;
  };
  // Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
  const beforeFn = (amountArg, fn) => {
    let amount = amountArg;
    const onlyBefore = (...args) => {
      amount--;
      if (amount > 0) {
        return fn(...args);
      }
    };
    return onlyBefore;
  };
  // Creates a function that executes func, with the this binding and arguments of the created function, only after or equal to being called n times.
  const onAfter = (amount, fn) => {
    return afterFn(amount - 1, fn);
  };
  // Creates a function that executes func, with the this binding and arguments of the created function, only before or equal to being called n times.
  const onBefore = (amount, fn) => {
    return beforeFn(amount + 1, fn);
  };
  assign($, {
    onAfter,
    onBefore,
    once
  });

  const stubObject = () => {
    return {};
  };
  const stubArray = () => {
    return [];
  };
  const stubString = () => {
    return '';
  };
  const stubFalse = () => {
    return false;
  };
  const stubTrue = () => {
    return true;
  };
  const noop = () => {
    return undefined;
  };
  assign($, {
    stubObject,
    stubArray,
    stubString,
    stubTrue,
    stubFalse,
    noop
  });

  const forEachWrap = (object, callback) => {
    return object.forEach(callback);
  };
  const generateCheckLoops = (arrayLoop, objectLoop) => {
    return (object, iteratee) => {
      let returned;
      if (!hasValue(object)) {
        return;
      } else if (isArray(object)) {
        returned = arrayLoop;
      } else if (isPlainObject(object) || isFunction(object)) {
        returned = objectLoop;
      } else if (object.forEach) {
        returned = forEachWrap;
      } else {
        returned = objectLoop;
      }
      return returned(object, iteratee);
    };
  };
  /**
    * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
    *
    * @function map
    * @type {Function}
    * @param {(Array|Object|Map|WeakMap|Function|Set)} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @returns {Object} A mapped object with matching keys and values returned from the iteratee.
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
    * Iterates through the given object.
    *
    * @function map
    * @type {Function}
    * @param {(Array|Object|Map|WeakMap|Function|Set)} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @returns {Object} The originally given object.
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
    * Iterates through the calling object and creates a new object based on the calling object's type with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
    *
    * @function compactMap
    * @type {Function}
    * @param {(Array|Object|Map|WeakMap|Function|Set)} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @returns {Object} A mapped object with matching keys and values returned from the iteratee.
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
  /**
    * Iterates through the given and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
    *
    * @function filter
    * @type {Function}
    * @param {(Array|Object|Map|WeakMap|Function|Set)} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @returns {Object} A new object of the same calling object's type.
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
  assign($, {
    compactMap,
    each,
    filter,
    map
  });

  const bindAll = (bindThese, withThis) => {
    return map(bindThese, (item) => {
      return isFunction(item) ? item.bind(withThis) : item;
    });
  };
  assign($, {
    bindAll
  });

  // Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
  const negate = (func) => {
    return (...args) => {
      return !func(...args);
    };
  };
  assign($, {
    negate
  });

  const overEvery = (array) => {
    return (...args) => {
      let result;
      array.find(array, (item) => {
        result = Boolean(item(...args));
        return result;
      });
      return result;
    };
  };
  const over = (array) => {
    return (...args) => {
      return array.map((item) => {
        return item(...args);
      });
    };
  };
  assign($, {
    over,
    overEvery,
  });

  const timer = (fn, time) => {
    return setTimeout(fn, time);
  };
  const interval = (fn, time) => {
    return setInterval(fn, time);
  };


  const debounce = (original, time) => {
    let timeout = false;
    const fn = (...args) => {
      if (timeout !== false) {
        clearTimeout(timeout);
      }
      timeout = timer(() => {
        original(...args);
        timeout = false;
      }, time);
    };
    fn.clear = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = false;
      }
    };
    return fn;
  };
  const throttle = (func, time) => {
    let timeout = false;
    let shouldThrottle;
    const fn = (...args) => {
      if (timeout) {
        shouldThrottle = true;
        return;
      }
      func(...args);
      timeout = timer(() => {
        if (shouldThrottle) {
          func(...args);
        }
        timeout = false;
      }, time);
    };
    fn.clear = () => {
      clearTimeout(timeout);
      timeout = false;
    };
    return fn;
  };
  assign($, {
    debounce,
    interval,
    throttle,
    timer,
  });

  const addLink = (link, addToChain) => {
    each(addToChain, (item, key) => {
      link.methods[key] = (...args) => {
        args.unshift(link.value);
        item(...args);
        return link.methods;
      };
    });
    return link;
  };
  const chain = (methods) => {
    const link = (value) => {
      link.value = value;
      return link.methods;
    };
    assign(link, {
      methods: {},
      link(addToChain) {
        return addLink(link, addToChain);
      },
      done() {
        const value = link.value;
        link.value = null;
        return value;
      }
    });
    link.link(methods);
    return link;
  };
  assign($, {
    chain
  });

  const inSync = (fns, arg) => {
    return each(fns, (item) => {
      item(arg);
    });
  };
  const inAsync = async (fns, arg) => {
    await eachAsync(fns, async (item) => {
      await item(arg);
    });
  };
  assign($, {
    inAsync,
    inSync,
  });

  const nthArg = (numArg) => {
    let num = numArg;
    return (...args) => {
      if (num < 0) {
        num = args.length - (num * -1);
      }
      return args[num];
    };
  };
  assign($, {
    nthArg
  });

  // Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
  const reArg = (funct, list) => {
    return (...args) => {
      return funct(...list.map((item) => {
        return args[item];
      }));
    };
  };
  /*
  var rearg=(function(a, b, c) {
    return [a, b, c];
  },[1,2,0]);

  rearg(1,2,3);
  -> [2, 3, 1]
  */
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
      list,
      add(...addTheseArg) {
        list.push(...addTheseArg);
      },
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
      list,
      add(...addThese) {
        list.unshift(...addThese.reverse());
      },
    });
    wrapped.add(args);
    return wrapped;
  };
  assign($, {
    wrap,
    wrapBefore
  });

  const isZero = (item) => {
    return item === 0;
  };
  const isNumberEqual = (item, num) => {
    return item === num;
  };
  const isNumberInRange = (num, start = 0, end = start) => {
    return num > start && num < end;
  };
  assign($, {
    isNumberInRange,
    isNumberEqual,
    isZero
  });

  const assignDeep = (object, otherObject, mergeArrays) => {
    eachObject(otherObject, (item, key) => {
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

  const hasKeys = (object, properties) => {
    let flag = false;
    const objectKeys = keys(object);
    eachWhile(properties, (item) => {
      flag = objectKeys.include(item);
      return flag;
    });
    return flag;
  };
  const hasAnyKeys = (object, properties) => {
    const objectKeys = keys(object);
    const flag = properties.find((item) => {
      return objectKeys.include(item);
    });
    return flag;
  };
  assign($, {
    hasAnyKeys,
    hasKeys,
  });

  /*
  	Performs a deep comparison between object and source to determine if object contains equivalent property values.
  */
  const isEqual = (object, compareObject) => {
    let result = false;
    if (object === compareObject) {
      result = true;
    } else if (object.toString() === compareObject.toString()) {
      if (isPlainObject(object)) {
        const sourceProperties = keys(object);
        if (isMatchArray(sourceProperties, keys(compareObject))) {
          eachWhile(sourceProperties, (key) => {
            result = isEqual(object[key], compareObject[key]);
            return result;
          });
        }
      } else if (isArray(object)) {
        if (object.length === compareObject.length) {
          eachWhile(object, (item, index) => {
            result = isEqual(item, compareObject[index]);
            return result;
          });
        }
      }
    }
    return result;
  };
  assign($, {
    isEqual,
  });

  const pick = (array, originalObject, newObject) => {
    return arraySortToObject((item, key, object) => {
      object[item] = originalObject[item];
    }, array, newObject);
  };
  assign($, {
    pick
  });

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

  const isMatchObject = (source, compare) => {
    let result = false;
    const sourceProperties = keys(source);
    if (isMatchArray(sourceProperties, keys(compare))) {
      eachWhile(sourceProperties, (key) => {
        result = source[key] === compare[key];
        return result;
      });
    }
    return result;
  };
  assign($, {
    isMatchObject,
  });

  const zipObject = (keys$$1, values) => {
    return arraySortToObject((item, index, object) => {
      object[item] = values[index];
    }, keys$$1);
  };
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
    zipObject,
    unZipObject,
  });

  const invert = (thisObject, invertedObject = {}) => {
    eachObject(thisObject, (item, key) => {
      invertedObject[item] = key;
    });
    return invertedObject;
  };
  assign($, {
    invert,
  });

  const omit = (originalObject, array) => {
    return compactMapObject(originalObject, (item, key) => {
      if (!array.includes(key)) {
        return item;
      }
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
    * @returns {string} Converted string in upper case.
    *
    * @example
    * upperCase('upper case');
    * // => UPPER CASE
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
    * @returns {string} Converted string in Camel case.
    *
    * @example
    * camelCase('camel case');
    * // => camelCase
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
    * @returns {string} Converted string in Kebab case.
    *
    * @example
    * kebabCase('kebab case');
    * // => kebab-case
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
    * @returns {string} Converted string in Snake case.
    *
    * @example
    * snakeCase('snake case');
    * // => snake_case
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
    * @returns {string} Converted string in Snake case.
    *
    * @example
    * replaceList('Her name was @user.', ['@user'], 'Lucy');
    * // => Her name was Lucy.
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
    * @returns {string} Converted string into the decoded URI Component .
    *
    * @example
    * rawURLDecode('Lucy%20saw%20diamonds%20in%20the%20sky.');
    * // => Lucy saw diamonds in the sky.
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
    * // => &lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;
  */
  const htmlEntities = (string) => {
    return string.replace(andRegex, '&amp;')
      .replace(lessThanRegex, '&lt;')
      .replace(moreThanRegex, '&gt;')
      .replace(doubleQuoteRegex, '&quot;');
  };
  /**
    * Executes rawURLDecode then htmlEntities methods on a string.
    *
    * @function sanitize
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @returns {string} Replaced string.
    *
    * @example
    * sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`);
    * // => &lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;
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
    * @returns {Array} Array of words without white space characters.
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
    * @returns {Array} Array of words with word characters only.
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
    * @returns {string} An upper case letter.
    *
    * @example
    * truncate('Where is Lucy?', 2);
    * // => Where is
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
    * @returns {string} An upper case letter.
    *
    * @example
    * truncateRight('Where is Lucy?', 6);
    * // => Lucy?
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
    * @returns {string} An upper case letter.
    *
    * @example
    * upperFirstLetter('upper');
    * // => U
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
    * @returns {string} String with first letter capitalized.
    *
    * @example
    * upperFirstLetter('upper');
    * // => Upper
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
    * @returns {string} String with all first letters capitalized.
    *
    * @example
    * upperFirstAll('Lucy is next up.');
    * // => Lucy Is Next Up.
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
    * @returns {string} String with first letter capitalized.
    *
    * @example
    * upperFirstOnly('LYSERGIC ACID DIETHYLAMIDE');
    * // => Lysergic acid diethylamide
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
    * @returns {string} String with all first letters capitalized.
    *
    * @example
    * upperFirstOnlyAll('LYSERGIC ACID DIETHYLAMIDE');
    * // => Lysergic Acid Diethylamide
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

  const functionPrototype = Function.prototype;
  /**
    * Caches a prototype method.
    *
    * @function cacheNativeMethod
    * @type {Function}
    * @param {Function} method - Prototype method.
    * @returns {Function} Cached method.
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
     * Checks if a property on an object has a value if not it will assign a value.
     *
     * @function ifNotEqual
     * @type {Function}
     * @param {Object} rootObject - The object to check.
     * @param {string} property - The property name which is to be checked.
     * @param {*} equalThis - The reassignment value for the property being checked.
     * @returns {Object} Returns the provided rootObject.
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
  *   matchesProperty compares the properties of two objects.
  *   @property {object} - takes an object
  *   @property {compareObject} - takes an object
  *   @property {properties} - takes in an array of properties
  *   @example
  *    const objOne = {
  *      a:1,
  *      b:2
  *    };
  *    const objTwo = {
  *       a:1,
  *       b:3
  *    };
  *     const propertiesToCompare = [a, b];
  *     matchesProperty(objOne, objTwo, propertiesToCompare );
  * //-> True, false
  *   @returns
  *   Boolean
  */
  const propertyMatch = (object, compareObject, properties) => {
    let result = false;
    eachWhile(properties, (property) => {
      result = object[property] === compareObject[property];
      return result;
    });
    return result;
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
  const uuidFree = [];
  const uuidClosed = {};
  /**
    * uuid returns a unique id
  */
  const uuid = () => {
    let result = uuidFree.shift(uuidFree);
    if (!hasValue(result)) {
      result = count;
      uuidClosed[result] = true;
      count++;
    }
    return result;
  };
  /**
    * uuid.remove nullifies a unique id within the uuidClosed object
  */
  uuid.remove = (id) => {
    uuidClosed[id] = null;
    uuidFree.push(id);
  };
  assign($, {
    uuid,
  });

  /**
    * Returns property on an object.
    *
    * @function get
    * @type {Function}
    * @param  {string} propertyString - String used to retrieve properties.
    * @param {Object} objectChain - Object which has a property retrieved from it.
    * @example
    * const api = {
    *  post: {
    *   like: ['a','b','c']
    *  }
    * }
    * get('post.like[2]', api);
    * //=> c
    * @returns {Object} - Returns property from the given object.
    *
  */
  const get = (propertyString, objectChain = $) => {
    let link = objectChain;
    eachWhile(toPath(propertyString), (item) => {
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
    * //-> {a: 1}
    *
    * model('test');
    * //-> {a: 1}
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
    * Performs strict comparison between the value and an argument. If it returns true, then it returns the b argument. Else it returns the a argument.
    *
    * @function toggle
    * @type {Function}
    * @param  {(string|number)} value - Strictly compared against the on argument.
    * @param {(string|number)} on -  Strictly compared against the value argument.
    * @param {(string|number)} off -  Value to be returned.
    * @returns {(string|number)} - The on or off argument.
    * 
    * @example
    * toggle(1, 2, 3);
    * //=> 2
  */
  const toggle = (value, on, off) => {
    return (value === on) ? off : on;
  };
  assign($, {
    toggle
  });

  return $;

})));
//# sourceMappingURL=bundle.js.map
