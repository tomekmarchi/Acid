import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from '../array/each';
import { pluckObject } from '../object/pluckObject';
/**
  * Returns an array of the arrays of plucked values from the collection.
  *
  * @function pluckValues
  * @category collection
  * @type {Function}
  * @param {Array} collection - Array used to determine what values to be plucked.
  * @param {Array} pluckThese - Property names.
  * @returns {Array} - An array of arrays of plucked values.
  *
  * @example
  * pluckValues([{a: 1, b:3}, {a: 1, b:3}], ['a','b']);
  * // => [[1, 3], [1, 3]]
*/
export const pluckValues = (collection, pluckThese) => {
  return mapArray(collection, (item) => {
    return pluckObject(item, pluckThese);
  });
};
assign(acid, {
  pluckValues
});
