import acid from '../namespace/index';
const objectNative = Object;
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
export const keys = objectNative.keys;
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
export const is = objectNative.is;
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
export const assign = objectNative.assign;
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
 * getOwnPropertyDescriptor({ bar: 42 }, 'foo');
 * // => { configurable: true, enumerable: true, value: 42, writable: true }
*/
export const getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor;
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
 * const obj = {};
 * defineProperty(obj, 'key', {
 *  enumerable: false,
 *  configurable: false,
 *  writable: false,
 *  value: 'static'
 * });
*/
export const defineProperty = objectNative.defineProperty;
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
export const getOwnPropertyNames = objectNative.getOwnPropertyNames;
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
export const objectSize = (target) => {
  return keys(target).length;
};
assign(acid, {
  assign,
  defineProperty,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  is,
  keys,
  objectSize
});
