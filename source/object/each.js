import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { hasValue } from '../internal/is';
import { assign, getOwnPropertyNames, keys } from '../internal/object';
export const eachObject = (thisObject, iteratee) => {
  const objectKeys = keys(thisObject);
  eachArray(keys, (key, index, array, propertyCount) => {
    iteratee(thisObject[key], key, thisObject, propertyCount, objectKeys);
  });
};
export const mapObject = (object, iteratee) => {
  const results = {};
  eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
    results[key] = iteratee(item, key, results, thisObject, propertyCount, objectKeys);
  });
  return results;
};
export const compactMapObject = (object, iteratee) => {
  const results = {};
  let result;
  eachObject(object, (item, key, thisObject, propertyCount, objectKeys) => {
    result = iteratee(item, key, results, propertyCount, objectKeys);
    if (hasValue(result)) {
      results[key] = result;
    }
  });
  return results;
};
export const mapProperty = (thisObject, iteratee) => {
  const results = {};
  const properties = getOwnPropertyNames(thisObject);
  eachArray(properties, (item, key, propertyCount) => {
    results[item] = iteratee(thisObject[item], item, results, properties, propertyCount, thisObject);
  });
  return thisObject;
};
export const forIn = (thisObject, iteratee) => {
  const mappedObject = {};
  for (const key in thisObject) {
    mappedObject[key] = iteratee(thisObject[key], key, thisObject, mappedObject);
  }
  return mappedObject;
};
assign(acid, {
  compactMapObject,
  eachObject,
  forIn,
  mapObject,
  mapProperty,
});
