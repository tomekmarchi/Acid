import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
// Converts arrays into objects.
export const arrayToObject = (values, properties) => {
  const sortedObject = {};
  eachArray(values, (item, key) => {
    sortedObject[properties[key]] = item;
  });
  return sortedObject;
};
assign(acid, {
  arrayToObject
});
