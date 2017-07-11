import acid from '../namespace/index';
import { assign } from '../internal/object';
import { ensureArray } from '../array/ensure';
import { isArray } from '../internal/is';
/**
  * Takes the first or multiple items from an array.
  *
  * @function first
  * @type {Function}
  * @param {Array} array - Array to flatten
  * @param {number} [level = 1] - Number which determines how deep the array nest can be.
  * @returns {Array} - Returns an array.
  *
  * @example
  * flatten([1, [2, [3, [4]], 5]]);
  *  // => [1, 2, [3, [4]], 5]
*/
export const flatten = (arrayArg, level = 1) => {
  let array = arrayArg;
  for (let i = 0; i < level; i++) {
    array = array.reduce((previousValue, currentValue) => {
      return previousValue.concat(ensureArray(currentValue));
    }, []);
  }
  return array;
};
/**
  * Takes the first or multiple items from an array.
  *
  * @function flattenDeep
  * @type {Function}
  * @param {Array} array - Array to flatten.
  * @returns {Array} - Returns a completely flattened array.
  *
  * @example
  * flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
*/
export const flattenDeep = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return previousValue.concat((isArray(currentValue)) ? flatten(currentValue) : currentValue);
  }, []);
};
assign(acid, {
  flatten,
  flattenDeep,
});
