import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from '../array/each';
/**
  * Returns an array of the plucked values from the object. Values are plucked in the order given by the array.
  *
  * @function pluckObject
  * @category object
  * @type {Function}
  * @param {Object} value - Array used to determine what values to be plucked.
  * @param {string|Array} pluckThese - Property name.
  * @returns {Array} - An array of plucked values.
  *
  * @example
  * pluckObject({a: 1, b:3}, ['a','b']);
  * // => [1, 3]
*/
export const pluckObject = (value, pluckThese) => {
  return mapArray(pluckThese, (item) => {
    return value[item];
  });
};
assign(acid, {
  pluckObject
});
