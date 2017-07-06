import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapArray } from './each';
export const difference = (array, compare) => {
  return compactMapArray(array, (item) => {
    if (!compare.includes(item)) {
      return item;
    }
  });
};
assign(acid, {
  difference
});
