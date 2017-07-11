import acid from '../namespace/index';
import { assign } from '../internal/object';
const findIndexCache = (element, index, array, indexMatch, propertyName) => {
  if (element[propertyName] === indexMatch) {
    return true;
  }
};
/**
  * Checks if a value exists within an array. Returns true if it does and vice versa.
  *
  * @function findItem
  * @type {Function}
  * @param {Array} array - Array to be checked for an item
  * @param {number} indexMatch -
  * @param {String} [propertyName = 'id'] -
  * @returns {boolean} - Returns a boolean.
  *
  * @example
  * findItem([1, 2, 3], 1)
  * //=>
*/
export const findItem = (array, indexMatch, propertyName = 'id') => {
  const result = array.find((element, index) => {
    return findIndexCache(element, index, array, indexMatch, propertyName);
  });
  return (result === -1) ? false : result;
};
export const findIndex = (array, indexMatch, propertyName = 'id') => {
  const result = array.findIndex((element, index) => {
    return findIndexCache(element, index, array, indexMatch, propertyName);
  });
  return (result === -1) ? false : result;
};
assign(acid, {
  findItem,
  findIndex
});
