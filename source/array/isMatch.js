import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from './each';
export const isMatchArray = (original, array) => {
  let result = false;
  if (array.length === original.length) {
    eachWhile(original, (item, index) => {
      result = array[index] !== item;
      return result;
    });
  }
  return result;
};
assign(acid, {
  isMatchArray,
});
