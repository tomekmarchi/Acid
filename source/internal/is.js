import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { assign, objectSize } from './object';
export const objectStringGenerate = (objectName) => {
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
export const isUndefined = function(value) {
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
export const isNull = (value) => {
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
export const hasValue = (value) => {
  return !isUndefined(value) && !isNull(value);
};
export const isSameObjectGenerator = (type) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.toString() === type : false;
  };
};
export const isConstructor = (nativeObject) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.constructor === nativeObject : false;
  };
};
export const decimalCheck = /\.|\+/;
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
export const isDecimal = (value) => {
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
export const isArray = Array.isArray;
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
export const isString = isConstructor(String);
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
export const isNumber = isConstructor(Number);
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
export const isPlainObject = (value) => {
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
export const isFunction = (value) => {
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
export const has = (value, ...search) => {
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
export const hasLength = (value) => {
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
export const isEmpty = (obj) => {
  if (isString(obj) || isArray(obj)) {
    return !hasLength(obj);
  } else if (isPlainObject(obj)) {
    return !objectSize(obj);
  }
  return !hasValue(obj);
};
export const regexGenerator = (regexType) => {
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
export const isFileCSS = regexGenerator(/\.css$/);
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
export const isFileJSON = regexGenerator(/\.json$/);
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
export const isFileJS = regexGenerator(/\.js$/);
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
export const hasDot = regexGenerator(/\./);
export const getExtensionRegex = /\.([0-9a-z]+)/;
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
export const getFileExtension = (string) => {
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
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
const arrayLikeObjects = ['ArrayBuffer', 'Float32Array', 'Float64Array',
  'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array',
  'Uint8ClampedArray', 'Uint16Array', 'Uint32Array'];
eachArray(arrayLikeObjects, (item) => {
  acid[`is${item}`] = (value) => {
    return (hasValue(value)) ? value.constructor.name === item : false;
  };
});
assign(acid, {
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
