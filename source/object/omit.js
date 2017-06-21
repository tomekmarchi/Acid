import acid from '../namespace/index';
import { assign } from '../internal/object';
import { filterObject } from './each';
export const omit = (originalObject, array) => {
  return filterObject(originalObject, (item, key) => {
    if (!array.includes(key)) {
      return item;
    }
  });
};
assign(acid, {
  omit
});
