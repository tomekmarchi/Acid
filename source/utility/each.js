import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapArray, eachArray, mapArray } from '../array/each';
import { compactMapObject, eachObject, mapObject } from '../object/each';
import { hasValue, isArray, isFunction, isPlainObject } from '../internal/is';
const forEachWrap = (object, callback) => {
  return object.forEach(callback);
};
const generateCheckLoops = (arrayLoop, objectLoop) => {
  return (object, callback) => {
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
    return returned(object, callback);
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
assign(acid, {
  compactMap,
  each,
  map
});
