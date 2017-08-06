import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
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
export const groupBy = (array, iteratee) => {
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
assign(acid, {
  groupBy
});
