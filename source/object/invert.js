import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from './each';
export const invert = (thisObject, invertedObject = {}) => {
  eachObject(thisObject, (item, key) => {
    invertedObject[item] = key;
  });
  return invertedObject;
};
assign(acid, {
  invert,
});
