import acid from '../namespace/index';
import { assign } from '../internal/object';
import { arraySortToObject } from '../source/array/arraySortToObject';
const pick = (array, originalObject, newObject) => {
  return arraySortToObject((item, key, object) => {
    object[item] = originalObject[item];
  }, array, newObject);
};
assign(acid, {
  pick
});
