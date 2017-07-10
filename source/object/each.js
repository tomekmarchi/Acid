import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { hasValue } from '../internal/is';
import { assign, keys } from '../internal/object';
/**
  * Iterates through the given object.
  *
  * @function eachObject
  * @type {Function}
  * @param {Object} callingObject - Object that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
  * @returns {Object} The originally given object.
  *
  * @example
  * eachObject({a: 1, b: 2, c: 3}, (item) => {
  *   console.log(item);
  * });
  * // => {a: 1, b: 2, c: 3}
*/
export const eachObject = (thisObject, iteratee) => {
  const objectKeys = keys(thisObject);
  eachArray(keys, (key, index, array, propertyCount) => {
    iteratee(thisObject[key], key, thisObject, propertyCount, objectKeys);
  });
};
/**
  * Iterates through the calling object and creates a new object with the results of the iteratee on every element in the calling object.
  *
  * @function mapObject
  * @category Utility
  * @type {Function}
  * @param {Object} callingObject - Object that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
  * @returns {Object} A new object of the same calling object's type.
  *
  * @example
  * mapObject({a: 1, b: 2, c: 3}, (item) => {
  *   return item * 2;
  * });
  * // => {a: 2, b: 4, c: 6}
*/
export const mapObject = (object, iteratee) => {
  const results = {};
  eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
    results[key] = iteratee(item, key, results, thisObject, propertyCount, objectKeys);
  });
  return results;
};
/**
  * Iterates through the calling object and creates a new object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
  *
  * @function compactMapObject
  * @type {Function}
  * @param {Object} callingObject - Object that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
  * @returns {Object} A new object with mapped properties that are not null or undefined.
  *
  * @example
  * compactMapObject({a: 0, b: 2, c: 3}, (item) => {
  *   return item * 2;
  * });
  * // => {b: 4, c: 6}
*/
export const compactMapObject = (object, iteratee) => {
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
/**
  * Iterates through the given and creates a new object with all elements that pass the test implemented by the iteratee.
  *
  * @function filterObject
  * @type {Function}
  * @param {Object} callingObject - Object that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
  * @returns {Object} A new object with properties that passed the test.
  *
  * @example
  * filterObject({a: false, b: true, c: true}, (item) => {
  *   return true;
  * });
  * // => {b: true, c: true}
*/
export const filterObject = (object, iteratee) => {
  const results = {};
  let result;
  eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
    if (iteratee(item, key, results, thisObject, propertyCount, objectKeys) === true) {
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
});
