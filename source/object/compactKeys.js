import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from '../object/each';
import { hasValue } from '../internal/is';
export const compactKeys = (object) => {
  const keys = [];
  eachObject(object, (item, key) => {
    if (hasValue(item)) {
      keys.push(key);
    }
  });
  return keys;
};
assign(acid, {
  compactKeys
});
