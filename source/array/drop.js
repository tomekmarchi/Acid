import acid from '../namespace/index';
import { assign } from '../internal/object';
export const drop = (array, amount, arrayLength = array.length) => {
  return array.splice(amount, arrayLength);
};
export const dropRight = (array, amount) => {
  return drop(array, 0, array.length - amount);
};
assign(acid, {
  drop,
  dropRight
});
