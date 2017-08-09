import acid from '../namespace/index';
import { assign } from '../internal/object';
const findIndexCache = (element, index, array, indexMatch, propertyName) => {
  if (element[propertyName] === indexMatch) {
    return true;
  }
};
/**
  * Finds an object in a collection by the given id and property name.
  *
  * @function findItem
  * @type {Function}
  * @category array
  * @param {Array} collection - Collection to be checked for an item.
  * @param {number|string} id - The value to look for.
  * @param {string} [propertyName = 'id'] - The name of the property to compare.
  * @returns {Object} - The found object.
  *
  * @example
  * findItem([{id: 1}, {id: 2}], 1);
  * // => {id: 1}
*/
export const findItem = (collection, id, propertyName = 'id') => {
  const result = collection.find((element, index) => {
    return findIndexCache(element, index, collection, id, propertyName);
  });
  return (result === -1) ? false : result;
};
/**
  * Finds an object in a collection by the given id and property name and returns the array index of the object.
  *
  * @function findIndex
  * @type {Function}
  * @category array
  * @param {Array} collection - Collection to be checked for an item.
  * @param {number|string} id - The value to look for.
  * @param {string} [propertyName = 'id'] - The name of the property to compare.
  * @returns {number} - The index of the object.
  *
  * @example
  * findIndex([{id: 1}, {id: 2}], 1);
  * // => 0
*/
export const findIndex = (collection, id, propertyName = 'id') => {
  const result = collection.findIndex((element, index) => {
    return findIndexCache(element, index, collection, id, propertyName);
  });
  return (result === -1) ? false : result;
};
assign(acid, {
  findIndex,
  findItem,
});
