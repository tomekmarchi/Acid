import acid from '../namespace/index';
import { assign } from '../internal/object';
export const take = (array, amount = 1) => {
  return array.slice(0, amount);
};
export const takeRight = (array, amount = 1) => {
  return array.slice(array.length - amount, amount);
};
assign(acid, {
  take,
  takeRight
});
