import acid from '../namespace/index';
import { assign } from '../internal/object';
export const isZero = (item) => {
  return item === 0;
};
export const isNumberEqual = (item, num) => {
  return item === num;
};
export const isNumberInRange = (num, start = 0, end = start) => {
  return num > start && num < end;
};
assign(acid, {
  isNumberInRange,
  isNumberEqual,
  isZero
});
