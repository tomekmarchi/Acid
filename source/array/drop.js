import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Removes all items from an array after a specified index.
  *
  * @function drop
  * @type {Function}
  * @param {Array} array - Source array.
  * @param {number} amount - Amount of items to drop from the array.
  * @param {number} [upTo = array.length] - Index to stop at.
  * @returns {Array} An array with all values removed after a user defined index.
  *
  * @example
  * drop([1, 2, 3], 1);
  * // => [2, 3]
*/
export const drop = (array, amount, upTo = array.length) => {
  return array.splice(amount, upTo);
};
/**
  * Removes all items from an array before a specified index.
  *
  * @function dropRight
  * @type {Function}
  * @param {Array} array - Source array.
  * @param {number} amount - Amount of items to drop from the array.
  * @param {number} [upTo = array.length] - Index to stop at.
  * @returns {Array} An array with all values removed before a user defined index.
  *
  * @example
  * dropRight([1, 2, 3], 1);
  * // => [1, 2]
*/
export const dropRight = (array, amount, upTo = array.length) => {
  return drop(array, 0, upTo - amount);
};
assign(acid, {
  drop,
  dropRight
});
