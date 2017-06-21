import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject, isPlainObject, isArray, pushApply } from '/each';
export const assignDeep = (object, otherObject, mergeArrays) => {
  eachObject(otherObject, (item, key) => {
    if (isPlainObject(item) && isPlainObject(object[key])) {
      assignDeep(object[key], item, mergeArrays);
    } else if (mergeArrays && isArray(item) && isArray(object[key])) {
      pushApply(object[key], item);
    } else {
      object[key] = item;
    }
  });
  return object;
};
assign(acid, {
  assignDeep
});
