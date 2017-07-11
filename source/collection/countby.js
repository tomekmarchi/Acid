import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
/**
  * Creates an object composed of keys generated from the results of running each element of collection through iteratee.
  *
  * @function countBy
  * @type {Function}
  * @param {Array} collection - Array of objects.
  * @param {Function} iteratee - The iteratee to transform keys.
  * @returns {Object} Returns the composed aggregate object.
  *
  * @example
  * countBy([{a:1}, {a:3}], (item) => { return 'a';}));
  * // => {a: 2}
*/
export const countBy = (collection, iteratee) => {
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
  * @type {Function}
  * @param {Array} collection - Array of objects.
  * @param {Function} property - The name of the key.
  * @returns {number} The count.
  *
  * @example
  * countKey([{a:1}, {a:3}], 'a');
  * // => 2
*/
export const countKey = (array, property) => {
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
  * @type {Function}
  * @param {Array} collection - Array of objects.
  * @param {string} property - The name of the key.
  * @returns {number} The count.
  *
  * @example
  * countWithoutKey([{a:1}, {a:3}], 'b');
  * // => 2
*/
export const countWithoutKey = (array, keyName) => {
  let count = 0;
  eachArray(array, (item) => {
    if (!item[keyName]) {
      count++;
    }
  });
  return count;
};
assign(acid, {
  countBy,
  countKey,
  countWithoutKey
});
