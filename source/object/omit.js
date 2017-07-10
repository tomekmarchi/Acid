import acid from '../namespace/index';
import { assign } from '../internal/object';
import { filterObject } from './each';
export const omit = (originalObject, array) => {
  return filterObject(originalObject, (item, key) => {
    return !array.includes(key);
  });
};
assign(acid, {
  omit
});
