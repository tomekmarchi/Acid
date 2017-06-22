import acid from '../namespace/index';
import { assign } from '../internal/object';
// get largest number from array
const mathNativeMax = Math.max;
export const largest = (array) => {
  return mathNativeMax(...array);
};
assign(acid, {
  largest
});
