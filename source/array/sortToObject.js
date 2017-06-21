import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
export const arraySortToObject = (func, array, sortedObject = {}) => {
  eachArray(array, (item, key) => {
    func(item, key, sortedObject);
  });
  return sortedObject;
};
assign(acid, {
  arraySortToObject
});
