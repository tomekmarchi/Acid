import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Removes all items from an array after a specified index.
  *
  * @function drop
  * @type {Function}
  * @param {Array} array - Source array.
  * @param {number} amount - Amount of items to drop from the array.
  * @param {number} [arrayLength = array.length] - Length of array.
  * @returns {Array} An array with all values removed after a user defined index.
  *
  * @example
  * drop([1, 2, 3], [1]);
  * //=> [1, 2]
*/
export const drop = (array, amount, arrayLength = array.length) => {
  return array.splice(amount, arrayLength);
};
/**
  * Removes all items from an array before a specified index.
  *
  * @function dropRight
  * @type {Function}
  * @param {Array} array - Source array.
  * @param {number} amount - Amount of items to drop from the array.
  * @returns {Array} An array with all values removed before a user defined index.
  *
  * @example
  * dropRight([1, 2, 3], [1]);
  * //=> [2, 3]
*/
export const dropRight = (array, amount) => {
  return drop(array, 0, array.length - amount);
};
assign(acid, {
  drop,
  dropRight
});
