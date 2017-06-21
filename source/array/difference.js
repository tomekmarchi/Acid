import acid from '../namespace/index';
import { assign } from '../internal/object';
import { filterArray } from './each';
export const difference = (array, compare) => {
  return filterArray(array, (item) => {
    if (!compare.includes(item)) {
      return item;
    }
  });
};
assign(acid, {
  difference
});
