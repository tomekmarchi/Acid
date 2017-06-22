import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
const sumOf = (array, resultArg = 0) => {
  let result = resultArg;
  let item;
  eachArray(array, (itemArg) => {
    item = itemArg;
    if (item) {
      result = result + Number(item);
    }
  });
  return result;
};
assign(acid, {
  sumOf
});
