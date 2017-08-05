import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
import { unique } from './unique';
/**
  * Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
  *
  * @function union
  * @category array
  * @type {Function}
  * @param {...Array} arrays - The arrays to be evaluated.
  * @returns {Array} The aggregated array.
  *
  * @example
  * union([1,2,4], [1,2,3]);
  * // => [1, 2]
*/
export const union = (...arrays) => {
  const result = [];
  eachArray(arrays, (array) => {
    eachArray(unique(array), (item) => {
      if (result.includes(item)) {
        result.push(item);
      }
    });
  });
  return result;
};
assign(acid, {
  union
});
