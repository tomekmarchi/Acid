import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Sorts an array in place using a key from oldest to newest.
  *
  * @function sortOldest
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection to be sorted.
  * @param {string} key - The property name to sort by based on it's value.
  * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
  * @returns {Array} The sorted array and or a clone of the array sorted.
  *
  * @example
  * sortOldest([{id: 1}, {id: 0}], 'id');
  * // => [{id: 0}, {id: 1}]
*/
export const sortOldest = (collection, key = 'id', pureMode = true) => {
  const array = (pureMode) ? collection : [...collection];
  return array.sort((previous, next) => {
    if (!next[key]) {
      return 1;
    } else if (!previous[key]) {
      return -1;
    } else if (previous[key] < next[key]) {
      return -1;
    } else if (previous[key] > next[key]) {
      return 1;
    }
    return 0;
  });
};
/**
  * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
  *
  * @function getOldest
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection to be sorted.
  * @param {string} key - The property name to sort by based on it's value.
  * @returns {Object} The newest object in the collection.
  *
  * @example
  * getOldest([{id: 1}, {id: 0}], 'id');
  * // => {id: 0}
*/
export const getOldest = (collection, key = 'id') => {
  return sortOldest(collection, key)[0];
};
assign(acid, {
  getOldest,
  sortOldest,
});
