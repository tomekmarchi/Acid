import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
import { eachObject } from './each';
export const zipObject = (properties, values) => {
  const zipedObject = {};
  eachArray(properties, (item, key) => {
    zipedObject[item] = values[key];
  });
  return zipedObject;
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
  unZipObject,
  zipObject,
});
