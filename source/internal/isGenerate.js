import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { hasValue } from './is';
export const objectStringGenerate = (objectName) => {
  return `[object ${objectName}]`;
};
export const isSameObjectGenerator = (type) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.toString() === type : false;
  };
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
