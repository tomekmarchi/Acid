import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
/**
  * Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know the keys are unique.
  *
  * @function indexBy
  * @category collection
  * @type {Function}
  * @param {Array} collection - Array of objects.
  * @param {string} key - The property name to index by.
  * @returns {Object} Returns the composed aggregate object.
  *
  * @example
  * indexBy([{name: 'Lucy', id: 0}, {name: 'Erick', id: 1}], 'id');
  * // => { "0": {name: 'Lucy', id: 0}, "1": {name: 'Erick', id: 1}}
*/
export const indexBy = (array, key = 'id') => {
  const sortedObject = {};
  eachArray(array, (item) => {
    sortedObject[item[key]] = item;
  });
  return sortedObject;
};
assign(acid, {
  indexBy
});
