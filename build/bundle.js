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
   * @category main
   * @returns {*} The return value of the superMethod. The default superMethod is model.
   *
   * @example
   * $('modelName', {example: 1});
   * // => {example: 1}
   */
  const $ = (...args) => {
    return cacheSuper(...args);
  };
  /**
   * Re-assigns the main method for $.
   *
   * @function superMethod
   * @category main
   * @memberof $
   * @param {Function} callable - The function that will become the main object's subroutine.
   * @returns {undefined} - Returns nothing.
   *
   * @test
   * (async () => {
   *  superMethod($.get);
   *  return assert($('flow', $), $.flow);
   * });
   *
   * @example
   * superMethod($.get);
   * $('flow', $);
   * // => $.flow
   */
  const superMethod = (callable) => {
    cacheSuper = callable;
  };
  $.superMethod = superMethod;

  const objectNative$1 = Object;
  /**
   * Get object's keys.
   *
   * @function keys
   * @category object
   * @param {*} object - Object to pull keys from.
   * @returns {Array} Array of keys.
   *
   * @example
   * keys({a: 1, b: 2});
   * // => ['a', 'b']
  */
  const keys = objectNative$1.keys;
  /**
   * Determines whether two values are the same value.
   *
   * @function is
   * @category object
   * @param {*} object - Value to compare to.
   * @param {*} object - A value to compare.
   * @returns {Boolean} A Boolean indicating whether or not the two arguments are the same value.
   *
   * @example
   * is('foo', 'foo');
   * // => true
  */
  const is = objectNative$1.is;
  /**
   * Copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
   *
   * @function assign
   * @category object
   * @param {Object} target - The target object.
   * @param {Object} sources - The source object(s).
   * @returns {Object} Returns the target object.
   *
   * @example
   * assign({b: 2}, {a: 1});
   * // => {b: 2, a: 1}
  */
  const assign = objectNative$1.assign;
  /**
   * Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
   *
   * @function getOwnPropertyDescriptor
   * @category object
   * @param {Object} obj - The target object.
   * @param {String} property - The name of the property whose description is to be retrieved.
   * @returns {Object} A property descriptor of the given property if it exists on the object, undefined otherwise.
   *
   * @example
   * getOwnPropertyDescriptor({ bar: 42 }, 'bar');
   * // => { configurable: true, enumerable: true, value: 42, writable: true }
  */
  const getOwnPropertyDescriptor = objectNative$1.getOwnPropertyDescriptor;
  /**
   * Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
   *
   * @function defineProperty
   * @category object
   * @param {Object} obj - The object on which to define the property.
   * @param {String} property - The name of the property whose description is to be retrieved.
   * @param {Object} descriptor - The descriptor for the property being defined or modified.
   * @returns {Object} The object that was passed to the function.
   *
   * @example
   * defineProperty({}, 'key', {
   *  enumerable: false,
   *  configurable: false,
   *  writable: false,
   *  value: 'static'
   * }).key;
   * // => 'static'
  */
  const defineProperty = objectNative$1.defineProperty;
  /**
   * Returns an array of all properties (enumerable or not) found directly upon a given object.
   *
   * @function getOwnPropertyNames
   * @category object
   * @param {Object} obj - The object whose enumerable and non-enumerable own properties are to be returned.
   * @returns {Object} An array of strings that correspond to the properties found directly upon the given object.
   *
   * @example
   * getOwnPropertyNames({ 0: 'a', 1: 'b', 2: 'c' });
   * // => ['0', '1', '2']
  */
  const getOwnPropertyNames = objectNative$1.getOwnPropertyNames;
  /**
   * Returns the amount of keys on the object.
   *
   * @function objectSize
   * @category object
   * @param {Object} obj - The target object.
   * @returns {number} The amount of keys.
   *
   * @example
   * objectSize({ 0: 'a', 1: 'b', 2: 'c' });
   * // => 3
  */
  const objectSize = (target) => {
    return keys(target).length;
  };
  assign($, {
    assign,
    defineProperty,
    getOwnPropertyDescriptor,
    getOwnPropertyNames,
    is,
    keys,
    objectSize
  });

  const arrayNative = Array;
  /**
   * Takes an array like object and creates a new Array from it.
   *
   * @function toArray
   * @category array
   * @param {*} arrayLike - Array like object.
   * @returns {*} new array.
   *
   * @example
   * toArray([1, 2, 3]);
   * // => [1, 2, 3]
  */
  const toArray = arrayNative.from;
  assign($, {
    toArray,
  });

  /**
   * Calls a target function with arguments as specified.
   *
   * @function apply
   * @category function
   * @param {Function} target - The target function to call.
   * @param {*} thisArgument - Array like object.
   * @param {Array} argumentsList - An array-like object specifying the arguments with which target should be called.
   * @returns {*} The result of calling the given target function with the specified this value and arguments.
   *
   * @example
   * apply(function (a) {return a;}, undefined, [2]);
   * // => 2
  */
  const apply = Reflect.apply;
  assign($, {
    apply
  });

  /**
    * Iterates through the given array.
    *
    * @function eachArray
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   eachArray([1, 2, 3], (item) => {
    *     tempList.push(item);
    *   });
    *   return assert(tempList, [1, 2, 3]);
    * });
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
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   eachArrayRight([1, 2, 3], (item) => {
    *     tempList.push(item);
    *   });
    *   return assert(tempList, [3, 2, 1]);
    * });
    *
    * @example
    * eachArrayRight([1, 2, 3], (item) => {
    *   console.log(item);
    * });
    * // => [1, 2, 3]
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
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
    * @returns {boolean} Returns the true if all values returned are true or false if one value returns false.
    *
    * @example
    * whileArray([true, true, false], (item) => {
    *   return item;
    * });
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
    * @category array
    * @type {Function}
    * @category array
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
  const generateMap = (callable) => {
    return (callingArray, iteratee, results = []) => {
      callable(callingArray, (item, index, arrayOriginal, arrayLength) => {
        results[index] = iteratee(item, index, results, arrayOriginal, arrayLength);
      });
      return results;
    };
  };
  /**
    * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
    *
    * @function mapArray
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array of the same calling array's type.
    *
    * @example
    * mapArray([1, 2, 3], (item) => {
    *   return item * 2;
    * });
    * // => [2, 4, 6]
  */
  const mapArray = generateMap(eachArray);
  /**
    * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
    *
    * @function mapArrayRight
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array of the same calling array's type.
    *
    * @example
    * mapArrayRight([1, 2, 3], (item) => {
    *   return item * 2;
    * });
    * // => [6, 4, 2]
  */
  const mapArrayRight = (callingArray, iteratee, results = []) => {
    let trueIndex = 0;
    const arrayLength = callingArray.length;
    for (let index = arrayLength - 1; index >= 0; index--) {
      results[trueIndex] = iteratee(callingArray[index], index, callingArray, arrayLength);
      trueIndex++;
    }
    return results;
  };
  /**
    * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
    *
    * @function compactMapArray
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array with mapped properties that are not null or undefined.
    *
    * @example
    * compactMapArray([null, 2, 3], (item) => {
    *   return item;
    * });
    * // => [2, 3]
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
    * @category array
    * @type {Function}
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Array} An array with properties that passed the test.
    *
    * @example
    * mapWhile([true, true, false], (item) => {
    *   return item;
    * });
    * // => [true, true]
  */
  const mapWhile = (callingArray, iteratee, results = []) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      const returned = iteratee(callingArray[index], index, results, callingArray, arrayLength);
      if (returned === false) {
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
  /**
   * Checks if the value is undefined.
   *
   * @function isUndefined
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isUndefined(undefined);
   * // => true
  */
  const isUndefined = function(value) {
    return value === undefined;
  };
  /**
   * Checks if the value is null.
   *
   * @function isNull
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isNull(null);
   * // => true
  */
  const isNull = (value) => {
    return value === null;
  };
  /**
   * Checks if the value is not null or undefined.
   *
   * @function hasValue
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * hasValue(1);
   * // => true
  */
  const hasValue = (value) => {
    return !isUndefined(value) && !isNull(value);
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
  /**
   * Checks if the value is a decimal.
   *
   * @function isDecimal
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isDecimal(1.01);
   * // => true
  */
  const isDecimal = (value) => {
    return decimalCheck.test(value.toString());
  };
  /**
   * Checks if the value is an array.
   *
   * @function isArray
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isArray([]);
   * // => true
  */
  const isArray = Array.isArray;
  /**
   * Checks if the value is a string.
   *
   * @function isString
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isString('Lucy');
   * // => true
  */
  const isString = isConstructor(String);
  /**
   * Checks if the value is a number.
   *
   * @function isNumber
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isNumber(1);
   * // => true
  */
  const isNumber = isConstructor(Number);
  /**
   * Checks if the value is a plain object.
   *
   * @function isPlainObject
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isPlainObject({});
   * // => true
  */
  const isPlainObject = (value) => {
    if (hasValue(value)) {
      return value.constructor.toString().trim()
          .slice(9, 16) === 'Object(';
    }
    return false;
  };
  /**
   * Checks if the value is a plain object.
   *
   * @function isFunction
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isFunction(() => {});
   * // => true
  */
  const isFunction = (value) => {
    return (hasValue(value)) ? value instanceof Function : false;
  };
  /**
   * Checks if the value includes something.
   *
   * @function has
   * @category utility
   * @param {Array|String} value - Object to be checked.
   * @param {*} search - Object that is being searched for.
   * @returns {boolean} True or false.
   *
   * @example
   * has('My name is Acidjs', 'Acidjs');
   * // => true
  */
  const has = (value, ...search) => {
    return value.includes(...search);
  };
  /**
   * Checks if the value has length greater than 0.
   *
   * @function hasLength
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * hasLength([1]);
   * // => true
  */
  const hasLength = (value) => {
    return Boolean(value.length);
  };
  /**
   * Checks if the value is empty.
   *
   * @function isEmpty
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isEmpty([]);
   * // => true
  */
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
  /**
   * Checks if the string has a .css extension.
   *
   * @function isFileCSS
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isFileCSS('test.css');
   * // => true
  */
  const isFileCSS = regexGenerator(/\.css$/);
  /**
   * Checks if the string has a .json extension.
   *
   * @function isFileJSON
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isFileJSON('test.json');
   * // => true
  */
  const isFileJSON = regexGenerator(/\.json$/);
  /**
   * Checks if the string has a .js extension.
   *
   * @function isFileJS
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isFileJS('test.js');
   * // => true
  */
  const isFileJS = regexGenerator(/\.js$/);
  /**
   * Checks if the string has a '.'.
   *
   * @function hasDot
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * hasDot('test.js');
   * // => true
  */
  const hasDot = regexGenerator(/\./);
  const getExtensionRegex = /\.([0-9a-z]+)/;
  /**
   * Return the file extension.
   *
   * @function getFileExtension
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {string} Returns the extension.
   *
   * @example
   * getFileExtension('test.js');
   * // => 'js'
  */
  const getFileExtension = (string) => {
    const match = string.match(getExtensionRegex);
    if (match) {
      return match[1];
    }
  };
  /**
   * Checks if the value is a RegExp.
   *
   * @function isRegExp
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isRegExp(/test/);
   * // => true
  */
  const isRegExp = (value) => {
    return value instanceof RegExp;
  };
  /**
   * Checks if the value is an Arguments object.
   *
   * @function isArguments
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isArguments([]);
   * // => false
  */
  /**
   * Checks if the value is a Boolean.
   *
   * @function isBoolean
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isBoolean(true);
   * // => true
  */
  const isBoolean = (value) => {
    return value.constructor.name === 'Boolean';
  };
  /**
   * Checks if the value is a Date.
   *
   * @function isDate
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isDate(new Date());
   * // => true
  */
  const isDate = (value) => {
    return value instanceof Date;
  };
  /**
   * Checks if the value is a Map.
   *
   * @function isMap
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isMap(new Map());
   * // => true
  */
  /**
   * Checks if the value is a Set.
   *
   * @function isSet
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isSet(new Set());
   * // => true
  */
  /**
   * Checks if the value is a WeakMap.
   *
   * @function isWeakMap
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isWeakMap(new WeakMap());
   * // => true
  */
  /**
   * Checks if the value is a ArrayBuffer.
   *
   * @function isArrayBuffer
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isArrayBuffer(new ArrayBuffer());
   * // => true
  */
  /**
   * Checks if the value is a Float32Array.
   *
   * @function isFloat32Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isFloat32Array(new Float32Array());
   * // => true
  */
  /**
   * Checks if the value is a Float64Array.
   *
   * @function isFloat64Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isFloat64Array(new Float64Array());
   * // => true
  */
  /**
   * Checks if the value is a Int8Array.
   *
   * @function isInt8Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isInt8Array(new Int8Array());
   * // => true
  */
  /**
   * Checks if the value is a Int16Array.
   *
   * @function isInt16Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isInt16Array(new Int16Array());
   * // => true
  */
  /**
   * Checks if the value is a Int32Array.
   *
   * @function isInt32Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isInt32Array(new Int32Array());
   * // => true
  */
  /**
   * Checks if the value is a Uint8Array.
   *
   * @function isUint8Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isUint8Array(new Uint8Array());
   * // => true
  */
  /**
   * Checks if the value is a Uint8ClampedArray.
   *
   * @function isUint8ClampedArray
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isUint8ClampedArray(new Uint8ClampedArray());
   * // => true
  */
  /**
   * Checks if the value is a Uint16Array.
   *
   * @function isUint16Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isUint16Array(new Uint16Array());
   * // => true
  */
  /**
   * Checks if the value is a Uint32Array.
   *
   * @function isUint32Array
   * @category utility
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isUint32Array(new Uint32Array());
   * // => true
  */
  const nativeObjectNames = ['Arguments', 'Map', 'Set', 'WeakMap'];
  eachArray(nativeObjectNames, (item) => {
    $[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
  });
  const arrayLikeObjects = ['ArrayBuffer', 'Float32Array', 'Float64Array',
    'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array'];
  eachArray(arrayLikeObjects, (item) => {
    $[`is${item}`] = (value) => {
      return (hasValue(value)) ? value.constructor.name === item : false;
    };
  });
  assign($, {
    getFileExtension,
    has,
    hasDot,
    hasLength,
    hasValue,
    isArray,
    isBoolean,
    isDate,
    isDecimal,
    isEmpty,
    isFileCSS,
    isFileJS,
    isFileJSON,
    isFunction,
    isNull,
    isNumber,
    isPlainObject,
    isRegExp,
    isString,
    isUndefined,
  });

  /**
    * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
    *
    * @function asyncEach
    * @type {Function}
    * @category Array
    * @async
    * @param {Array} callingArray - Array of async functions that will be looped through.
    * Functions are given the supplied object, index, the calling array, and the array length.
    * @param {*} object - The first argument given to each function.
    * @returns {Object} The originally given array.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   await asyncEach([async (item, index) => {
    *     tempList.push(index);
    *   }, async (item, index) => {
    *     tempList.push(index);
    *   }], {a:1});
    *   return assert(tempList, [0, 1]);
    * });
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
  const asyncEach = async (callingArray, value) => {
    const arrayLength = callingArray.length;
    for (let index = 0; index < arrayLength; index++) {
      const item = callingArray[index];
      await item(value, index, callingArray, arrayLength);
    }
    return callingArray;
  };
  assign($, {
    asyncEach,
  });

  /**
    * Ensures the object is an array. If not wraps in array.
    *
    * @function ensureArray
    * @category array
    * @type {Function}
    * @param {*} object - Data to be checked.
    * @returns {Array} - Returns an array.
    *
    * @example
    * ensureArray('Hello');
    * // => ['Hello']
    *
    * @example
    * ensureArray({a:1, b:2})
    * // => [{a:1, b:2}]
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
    * @category array
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
    * @category array
    * @param {Array} array - Array to flatten.
    * @returns {Array} - Returns a completely flattened array.
    *
    * @example
    * flattenDeep([1, [2, [3, [4]], 5]]);
    * // => [1, 2, 3, 4, 5]
  */
  const flattenDeep = (array) => {
    return array.reduce((previousValue, currentValue) => {
      return previousValue.concat((isArray(currentValue)) ? flattenDeep(currentValue) : currentValue);
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
    * // => [2, 3, 3, 4, 3, 5]
    * @example
    * remove([3, 3, 4, 5], 3, 4);
    * // => [5]
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
    * @function removeBy
    * @param {Array} array - Array to be mutated.
    * @param {Function} method - Function used to check object. Return true to remove the value.
    * @returns {Array} The array this method was called on.
    *
    * @example
    * removeBy([1, 2, 3, 3, 4, 3, 5], (item) => { return Boolean(item % 2);});
    * // => [2, 4]
  */
  const removeBy = (array, iteratee) => {
    let arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      const item = array[index];
      if (iteratee(item, index)) {
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
    * @category Array
    * @type {Function}
    * @param {Array} array - Array to be chunked.
    * @param {number} size - Number which determines the size of each chunk.
    * @returns {Array} - A chunked version of the source array.
    *
    * @example
    *  chunk([1,2,3], 1);
    * // => [[1],[2],[3]]
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
    * @category array
    * @param {Array} array - Array to be sliced.
    * @returns {Array} - Returns the aggregated array.
    *
    * @example
    * rest([1, 2, 3, 4, 5]);
    * // => [2, 3, 4, 5]
  */
  const rest = (array) => {
    return array.slice(1, array.length);
  };
  assign($, {
    rest
  });

  /**
    * Clears the values out of an array.
    *
    * @function clear
    * @category Array
    * @type {Function}
    * @param {Array} array - Takes an array to be emptied.
    * @returns {Array} The originally given array.
    *
    * @example
    * clear([1,'B', 'Cat']);
    * // => []
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
    * @category array
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
    * @category Array
    * @type {Function}
    * @param {Array} array - Takes an array to be cloned.
    * @returns {Array} The originally given array.
    *
    * @example
    * cloneArray([1,'B', 'Cat']);
    * // => [1, 'B', 'Cat']
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
    * @category number
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
    * @category number
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
    * @category number
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
    * @category number
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
    * @category number
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
    * @category number
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
    * @category number
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
    * @category number
    * @type {Function}
    * @param {number} max - Establishes highest possible value for the random number.
    * @param {number} [min = 0] - Establishes lowest possible value for the random number.
    * @returns {number} - Returns random integer between the max and min range.
    *
    * @test
    * (async () => {
    *   return assert(isNumber(randomArbitrary(10)), true);
    * });
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
    * @category number
    * @type {Function}
    * @param {number} max - Establishes highest possible value for the random number.
    * @param {number} [min = 0] - Establishes lowest possible value for the random number.
    * @returns {number} - Returns random integer between the max and min range.
    *
    * @test
    * (async () => {
    *   return assert(isNumber(randomInt(10)), true);
    * });
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
    * Shuffle an array and return a new array.
    *
    * @function shuffle
    * @category array
    * @param {Array} array - Array to be shuffled.
    * @returns {Array} An array with the shuffled results.
    *
    * @test
    * (async () => {
    *   const tempResult = shuffle([1, 2]);
    *   return assert(tempResult.includes(1) && tempResult.includes(2), true);
    * });
    *
    * @example
    * shuffle([1, 2, 3, 4]);
    * // => [3, 4, 2, 1]
  */
  const shuffle = (array, amount = array.length) => {
    if (array.length <= 1) {
      return toArray(array);
    }
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
    * Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
    *
    * @function sample
    * @category array
    * @param {Array} array - Array to pull sample(s).
    * @returns {Array} An array of randomly pulled samples.
    *
    * @test
    * (async () => {
    *   const tempResult = sample([1, 2] , 2);
    *   return assert(tempResult.includes(1) && tempResult.includes(2), true);
    * });
    *
    * @example
    * sample([1, 2, 3, 4] , 2);
    * // => [1, 3]
  */
  const sample = (array, amount = 1) => {
    if (!array) {
      return false;
    }
    const arrayLength = array.length;
    if (arrayLength === amount || amount > arrayLength) {
      return shuffle(array);
    }
    if (amount === 1) {
      return [array[randomInt(arrayLength - 1, 0)]];
    }
    const sampleArray = [];
    const used = {};
    let count = 0;
    let index;
    while (count < amount) {
      index = randomInt(array.length - 1, 0);
      if (!used[index]) {
        sampleArray.push(array[index]);
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
    * @category Array
    * @type {Function}
    * @param {Array} array - Array to be compacted.
    * @returns {Array} The new array of filtered values.
    *
    * @example
    * compact([1,'B', 'Cat', false, null, 0 , '', undefined, NaN]);
    * // => [1, 'B', 'Cat']
  */
  const compact = (array) => {
    return array.filter((item) => {
      return isString(item) && !item.length ? false : item;
    });
  };
  assign($, {
    compact,
  });

  /**
    * Takes all but the last item in the array.
    *
    * @function initial
    * @category array
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
     * @category array
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
    * @category array
    * @param {Number} start - Value which determines the start of the range.
    * @param {Number} end - Value which determines the end of the range.
    * @param {Number} increment - Value which determines the rate of incrementation.
    * @returns {Array}
    *
    * @example
    * range([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
    * // => [1, 'B', Cat]
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
    * // => [1, 'B', Cat]
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
   * @category array
   * @returns {Array} The new array of unique values shared by all of the arrays.
   *
   * @example
   * intersect([1, 2, 3], [2, 3, 4]);
   * // => [2, 3]
   * @example
   * intersect([1, 2, 3], [101, 2, 50, 1], [2, 1]);
   * // => [1, 2]
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
    * Checks for differences between arrays, then creates an array based on those differences.
    *
    * @function difference
    * @category array
    * @type {Function}
    * @param {Array} array - Source array.
    * @param {Array} compare - Array source array is compared against.
    * @returns {Array} An array which contains the differences between the source and compare array.
    *
    * @example
    * difference([1, 2, 3], [1, 2]);
    * // => [3]
  */
  const difference = (array, ...compares) => {
    const compare = flattenDeep(compares);
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
    * @category array
    * @type {Function}
    * @param {Array} array - Source array.
    * @param {number} amount - Amount of items to drop from the array.
    * @param {number} [upTo = array.length] - Index to stop at.
    * @returns {Array} An array with all values removed after a user defined index.
    *
    * @example
    * drop([1, 2, 3], 1);
    * // => [2, 3]
  */
  const drop = (array, amount, upTo = array.length) => {
    return array.splice(amount, upTo);
  };
  /**
    * Removes all items from an array before a specified index.
    *
    * @function dropRight
    * @type {Function}
    * @category array
    * @param {Array} array - Source array.
    * @param {number} amount - Amount of items to drop from the array.
    * @param {number} [upTo = array.length] - Index to stop at.
    * @returns {Array} An array with all values removed before a user defined index.
    *
    * @example
    * dropRight([1, 2, 3], 1);
    * // => [1, 2]
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
     * @category array
     * @param {Array} source - Source object.
     * @param {Array} compareArray - Object to compare to source.
     * @returns {boolean} Returns the true or false.
     *
     * @example
     * isMatchArray([1, 2, 3], [1, 2, 3]);
     * // => true
   */
  const isMatchArray = (source, compareArray) => {
    if (source.length === compareArray.length) {
      return whileArray(source, (item, index) => {
        return compareArray[index] === item;
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
     * @category array
     * @type {Function}
     * @param {Array} array - Array to be sorted.
     * @param {number} insertThis - Number to be inserted.
     * @returns {number} The index at which to insert.
     *
     * @example
     * sortedIndex([30, 50], 40);
     * // => 1
   */
  const sortedIndex = (array, insertThis) => {
    let min = 0;
    whileArray(array, (item, index) => {
      min = index;
      if (insertThis > item) {
        return true;
      } else {
        return false;
      }
    });
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
    * @category array
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
    * @category array
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
    * @category array
    * @type {Function}
    * @async
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   await eachAsync([1, 2, 3], async (item) => {
    *     tempList.push(item);
    *   });
    *   return assert(tempList, [1, 2, 3]);
    * });
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
    * @category array
    * @type {Function}
    * @async
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
    * @returns {Object} The originally given array.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   await eachAsyncRight([1, 2, 3], async (item) => {
    *     tempList.push(item);
    *   });
    *   return assert(tempList, [3, 2, 1]);
    * });
    *
    * @example
    * eachAsyncRight([3,4], async (item, index) =>{
    *  console.log(item, index);
    * });
    * // 4 0
    * // 3 1
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
    * @category array
    * @param {Array} array - Array to have items extracted from.
    * @param {number} [indexFrom = 0] - Value which determines how many items are extracted from the array.
    * @returns {Array} Items from the array.
    *
    * @example
    * last([1, 2, 3, 4, 5] , 2);
    * // => [4, 5]
    * @example
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
    * @category array
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
    * // => [2, 3]
  */
  const takeRight = (array, amount = 1) => {
    const arrayLength = array.length;
    return array.slice(arrayLength - amount, arrayLength);
  };
  assign($, {
    take,
    takeRight
  });

  /**
    * Asynchronously iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
    *
    * @function mapAsync
    * @category array
    * @type {Function}
    * @async
    * @param {Array} callingArray - Array that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Array} An array of the same calling array's type.
    *
    * @example
    * mapAsync([1, 2, 3], (item) => {
    *   return item * 2;
    * });
    * // => [2, 4, 6]
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
    * @function unique
    * @category array
    * @type {Function}
    * @param {Array} array - The array to be filtered.
    * @returns {Array} The filtered array.
    *
    * @example
    * unique([1, 2, 2, 4]);
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
    * @function union
    * @category array
    * @type {Function}
    * @param {...Array} arrays - The arrays to be evaluated.
    * @returns {Array} The aggregated array.
    *
    * @example
    * union([1,2,4], [1,2,3]);
    * // => [1, 2, 4, 3]
  */
  const union = (...arrays) => {
    return unique(flattenDeep(arrays));
  };
  assign($, {
    union
  });

  /**
    * Asynchronously iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
    *
    * @function compactMapAsync
    * @type {Function}
    * @category array
    * @async
    * @param {Array} array - Array to be compacted.
    * @param {Function} iteratee - Iteratee to be performed on array.
    * @returns {Array} Array values after being put through an iterator.
    *
    * @example
    * compactMapAsync([1, 2, 3, null], async (item) => {return item;});
    * // => [1, 2, 3]
  */
  const compactMapAsync = async (array, iteratee) => {
    const results = [];
    let result;
    await eachAsync(array, async (item, index, arrayLength) => {
      result = await iteratee(item, index, results, arrayLength);
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
    * @category array
    * @type {Function}
    * @param {Array} numberList - Array of numbers.
    * @returns {Array} The array this method was called on.
    *
    * @example
    * numSort([10, 0, 2, 1]);
    * // => [0, 1, 2, 10]
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
    * @category array
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
    * @function without
    * @type {Function}
    * @category array
    * @param {Array} array - The array to be filtered.
    * @param {Array} removeThese - Items to be removed.
    * @returns {Array} The filtered array.
    *
    * @example
    * without([1, 2, 2, 4], [4]);
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

  /**
    * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
    *
    * @function partition
    * @type {Function}
    * @category array
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
    * // => [
    * [{"user":"fred","age":40,"active":true}],
    *   [{"user":"barney","age":36,"active":false},
    *   {"user":"pebbles","age":1,"active":false}]]
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
    * @function xor
    * @category array
    * @type {Function}
    * @param {Array} array - The array to be filtered.
    * @param {Array} removeThese - Items to be removed.
    * @returns {Array} The filtered array.
    *
    * @example
    * xor([2, 1], [2, 3]);
    * // => [1, 3]
  */
  const xor = (...arrays) => {
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
    * @category array
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
    * @category array
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
    * @category array
    * @param {Array} array - Array to extract from.
    * @param {number} upTo - Number which determines how many items after the first item are extracted from the array.
    * @returns {Array} - Returns an array.
    *
    * @example
    * first([1, 2, 3]);
    * // => 1
    * @example
    * first([1, 2, 3], 2);
    * // => [1, 2]
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
    * @category array
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
    * @category array
    * @type {Function}
    * @param {number} startIndex - The number to start loop from.
    * @param {number} endIndex - The number to stop at the loop.
    * @param {Function} iteratee - Transformation function which is passed position, start, and end.
    * @returns {undefined} Nothing.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   times(0, 3, (item) => {
    *     tempList.push(item);
    *   });
    *   return assert(tempList, [0, 1, 2]);
    * });
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
    const start = (iteratee) ? startIndex : 0;
    const end = (iteratee) ? endIndex : startIndex;
    const iterateeMethod = iteratee || endIndex;
    for (let position = start; position < end; position++) {
      iterateeMethod(position, start, end);
    }
  };
  /**
    * Iterates based on a start index and end index. Creates an array with the results of the iteratee on every element in the calling array. The loop ends when the start index is equal to the end index.
    *
    * @function timesMap
    * @category utility
    * @type {Function}
    * @param {number} startIndex - The number to start loop from.
    * @param {number} endIndex - The number to stop at the loop.
    * @param {Function} iteratee - Transformation function which is passed position, start, and end.
    * @param {Array} [results = []] - Array that will be used to assign results.
    * @returns {Object} An array with iteratee's returned values.
    *
    * @example
    * timesMap(0, 3, (item) => {
    *   return item;
    * });
    * // => [0, 1, 2]
  */
  const timesMap = (startIndex, endIndex, iteratee, results = []) => {
    const start = (iteratee) ? startIndex : 0;
    const end = (iteratee) ? endIndex : startIndex;
    const iterateeMethod = iteratee || endIndex;
    let result;
    times(start, end, (position) => {
      result = iterateeMethod(position, start, end, results);
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

  /**
    * Checks to see of the browser agent has a string.
    *
    * @function isAgent
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {string} value - The string to search for.
    * @returns {boolean} Returns true or false.
    * @ignoreTest
    * @example
    * isAgent('mobile');
    * // => false
  */
  const isAgent = (value) => {
    return (value) ? isAgent[value] : keys(isAgent);
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

  /**
    * Attaches an event listener to a node.
    *
    * @function eventAdd
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {Node} node - Given node.
    * @param {string} type - A string representing the event type.
    * @param {Object|Function} listener - The object which receives a notification when an event of the specified type occurs.
    * @param {Object} options - An options object that specifies characteristics about the event listener.
    * @returns {Node} - Returns given node.
    *
    * @example
    * eventAdd(document.body, 'click', () => {console.log('CLICKED');});
    * // = > document.body
  */
  const eventAdd = (node, ...args) => {
    node.addEventListener(...args);
    return node;
  };
  /**
    * Attaches an event listener to a node.
    *
    * @function eventRemove
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {Node} node - Given node.
    * @param {string} type - A string representing the event type.
    * @param {Object|Function} listener - An object|function representing the listener.
    * @param {Object} options - An options object that specifies characteristics about the event listener.
    * @returns {undefined} - Undefined.
    *
    * @example
    * eventRemove(document.body, () => {console.log('CLICKED');});
    * // = > Undefined
  */
  const eventRemove = (node, ...args) => {
    node.removeEventListener(...args);
    return node;
  };
  assign($, {
    eventAdd,
    eventRemove,
  });

  /**
    * Checks if the keycode of the event is strictly equal to 13.
    *
    * @function isEnter
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {Object} eventObject - Object to be checked.
    * @returns {boolean} Returns true if the keycode property of the object equals 13.
    *
    * @example
    * isEnter('click');
    * // => false
  */
  const isEnter = (eventObject) => {
    return eventObject.keyCode === 13;
  };
  assign($, {
    isEnter
  });

  /**
    * Create a document fragment.
    *
    * @function createFragment
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @ignore
    * @returns {Fragment} Returns a new document fragment.
  */
  const createFragment = document.createDocumentFragment.bind(document);

  /**
    * Append a DOM node.
    *
    * @function append
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @ignore
    * @param {Node} parentNode - The parent node.
    * @param {Node} child - The node to be appended.
    * @returns {undefined} Returns the child.
  */
  const append = (parentNode, child) => {
    parentNode.appendChild(child);
    return child;
  };

  /**
    * Iterates through the given object.
    *
    * @function eachObject
    * @category object
    * @type {Function}
    * @param {Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
    * @returns {Object|Function} The originally given object.
    *
    * @test
    * (async () => {
    *   const tempList = {};
    *   eachObject({a: 1, b: 2, c: 3}, (item, key) => {
    *     tempList[key] = item;
    *   });
    *   return assert(tempList, {a: 1, b: 2, c: 3});
    * });
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
    * });
    * // => false
    * @example
    * whileObject({a: true, b: true, c: true}, (item) => {
    *   return item;
    * });
    * // => true
  */
  const whileObject = (callingObject, iteratee) => {
    const objectKeys = keys(callingObject);
    return whileArray(objectKeys, (key, index, callingArray, propertyCount) => {
      return iteratee(callingObject[key], key, callingObject, propertyCount, callingArray);
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
    *   return item;
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
    * @category utility
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
    * compactMapObject({a: undefined, b: 2, c: 3}, (item) => {
    *   return item;
    * });
    * // => {b: 2, c: 3}
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

  /**
    * Creates an object from two arrays, one of property identifiers and one of corresponding values.
    *
    * @function zipObject
    * @type {Function}
    * @category object
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
    * Assign attributes to a DOM node.
    *
    * @function nodeAttribute
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @async
    * @param {Node} node - The DOM node.
    * @param {Object|Array} object - Object with key being the attribute name and the value being the attribute value. If an array is given it will get the values corresponding to the array items.
    * @returns {Object|Node} If using an array this returns an object of attribute names as keys and their values as the property value. If using an object this will return the provided node.
    *
    * @example
    * nodeAttribute(document.body, { 'data-example': 'test'});
  */
  const nodeAttribute = (node, object) => {
    if (isArray(object)) {
      return zipObject(object, mapArray(object, (item) => {
        return node.getAttribute(item);
      }));
    }
    eachObject(object, (item, key) => {
      node.setAttribute(key, item);
    });
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
    * @category utility
    * @param {Function} callback - Function to be called back.
    * @returns {Object} - A constructor with a callback function.
    *
    * @test
    * (async () => {
    *   const result = await promise((accept) => {
    *     accept(true);
    *   });
    *   return assert(result, true);
    * });
    *
    * @example
    * promise((a) => {});
    * // => Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
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
    * @category string
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
    * @example
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
    * // => ['ch', 'un', 'k']
  */
  const chunkString = (string, size) => {
    return string.match(new RegExp(`(.|[
]){1,${size}}`, 'g'));
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
    * // => 'initialStrin'
    * @example
    * initialString('initialString', 2);
    * // => 'initialStri'
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
    * // => 'estString'
    * @example
    * restString('restString', 2);
    * // => 'stString'
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
  /**
    * Wrapper around getElementsByClassName.
    *
    * @function getByClass
    * @category browser
    * @ignoreTest
    * @type {Function}
  */
  const getByClass = document.getElementsByClassName.bind(document);
  /**
    * Wrapper around getElementsByTagName.
    *
    * @function getByTag
    * @category browser
    * @ignoreTest
    * @type {Function}
  */
  const getByTag = document.getElementsByTagName.bind(document);
  /**
    * Wrapper around getElementsByIdName.
    *
    * @function getById
    * @category browser
    * @ignoreTest
    * @type {Function}
  */
  const getById = document.getElementById.bind(document);
  /**
    * Wrapper around querySelector.
    *
    * @function querySelector
    * @category browser
    * @ignoreTest
    * @type {Function}
  */
  const querySelector = document.querySelector.bind(document);
  /**
    * Wrapper around querySelectorAll.
    *
    * @function querySelectorAll
    * @category browser
    * @ignoreTest
    * @type {Function}
  */
  const querySelectorAll = document.querySelectorAll.bind(document);
  /**
    * Returns relevant DOM node.
    *
    * @function selector
    * @category browser
    * @ignoreTest
    * @param {string} select - String to be evaluated.
    * @type {Function}
    * @returns {Node} - Returns a DOM node.
    *
    * @example
    * selector('#node');
    * // => <div id="node"></div>
  */
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
  /**
    * Asynchronously import a js file and append it to the head node.
    *
    * @function importjs
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @async
    * @returns {Promise} Returns a promise.
    *
    * @example
    * importjs('core.js');
  */
  const importjs = (url) => {
    const node = nodeAttribute(createTag('script'), {
      async: '',
      src: `${url}.js`
    });
    return nodeAttachLoadingEvents(node);
  };
  assign($, {
    importjs,
  });

  /**
    * Runs a function if the document has finished loading. If not, add an eventlistener.
    *
    * @function isDocumentReady
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {Function} callable - Function to be run.
    * @returns {Boolean|Function} - If the document is ready, returns a function. If not, return false.
    *
    * @example
    * isDocumentReady(() => {return 1});
    * // => 1
  */
  const isDocumentReady = (callable) => {
    const state = document.readyState;
    const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
    if (checkStatus) {
      return (callable) ? callable() : true;
    }
    if (callable) {
      eventAdd(document, 'DOMContentLoaded', callable);
    }
    return false;
  };
  assign($, {
    isDocumentReady
  });
  isDocumentReady(() => {
    importjs('/index');
  });

  const protocol = location.protocol;
  const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
  const hostname = location.hostname;
  /**
    * Holds client hardware, browser, and host info.
    *
    * @memberof $
    * @category browser
    * @ignoreTest
    * @property info
    * @type {Object}
  */
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

  const saveDimensions = () => {
    assign(info, {
      bodyHeight: document.body.offsetHeight,
      bodyWidth: document.body.offsetWidth,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };
  /**
    * Save current document & window dimensions to the info property.
    *
    * @function updateDimensions
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @returns {undefined} Returns undefined.
    *
    * @example
    * updateDimensions();
  */
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
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to be invoked if possible.
    * @param {...Array} args - Arguments to pass to the method.
    * @returns {*} Returns the method invoked or undefined.
    *
    * @example
    * ifInvoke((...args) => { return args;}, 1, 2);
    * // => [1, 2]
    * @example
    * ifInvoke(undefined, 1, 2);
    * // => undefined
  */
  const ifInvoke = (callable, ...args) => {
    if (isFunction(callable)) {
      return callable(...args);
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
  /**
    * Batch processing using requestAnimationFrame.
    *
    * @function batch
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {...Function} items - The functions to add to the current batch.
    * @returns {undefined} Returns undefined.
    *
    * @example
    * batch(() => {});
    * // => undefined
  */
  const batch = (...items) => {
    batchChanges.push(...items);
    if (!batchCancelFrame) {
      batchCancelFrame = requestAnimationFrame(batchLoop);
    }
  };
  assign($, {
    batch
  });

  const jsonNative = JSON;
  /**
     * Parses JSON string.
     *
     * @function jsonParse
     * @category utility
     * @type {Function}
     * @param {string} string - String to be parsed.
     * @returns {Object} Returns the parsed object.
     *
     * @example
     * jsonParse('{}');
     * // => {}
   */
  const jsonParse = jsonNative.parse;
  /**
     * Stringify an object into a JSON string.
     *
     * @function stringify
     * @category utility
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
  /**
    * Console.trace wrapper with theme support.
    *
    * @function cnsl
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {Object} value - The value to be logged.
    * @param {string} themeName - The theme to be used.
    * @returns {undefined} Returns undefined.
    *
    * @example
    * cnsl('Lucy', 'notify');
    * // 'Lucy'
  */
  const cnsl = (value, themeName) => {
    const data = isString(value) ? value : stringify(value);
    console.log(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
  };
  /**
    * Create color themes for cnsl method.
    *
    * @function cnslTheme
    * @category browser
    * @ignoreTest
    * @type {Function}
    * @param {string} themeName - The name of the theme.
    * @param {string} color - The text color.
    * @param {string} background - The background color of the block.
    * @returns {undefined} Returns undefined.
    *
    * @example
    * cnslTheme('BlackNWhite', '#fff', '#000');
  */
  const cnslTheme = (themeName, color, background) => {
    themes[themeName] = generateTheme(color, background);
  };
  assign($, {
    cnsl,
    cnslTheme,
  });

  /**
   * Checks if value is a plain DOM Node.
   *
   * @function isDom
   * @category browser
   * @ignoreTest
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isDom(document.querySelectorAll('.test'));
   * // => true
  */
  const isDom = (value) => {
    return value && value.nodeType !== 9;
  };
  $.isDom = isDom;
  eachArray(['HTMLCollection', 'NodeList'], (item) => {
    $[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
  });
  /**
   * Checks if the value is a HTMLCollection.
   *
   * @function isHTMLCollection
   * @category browser
   * @ignoreTest
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isHTMLCollection(document.getElementsByClassName('test'));
   * // => true
  */
  /**
   * Checks if the value is a NodeList.
   *
   * @function isNodeList
   * @category browser
   * @ignoreTest
   * @param {*} value - Object to be checked.
   * @returns {boolean} True or false.
   *
   * @example
   * isNodeList(document.querySelectorAll('.test'));
   * // => true
  */

  /**
    * Sorts an array in place using a key from newest to oldest.
    *
    * @function sortNewest
    * @category collection
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
    * @returns {Array} The sorted array and or a clone of the array sorted.
    *
    * @example
    * sortNewest([{id: 1}, {id: 0}], 'id');
    * // => [{id: 1}, {id: 0}]
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
    * @category collection
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @returns {Object} The newest object in the collection.
    *
    * @example
    * getNewest([{id: 1}, {id: 0}], 'id');
    * // => {id: 1}
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
    * @category collection
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
    * @returns {Array} The sorted array and or a clone of the array sorted.
    *
    * @example
    * sortOldest([{id: 1}, {id: 0}], 'id');
    * // => [{id: 0}, {id: 1}]
  */
  const sortOldest = (collection, key = 'id', pureMode = true) => {
    const array = (pureMode) ? collection : [...collection];
    return array.sort((previous, next) => {
      if (!next[key]) {
        return 1;
      } else if (!previous[key]) {
        return -1;
      } else if (previous[key] < next[key]) {
        return -1;
      } else if (previous[key] > next[key]) {
        return 1;
      }
      return 0;
    });
  };
  /**
    * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
    *
    * @function getOldest
    * @category collection
    * @type {Function}
    * @param {Array} collection - Collection to be sorted.
    * @param {string} key - The property name to sort by based on it's value.
    * @returns {Object} The newest object in the collection.
    *
    * @example
    * getOldest([{id: 1}, {id: 0}], 'id');
    * // => {id: 0}
  */
  const getOldest = (collection, key = 'id') => {
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
    * @category collection
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
    * @category collection
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {Function} iteratee - The iteratee to transform keys.
    * @returns {Object} Returns the composed aggregate object.
    *
    * @example
    * countBy([{a:1}, {a:3}], (item) => { return 'a';});
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
    * @category collection
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
    * @category collection
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
    * Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know the keys are unique.
    *
    * @function indexBy
    * @category collection
    * @type {Function}
    * @param {Array} collection - Array of objects.
    * @param {string} key - The property name to index by.
    * @returns {Object} Returns the composed aggregate object.
    *
    * @example
    * indexBy([{name: 'Lucy', id: 0}, {name: 'Erick', id: 1}], 'id');
    * // => { "0": {name: 'Lucy', id: 0}, "1": {name: 'Erick', id: 1}}
  */
  const indexBy = (array, key = 'id') => {
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
    * @function pluck
    * @category collection
    * @type {Function}
    * @param {Array} collection - Array used to determine what values to be plucked.
    * @param {string} pluckThis - Property name.
    * @returns {Array} - An array of plucked values.
    *
    * @example
    * pluck([{lucy: 'Ants moving around on the walls.'}, {lucy: 'In the sky with diamonds.'}], ['lucy']);
    * // => ['Ants moving around on the walls.', 'In the sky with diamonds.']
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
    * @category collection
    * @type {Function}
    * @param {Array} collection - Collection from which method will be taken.
    * @param {string} property - Value used to pluck method from object.
    * @param {*} value - Value to be passed to callable property.
    * @returns {Array} - Returns the results of the invoked method.
    *
    * @example
    * invoke([{lucy(item, index) { return [item, index];}}, {lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
    * // => [['Arity LLC', 0], ['Arity LLC', 1]]
  */
  const invoke = (collection, property, value) => {
    return mapArray(collection, (item, index) => {
      return item[property](value, index);
    });
  };
  assign($, {
    invoke
  });

  /**
    * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
    *
    * @function invokeAsync
    * @category collection
    * @type {Function}
    * @async
    * @param {Array} collection - Collection from which method will be taken.
    * @param {string} property - Value used to pluck method from object.
    * @param {*} value - Value to be passed to callable property.
    * @returns {Array} - Returns the results of the invoked method.
    *
    * @test
    * (async () => {
    *   const result = await invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
    *   return assert(result, [['Arity LLC', 0], ['Arity LLC', 1]]);
    * });
    *
    * @example
    * invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
    * // => [['Arity LLC', 0], ['Arity LLC', 1]]
  */
  const invokeAsync = (collection, property, value) => {
    return mapAsync(collection, async (item, index) => {
      return item[property](value, index);
    });
  };
  assign($, {
    invokeAsync
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
    * @category array
    * @param {Array} collection - Collection to be checked for an item.
    * @param {number|string} id - The value to look for.
    * @param {string} [propertyName = 'id'] - The name of the property to compare.
    * @returns {Object} - The found object.
    *
    * @example
    * findItem([{id: 1}, {id: 2}], 1);
    * // => {id: 1}
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
    * @category array
    * @param {Array} collection - Collection to be checked for an item.
    * @param {number|string} id - The value to look for.
    * @param {string} [propertyName = 'id'] - The name of the property to compare.
    * @returns {number} - The index of the object.
    *
    * @example
    * findIndex([{id: 1}, {id: 2}], 1);
    * // => 0
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
     * Perform alphabetical sort on a collection with the provided key name. Mutates the array.
     *
     * @function sortAlphabetical
     * @category array
     * @type {Function}
     * @param {Array} array - Array to be sorted.
     * @returns {Array} The sorted array.
     *
     * @example
     * sortAlphabetical([{letter:'a'}, {letter:'f'}, {letter:'c'}], 'letter');
     * // => [{"letter":"a"},{"letter":"c"},{"letter":"f"}]
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
    * Creates a function that invokes callable, with up to n arguments, ignoring any additional arguments.
    *
    * @function ary
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to cap arguments for.
    * @param {number} amount - The arity cap.
    * @returns {Object} Returns the new capped function.
    *
    * @example
    * ary((...args) => { return args;}, 2)(1, 2, 3);
    * // => [1, 2]
  */
  const ary = (callable, amount) => {
    return (...args) => {
      return callable(...args.splice(0, amount));
    };
  };
  assign($, {
    ary
  });

  /**
    * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method length is not sufficient.
    *
    * @function curry
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to curry.
    * @param {number} arity - The arity of method.
    * @returns {*} Returns the new curried function.
    *
    * @example
    * curry((a, b, c) => {
    *   return [a, b, c];
    * })(1)(2)(3);
    * // => [1, 2, 3]
  */
  const curry = (callable, arity = callable.length) => {
    const curries = [];
    const curried = (...curryArgs) => {
      curries.push(...curryArgs);
      if (curries.length === arity) {
        const result = callable(...curries);
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
    * @param {Function} callable - The function to curry.
    * @param {number} arity - The arity of method.
    * @returns {*} Returns the new curried function.
    *
    * @example
    * curryRight((a, b, c) => {
    *   return [a, b, c];
    * })(1)(2)(3);
    * // => [3, 2, 1]
  */
  const curryRight = (callable, arity = callable.length) => {
    const curries = [];
    const curried = (...curryArgs) => {
      curries.unshift(...curryArgs);
      if (curries.length === arity) {
        const result = callable(...curries);
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
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to be called.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @test
    * (async () => {
    *   const onceOnly = once((item) => { return item;});
    *   return await assert(onceOnly(5), 5) && await assert(onceOnly(2), 5);
    * });
    *
    * @example
    * const onceOnly = once((item) => { return item;});
    * onceOnly(5);
    * onceOnly(3);
    * // => 5
  */
  const once = (callable) => {
    let value;
    const onlyOnce = (...args) => {
      if (!hasValue(value)) {
        value = callable(...args);
      }
      return value;
    };
    return onlyOnce;
  };
  /**
    * Creates a function that executes callable, only after being called n times.
    *
    * @function after
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to be called.
    * @param {number} amount - The number of calls until method is invoked.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @test
    * (async () => {
    *   const onlyAfter = after(2, (item) => { return item;});
    *   return await assert(onlyAfter(1), undefined) && await assert(onlyAfter(2), 2);
    * });
    *
    * @example
    * const onlyAfter = after(1, (item) => { return item;});
    * onlyAfter(1);
    * // => undefined
    * onlyAfter(2);
    * // => 2
  */
  const after = (amount, callable) => {
    let point = amount;
    let value;
    const onlyAfter = (...args) => {
      if (point !== null) {
        point--;
      }
      if (point <= 0) {
        value = callable(...args);
        point = null;
      }
      return value;
    };
    return onlyAfter;
  };
  /**
    * Creates a function that executes callable, only before n times.
    *
    * @function before
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to be called.
    * @param {number} amount - The number of calls before n.
    * @returns {Function} Returns the new pass-thru function.
    *
    * @test
    * (async () => {
    *   const onlyBefore = before(3, (item) => { return item;});
    *   return await assert(onlyBefore(1), 1) && await assert(onlyBefore(2), 2) && await assert(onlyBefore(3), 2);
    * });
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
  const before = (amount, callable) => {
    let point = amount;
    let value;
    const onlyBefore = (...args) => {
      if (point !== null) {
        point--;
      }
      if (point >= 1) {
        value = callable(...args);
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
    * @category function
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
    * @category function
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
    * @category function
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
    * @category function
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
    * @category function
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
    * @category function
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
    * @category utility
    * @type {Function}
    * @param {Object|Array|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
    * @returns {boolean} Returns the true if all values returned are true or false if one value returns false.
    *
    * @example
    * eachWhile({a: false, b: true, c: true}, (item) => {
    *  return item;
    * });
    * // => false
  */
  const eachWhile = generateCheckLoops(whileArray, whileObject);
  /**
    * Iterates through the given object.
    *
    * @function each
    * @category utility
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @returns {Array|Object|Function} The originally given object.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   each({a: 1, b: 2, c: 3}, (item) => {
    *     tempList.push(item);
    *   });
    *   return assert(tempList, [1, 2, 3]);
    * });
    *
    * @example
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
    * @category utility
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Array|Object|Function} - A new object of the same calling object's type.
    *
    * @example
    * filter({a: false, b: true, c: true}, (item) => {
    *   return item;
    * });
    * // => {b: true, c: true}
  */
  const filter = generateCheckLoops(filterArray, filterObject);
  /**
    * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
    *
    * @function map
    * @category utility
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Array|Object|Function} A new object of the same calling object's type.
    *
    * @example
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
    * @category utility
    * @type {Function}
    * @param {Array|Object|Function} callingObject - Object that will be looped through.
    * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
    * @param {Object|Function} [results = {}] - Object that will be used to assign results.
    * @returns {Array|Object|Function} A new object of the same calling object's type.
    *
    * @example
    * compactMap({a: null, b: 2, c: 3}, (item) => {
    *   return item;
    * });
    * // => {b: 2, c: 3}
  */
  const compactMap = generateCheckLoops(compactMapArray, compactMapObject);
  assign($, {
    compactMap,
    each,
    eachWhile,
    filter,
    map
  });

  /**
    * Loops through an object or an array and binds the given object to all functions encountered.
    *
    * @function bindAll
    * @category function
    * @type {Function}
    * @param {Object|Function|Array} collection - The functions to bind.
    * @param {*} bindThis - Object to be bound to functions.
    * @returns {Object|Function|Array} Returns the method invoked or undefined.
    *
    * @example
    * bindAll([function () { return this;}], 'Lucy')[0]().toString();
    * // => 'Lucy'
    * @example
    * bindAll({a() { return this;}}, 'Lucy').a().toString();
    * // => 'Lucy'
  */
  const bindAll = (collection, bindThis) => {
    return map(collection, (item) => {
      return isFunction(item) ? item.bind(bindThis) : item;
    });
  };
  assign($, {
    bindAll
  });

  /**
    * Creates a function that negates the result of the predicate callable.
    *
    * @function negate
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to be invoked.
    * @returns {*} Returns the given methods result.
    *
    * @example
    * negate(() => { return false;})();
    * // => true
  */
  const negate = (callable) => {
    return (...args) => {
      return !callable(...args);
    };
  };
  assign($, {
    negate
  });

  /**
    * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
    *
    * @function every
    * @category function
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
    * @category function
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
    * @category function
    * @type {Function}
    * @param {Array|Object} predicates -  The predicates to check.
    * @returns {Function} Returns the new function.
    *
    * @example
    * overEvery([Boolean, isFinite])('1');
    * // => true
    * @example
    * overEvery([Boolean, isFinite])(null);
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

  /**
    * Timer wrapper.
    *
    * @function timer
    * @category function
    * @ignoreTest
    * @type {Function}
    * @param {Function} callable - The function to be invoked.
    * @param {number} time - The time in milliseconds.
    * @returns {Object} Returns setTimeout ID.
    *
    * @example
    * timer(() => {}, 100);
    * // => 0
  */
  const timer = (callable, time) => {
    return setTimeout(callable, time);
  };
  /**
    * Interval wrapper.
    *
    * @function interval
    * @category function
    * @ignoreTest
    * @type {Function}
    * @param {Function} callable - The function to be invoked.
    * @param {number} time - The time in milliseconds.
    * @returns {Object} Returns setInterval ID.
    *
    * @example
    * interval(() => {}, 100);
    * // => 0
  */
  const interval = (callable, time) => {
    return setInterval(callable, time);
  };
  /**
    * Clear all active timers.
    *
    * @function clearTimers
    * @category function
    * @ignoreTest
    * @returns {undefined} Returns undefined.
    *
    * @example
    * clearTimers();
    * // => undefined
  */

  /**
    * Clear all active intervals.
    *
    * @function clearIntervals
    * @category function
    * @ignoreTest
    * @returns {undefined} Returns undefined.
    *
    * @example
    * clearIntervals();
    * // => undefined
  */

  /**
    * Creates a debounced function that delays invoking callable until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounce function has a clear method to cancel the timer.
    *
    * @function debounce
    * @category function
    * @ignoreTest
    * @type {Function}
    * @param {Function} callable - The function to be invoked.
    * @param {number} time - The time in milliseconds.
    * @returns {Function} The debounced function.
    *
    * @example
    * debounce(() => { console.log('debounced'); }, 0)();
    * // 'debounced'
  */
  const debounce = (callable, time) => {
    let timeout = false;
    const debounced = (...args) => {
      if (timeout !== false) {
        clearTimeout(timeout);
      }
      timeout = timer(() => {
        callable(...args);
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
  /**
    * Creates a throttled function that only invokes callable at most once per every wait milliseconds. The throttle function has a clear method to cancel the timer.
    *
    * @function throttle
    * @category function
    * @ignoreTest
    * @type {Function}
    * @param {Function} callable - The function to be invoked.
    * @param {number} time - The time in milliseconds.
    * @returns {Function} The throttled function.
    *
    * @example
    * throttle(() => { console.log('throttle'); }, 0)();
    * // 'throttle'
  */
  const throttle = (callable, time) => {
    let timeout = false;
    let shouldThrottle;
    const throttled = (...args) => {
      if (timeout) {
        shouldThrottle = true;
        return;
      }
      callable(...args);
      timeout = timer(() => {
        if (shouldThrottle) {
          callable(...args);
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
    * @category function
    * @type {Function}
    * @param {Array|Object} methods - The object to take methods from.
    * @returns {*} Returns a function which has value, methods, add, and done. When invoking the function the argument is saved as the value property for further chaining.
    *
    * @test
    * (async () => {
    *   const chained = chain({a(item) { return item;}});
    *   chained('Acid').a();
    *   return assert(chained.done(), 'Acid');
    * });
    *
    * @example
    * const chained = chain({a(item) { return item;}});
    * chained('Acid').a();
    * chained.done();
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
    link.add(methods);
    return link;
  };
  assign($, {
    chain
  });

  /**
    * Invoke an array of functions.
    *
    * @function inSync
    * @category function
    * @type {Function}
    * @param {Array|Object|Function} collection - The functions to be invoked.
    * @param {*} arg - The object passed as an argument to each method.
    * @returns {undefined} Returns undefined.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   inSync([() => {tempList.push(1);}, () => {tempList.push(2);}]);
    *   return assert(tempList, [1, 2]);
    * });
    *
    * @example
    * inSync([() => {console.log(1);}, () => {console.log(2);}]);
    * // 1
    * // 2
    * // => undefined
  */
  const inSync = (collection, arg) => {
    return each(collection, (item) => {
      item(arg);
    });
  };
  /**
    * Invoke an array of functions asynchronously. Each function is awaited to ensure execution order.
    *
    * @function inAsync
    * @category function
    * @type {Function}
    * @async
    * @param {Array|Object|Function} collection - The functions to be invoked.
    * @param {*} arg - The object passed as an argument to each method.
    * @returns {undefined} Returns undefined.
    *
    * @test
    * (async () => {
    *   const tempList = [];
    *   await inAsync([async () => {tempList.push(1);}, async () => {tempList.push(2);}]);
    *   return assert(tempList, [1, 2]);
    * });
    *
    * @example
    * inAsync([async () => {console.log(1);}, async () => {console.log(2);}]);
    * // 1
    * // 2
    * // => undefined
  */
  const inAsync = async (collection, arg) => {
    return eachAsync(collection, async (item) => {
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
    * @category function
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
    * @function reArg
    * @category function
    * @type {Function}
    * @param {Function} callable - The function to be invoked.
    * @param {Array} indexes - The arranged argument indexes.
    * @returns {Function} Returns the new function.
    *
    * @example
    * reArg((a, b, c) => {
    *   return [a, b, c];
    * }, [1,2,0])(1,2,3);
    * // => [2, 3, 1]
  */
  const reArg = (callable, indexes) => {
    return (...args) => {
      return callable(...indexes.map((item) => {
        return args[item];
      }));
    };
  };
  assign($, {
    reArg
  });

  /**
    * Creates a function that provides value to wrapper as its first argument. The wrapper function is given two arguments the value and the provided argument from the newly created function.
    *
    * @function wrap
    * @category function
    * @type {Function}
    * @param {*} value - The value to wrap.
    * @param {Function} wrapper - The wrapper function.
    * @returns {Function} The new function.
    *
    * @example
    * wrap('Lucy', (firstName, lastName) => {
    *  return `My name is ${firstName} ${lastName}.`;
    * })('Diamonds');
    * // => 'My name is Lucy Diamonds.'
  */
  const wrap = (value, wrapper) => {
    return (...arg) => {
      return wrapper(value, ...arg);
    };
  };
  assign($, {
    wrap,
  });

  /**
    * Strictly checks if a number is zero.
    *
    * @function isZero
    * @category number
    * @type {Function}
    * @param {number} item - Number to be checked.
    * @returns {boolean} True or False.
    *
    * @example
    * isZero(0);
    * // => true
    * @example
    * isZero(1);
    * // => false
  */
  const isZero = (item) => {
    return item === 0;
  };
  /**
    * Strictly checks if a number equal to another number.
    *
    * @function isNumberEqual
    * @category number
    * @type {Function}
    * @param {number} item - Number to be checked against num.
    * @param {number} num - Number to be checked against item.
    * @returns {boolean} True or False.
    *
    * @example
    * isNumberEqual(0, 0);
    * // => true
    * @example
    * isNumberEqual(0, 1);
    * // => false
  */
  const isNumberEqual = (item, num) => {
    return item === num;
  };
  /**
    * Checks if a number is within a range.
    *
    * @function isNumberInRange
    * @category number
    * @type {Function}
    * @param {number} num - Number to be checked.
    * @param {number} start - Beginning of range.
    * @param {number} end - End of range.
    * @returns {boolean} True or False.
    *
    * @example
    * isNumberInRange(1, 0, 2);
    * // => true
    * @example
    * isNumberInRange(1, -1, 0);
    * // => false
  */
  const isNumberInRange = (num, start, end) => {
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
    * @function hasKeys
    * @category object
    * @type {Function}
    * @param {Object} object - Object from which keys are extracted.
    * @param {Array} properties - Array of object keys.
    * @returns {boolean} - Returns true or false.
    *
    * @example
    * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Thor']);
    * // => true
    *
    * @example
    * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
    * // => false
  */
  const hasKeys = (object, properties) => {
    const objectKeys = keys(object);
    return whileArray(properties, (item) => {
      return objectKeys.includes(item);
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
    * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy', 'Tom']);
    * // => true
    * @example
    * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Other', 'Tom']);
    * // => false
  */
  const hasAnyKeys = (object, properties) => {
    const objectKeys = keys(object);
    return Boolean(properties.find((item) => {
      return objectKeys.includes(item);
    }));
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
    * @category object
    * @param {Object} source - Object to be cloned.
    * @param {Array} array - Array used to determine what values to be plucked.
    * @param {Object} [newObject = {}] - Object to be populated with plucked values.
    * @returns {Object} - A new object with plucked properties.
    *
    * @example
    * pick({a:1, b:2, c:3}, ['a','b']);
    * // => {a:1, b:2}
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
    * @category object
    * @type {Function}
    * @param {Object} object - Object from which keys are extracted.
    * @returns {Array} - Returns an array of key values.
    *
    * @test
    * (async () => {
    *   const results = compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
    *   return assert(results.includes('Lucy') && results.includes('John') && results.includes('other'), true);
    * });
    *
    * @example
    * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
    * // => ['Lucy', 'John', 'other']
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
     * @category object
     * @param {Object} source - Source object.
     * @param {Object} compareObject - Object to compare to source.
     * @returns {boolean} Returns the true or false.
     *
     * @example
     * isMatchObject({a: 1}, {a: 1});
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
    * Creates an inverted version of a given object by switching it's keys and values.
    *
    * @function invert
    * @type {Function}
    * @category object
    * @param {Object} thisObject - Object to be inverted.
    * @param {Array} [invertedObject = {}] - Empty object to be populated with inverted values from thisObject.
    * @returns {Object} - Returns object with keys and values switched.
    *
    * @example
    * invert({a:1});
    * // => {1:'a'}
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
    * omit({a:1, b:2}, ['a']);
    * // => {b:2}
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
    * @category string
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
        return match.toUpperCase().replace(/ /g, '');
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
    * @category string
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @param {Array} words - Strings to replace.
    * @param {string} value - The match replacement.
    * @returns {string} - The string with the replacement.
    *
    * @example
    * replaceList('Her name was user.', ['user'], 'Lucy');
    * // => 'Her name was Lucy.'
  */
  const replaceList = (string, words, value) => {
    return string.replace(new RegExp('\\b' + words.join('|') + '\\b', 'gi'), value);
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
    * @category string
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
    * @category string
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @returns {string} Replaced string.
    *
    * @example
    * htmlEntities(`<script>console.log('Lucy & diamonds.')</script>`);
    * // => `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`
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
    * @category string
    * @type {Function}
    * @param {string} string - String to be replaced.
    * @returns {string} Replaced string.
    *
    * @example
    * sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`);
    * // => `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`
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
    * @category string
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
    * @category string
    * @param {string} string - String to be truncated.
    * @param {number} maxLength - The desired max length of the string.
    * @returns {string} - The mutated string.
    *
    * @example
    * truncate('Where is Lucy?', 2);
    * // => 'Where is'
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
    * @category string
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
    * @category string
    * @param {string} string - String to extract first letter from.
    * @returns {string} - An upper case letter.
    *
    * @example
    * upperFirstLetter('upper');
    * // => "U"
  */
  const upperFirstLetter = (string) => {
    return string[0].toUpperCase();
  };
  /**
    * Capitalizes the first letter.
    *
    * @function upperFirst
    * @type {Function}
    * @category string
    * @param {string} string - String to be mutated.
    * @returns {string} - String with first letter capitalized.
    *
    * @example
    * upperFirst('upper');
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
    * @category string
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
    * @category string
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
    * @category string
    * @param {string} string - String to be mutated.
    * @returns {string} - String with all first letters capitalized.
    *
    * @example
    * upperFirstOnlyAll('LYSERGIC ACID DIETHYLAMIDE');
    * // => 'Lysergic Acid Diethylamide'
  */
  const upperFirstOnlyAll = (string) => {
    return upperFirstOnly(string.toLowerCase()).replace(spaceFirstLetter$1, (match) => {
      return match.toUpperCase();
    });
  };
  assign($, {
    upperFirst,
    upperFirstAll,
    upperFirstLetter,
    upperFirstOnly,
    upperFirstOnlyAll,
  });

  /**
    * Creates new object with deeply assigned values from another object/array.
    *
    * @function assignDeep
    * @category utility
    * @type {Function}
    * @param {Object} object - Object to be assigned new properties.
    * @param {Object} otherObject - Object from which properties are extracted.
    * @param {boolean} [mergeArrays = true] - Array from which items are assigned to the new object.
    * @returns {Object} - Returns object with the newly assigned properties.
    *
    * @example
    * assignDeep({a:1}, {b:2})
    * // => {a:1, b:2}
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
    * @category utility
    * @type {Function}
    * @param {Function} method - Prototype method.
    * @returns {Function} - Cached method.
    *
    * @example
    * cacheNativeMethod(Array.prototype.push)([], 1);
    * // => 1
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
     * @category utility
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
     * @category utility
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
        if (hasKeys(compareObject, sourceProperties)) {
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
    * @category utility
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
    * // => true
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
    * @category utility
    * @param {string} string - String to be broken up.
    * @returns {Array} - Array used to go through object chain.
    *
    * @example
    * toPath('post.like[2]');
    * // => ['post', 'like', '2']
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
    * @category utility
    * @returns {number} - Returns a unique id.
    *
    * @test
    * (async () => {
    *   return await assert(uid(), 0) && await assert(uid(), 1);
    * });
    *
    * @example
    * uid();
    * // => 0
    * uid();
    * // => 1
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
    * @test
    * (async () => {
    *   return await assert(uid(), 0) &&
    *    await assert(uid(), 1) &&
    *    await assert(uid.free(0), undefined) &&
    *    await assert(uid(), 0);
    * });
    *
    * @example
    * uid();
    * // => 0
    * @example
    * uid();
    * // => 1
    * @example
    * uid.free(0);
    * // => undefined
    * @example
    * uid();
    * // => 0
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
    * @category utility
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
    * // => 'c'
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
    * @category utility
    * @param {string} modelName - Name of the model.
    * @property {Object} - The model object.
    * @returns {*} Returns the associated model.
    *
    * @example
    * model('test', {a: 1}) && model('test');
    * // => {a: 1}
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
    * @category utility
    * @param  {(string|number|Object|Array)} value - Strictly compared against the on argument.
    * @param {(string|number|Object|Array)} on -  Strictly compared against the value argument.
    * @param {(string|number|Object|Array)} off -  Value to be returned.
    * @returns {(string|number|Object|Array)} - The opposing value to the current.
    *
    * @example
    * toggle(1, 2, 3);
    * // => 2
  */
  const toggle = (value, on, off) => {
    return (isEqual(on, value)) ? off : on;
  };
  assign($, {
    toggle
  });

  const returnFlow = (callable) => {
    return (...methods) => {
      return (arg) => {
        let value = arg;
        callable(methods, (item) => {
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
    * @category utility
    * @type {Function}
    * @param {Array} collection - Methods to invoke.
    * @returns {Function} Returns the new composite function.
    *
    * @example
    * flow(increment, increment, deduct)(0);
    * // => 1
  */
  const flow = returnFlow(eachArray);
  /**
    * This method is like flow except that it creates a function that invokes the given functions from right to left.
    *
    * @function flowRight
    * @category utility
    * @type {Function}
    * @param {Array} collection - Methods to invoke.
    * @returns {Function} Returns the new composite function.
    *
    * @example
    * flowRight(increment, increment, deduct)(0);
    * // => 1
  */
  const flowRight = returnFlow(eachArrayRight);
  assign($, {
    flow,
    flowRight,
  });

  const returnFlow$1 = (callable) => {
    return (...methods) => {
      return async (arg) => {
        let value = arg;
        await callable(methods, async (item) => {
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
    * @category utility
    * @type {Function}
    * @async
    * @param {Array} collection - Methods to invoke.
    * @returns {Function} Returns the new composite function.
    *
    * @example
    * flowAsync(async (item) => {return increment(item);}, async (item) => {return increment(item);})(0);
    * // => 2
  */
  const flowAsync = returnFlow$1(eachAsync);
  /**
    * This method is like flow except that it creates a function that invokes the given functions from right to left.
    *
    * @function flowAsyncRight
    * @category utility
    * @type {Function}
    * @async
    * @param {Array} collection - Methods to invoke.
    * @returns {Function} Returns the new composite function.
    *
    * @example
    * flowAsyncRight(async (item) => {return increment(item);}, async (item) => {return increment(item);})(0);
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
