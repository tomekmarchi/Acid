import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
import { unique } from './unique';
// Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
export const union = (...args) => {
  const result = [];
  eachArray(args, (array) => {
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
