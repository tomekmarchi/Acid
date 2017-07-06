import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapObject } from './each';
export const omit = (originalObject, array) => {
  return compactMapObject(originalObject, (item, key) => {
    if (!array.includes(key)) {
      return item;
    }
  });
};
assign(acid, {
  omit
});
