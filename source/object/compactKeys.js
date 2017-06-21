import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
import { eachObject } from '../native/each';
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
