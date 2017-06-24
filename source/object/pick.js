import acid from '../namespace/index';
import { arraySortToObject } from '../array/sortToObject';
import { assign } from '../internal/object';
const pick = (array, originalObject, newObject) => {
  return arraySortToObject((item, key, object) => {
    object[item] = originalObject[item];
  }, array, newObject);
};
assign(acid, {
  pick
});
