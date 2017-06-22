import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from './each';
import { arraySortToObject } from '../array/sortToObject';
export const zipObject = (keys, values) => {
  return arraySortToObject((item, index, object) => {
    object[item] = values[index];
  }, keys);
};
export const unZipObject = (object) => {
  const keys = [];
  const values = [];
  eachObject(object, (item, key) => {
    keys.push(key);
    values.push(item);
  });
  return [keys, values];
};
assign(acid, {
  zipObject,
  unZipObject,
});
