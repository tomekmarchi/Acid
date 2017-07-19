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
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isDecimal(1.01);
 * // => true
*/
export const isDecimal = (value) => {
  return value.toString().match(decimalCheck);
};
/**
 * Checks if the value is an array.
 *
 * @function isArray
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
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isFunction({});
 * // => true
*/
export const isFunction = (value) => {
  return (hasValue(value)) ? value instanceof Function : false;
};
/**
 * Checks if the value includes something.
 *
 * @function has
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
 * @function isFileCSS
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isFileCSS('test.json');
 * // => true
*/
export const isFileJSON = regexGenerator(/\.json$/);
/**
 * Checks if the string has a .js extension.
 *
 * @function isFileCSS
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isFileCSS('test.js');
 * // => true
*/
export const isFileJS = regexGenerator(/\.js$/);
/**
 * Checks if the string has a '.'.
 *
 * @function hasDot
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
 * @param {*} value - Object to be checked.
 * @returns {string} Returns the extension.
 *
 * @example
 * getFileExtension('test.js');
 * // => 'js'
*/
export const getFileExtension = (string) => {
  return string.match(getExtensionRegex);
};
/**
 * Checks if the value is a RegExp.
 *
 * @function isRegExp
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isRegExp(/test/);
 * // => true
*/
/**
 * Checks if the value is an Arguments object.
 *
 * @function isArguments
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
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isBoolean(true);
 * // => true
*/
/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isDate(new Date());
 * // => true
*/
/**
 * Checks if the value is a Map.
 *
 * @function isMap
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
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isUint32Array(new Uint32Array());
 * // => true
*/
const nativeObjectNames = ['RegExp', 'Arguments', 'Boolean', 'Date', 'Map', 'Set', 'WeakMap',
  'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array',
  'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array'];
eachArray(nativeObjectNames, (item) => {
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
assign(acid, {
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
