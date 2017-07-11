import acid from '../namespace/index';
import { hasValue } from '../internal/is';
import { assign, keys } from '../internal/object';
import { eachArray, eachWhile } from '../array/each';
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
export const eachObject = (thisObject, iteratee) => {
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
export const whileObject = (callingObject, iteratee, results = {}) => {
  return eachWhile(callingObject, (item, key, thisObject, propertyCount, objectKeys) => {
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
export const filterObject = (object, iteratee, results = {}) => {
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
export const mapObject = (object, iteratee, results = {}) => {
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
export const compactMapObject = (object, iteratee, results = {}) => {
  eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
    const result = iteratee(item, key, results, propertyCount, objectKeys);
    if (hasValue(result)) {
      results[key] = result;
    }
  });
  return results;
};
assign(acid, {
  compactMapObject,
  eachObject,
  filterObject,
  mapObject,
  whileObject,
});
