import acid from '../namespace/index';
import { assign } from '../internal/object';
// start from end array using amount as index
export const right = (array, amount) => {
  return array[array.length - 1 - amount];
};
assign(acid, {
  right
});
