import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { hasValue } from '../internal/is';
import { assign, getOwnPropertyNames, keys } from '../internal/object';
export const eachObject = (thisObject, fn) => {
  eachArray(keys(thisObject), (key, index, array, propertyCount) => {
    fn(thisObject[key], key, thisObject, propertyCount);
  });
};
export const mapObject = (object, fn) => {
  const results = {};
  eachObject(object, (item, key, thisObject, propertyCount) => {
    results[key] = fn(item, key, thisObject, propertyCount);
  });
  return results;
};
export const filterObject = (object, fn) => {
  const results = {};
  let result;
  eachObject(object, (item, key, thisObject, propertyCount) => {
    result = fn(item, key, thisObject, propertyCount);
    if (hasValue(result)) {
      results[key] = result;
    }
  });
  return results;
};
export const mapProperty = (array, funct) => {
  const thisObject = {};
  eachArray(getOwnPropertyNames(array), (item, key, arrayLength) => {
    thisObject[item] = funct(array[item], item, array, arrayLength, thisObject);
  });
  return thisObject;
};
export const forIn = (thisObject, fn) => {
  const mappedObject = {};
  for (const key in thisObject) {
    mappedObject[key] = fn(thisObject[key], key, thisObject, mappedObject);
  }
  return mappedObject;
};
assign(acid, {
  eachObject,
  filterObject,
  forIn,
  mapObject,
  mapProperty,
});
