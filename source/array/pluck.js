import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isArray } from '../internal/is';
import { arraySortToObject } from './sortToObject';
import { mapArray } from './each';
// Pluck an attribute from each object in an array.
export const pluck = (array, pluckThis) => {
  let pluckMethod;
  if (isArray(pluckThis)) {
    pluckMethod = (item) => {
      return arraySortToObject((pluckItem, pluckKey, object) => {
        object[pluckItem] = item[pluckItem];
      }, pluckThis);
    };
  } else {
    pluckMethod = (item) => {
      const result = item[pluckThis];
      return result;
    };
  }
  return mapArray(array, pluckMethod);
};
assign(acid, {
  pluck
});
