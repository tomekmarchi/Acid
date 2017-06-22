import acid from '../namespace/index';
import { assign } from '../internal/object';
const mathNativeMin = Math.min;
// get smallest number from array
export const smallest = (array) => {
  return mathNativeMin(...array);
};
assign(acid, {
  smallest
});
