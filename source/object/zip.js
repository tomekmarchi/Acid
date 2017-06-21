import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from './each';
import { arraySortToObject } from '../source/array/sortToObject';
export const zipObject = (keys, values, object) => {
  return arraySortToObject((item, index, object) => {
    object[item] = values[index];
  }, keys, object);
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
