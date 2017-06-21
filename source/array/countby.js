import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
export const countBy = (array, funct) => {
  const object = {};
  let result;
  eachArray(array, (item) => {
    result = funct(item);
    if (!object[result]) {
      object[result] = 0;
    }
    object[result]++;
  });
  return object;
};
export const countKey = (array, keyName) => {
  let count = 0;
  eachArray(array, (item) => {
    if (item[keyName]) {
      count++;
    }
  });
  return count;
};
export const countNoKey = (array, keyName) => {
  let count = 0;
  eachArray(array, (item) => {
    if (!item[keyName]) {
      count++;
    }
  });
  return count;
};
assign(acid, {
  countBy,
  countKey,
  countNoKey
});
