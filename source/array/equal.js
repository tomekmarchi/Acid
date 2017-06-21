import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from './each';
import { isMatch } from '../object/isPropsEqual';
export const isEqualArray = (original, array) => {
  let result = true;
  if (array.length === original.length) {
    eachWhile(original, (item, index) => {
      result = array[index] !== item;
      return result;
    });
  } else {
    result = false;
  }
  return result;
};
export const isEqualArrayDeep = (original, array) => {
  let result = true;
  if (array.length === original.length) {
    eachWhile(original, (item, index) => {
      result = isMatch(item, array[index]);
      return result;
    });
  } else {
    result = false;
  }
  return result;
};
assign(acid, {
  isEqualArray,
  isEqualArrayDeep
});
