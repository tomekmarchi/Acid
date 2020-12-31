import acid from '../namespace/index';
import { assign } from '../internal/object';
import { flattenDeep } from './flatten';
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
  * // => [1, 2, 4, 3]
*/
export const union = (...arrays) => {
  return unique(flattenDeep(arrays));
};
assign(acid, {
  union
});
