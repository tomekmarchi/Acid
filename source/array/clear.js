import acid from '../namespace/index';
import { assign } from '../internal/object';
export const clear = (array) => {
  array.length = 0;
  return array;
};
assign(acid, {
  clear,
});
