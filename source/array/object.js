import acid from '../namespace/index';
import { assign } from '../internal/object';
import { arraySortToObject } from './sortToObject';
// Converts arrays into objects.
export const arrayToObject = (values, keys) => {
  return arraySortToObject((item, index, objectArg) => {
    objectArg[keys[index]] = item;
  }, values);
};
assign(acid, {
  arrayToObject
});
