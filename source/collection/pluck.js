import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from '../array/each';
// Pluck an attribute from each object in an array.
export const pluck = (array, pluckThis) => {
  return mapArray(array, (item) => {
    const result = item[pluckThis];
    return result;
  });
};
assign(acid, {
  pluck
});
