import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapArray, eachArray, filterArray, mapArray } from '../array/each';
import { compactMapObject, eachObject, filterObject, mapObject } from '../object/each';
import { hasValue, isArray, isFunction, isPlainObject } from '../internal/is';
const forEachWrap = (object, callback) => {
  return object.forEach(callback);
};
const generateCheckLoops = (arrayLoop, objectLoop) => {
  return (callingObject, iteratee) => {
    let returned;
    if (!hasValue(callingObject)) {
      return;
    } else if (isArray(callingObject)) {
      returned = arrayLoop;
    } else if (isPlainObject(callingObject) || isFunction(callingObject)) {
      returned = objectLoop;
    } else if (object.forEach) {
      returned = forEachWrap;
    } else {
      returned = objectLoop;
    }
    return returned(callingObject, iteratee);
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
export const map = generateCheckLoops(mapArray, mapObject);
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
export const each = generateCheckLoops(eachArray, eachObject);
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
export const compactMap = generateCheckLoops(compactMapArray, compactMapObject);
/**
  * Iterates through the given and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
  *
  * @function filter
  * @type {Function}
  * @param {(Array|Object|Map|WeakMap|Function|Set)} callingObject - Object that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
  * @returns {Object} - A new object of the same calling object's type.
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
export const filter = generateCheckLoops(filterArray, filterObject);
assign(acid, {
  compactMap,
  each,
  filter,
  map
});
