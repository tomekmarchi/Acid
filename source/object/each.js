//loop through an object
const mapObject = (object, fn) => {
  const results = {};
  eachObject(object, (item, key, thisObject, len) => {
    results[key] = fn(item, key, thisObject, len);
  });
  return results;
};
acid.mapObject = mapObject;
const filterObject = (object, fn) => {
  const results = {};
  let result;
  eachObject(object, (item, key, thisObject, len) => {
    result = fn(item, key, thisObject, len);
    if (hasValue(result)) {
      results[key] = result;
    }
  });
  return results;
};
acid.filterObject = filterObject;
const eachObject = (thisObject, fn) => {
  eachArray(objectKeys(thisObject), (key, index, array, len) => {
    fn(thisObject[key], key, thisObject, len);
  });
};
acid.eachObject = eachObject;
const forEach = (array, funct, optional) => {
  array.forEach(funct, optional);
  return array;
};
acid.forEach = forEach;
const mapProperty = (array, funct) => {
  const thisObject = {};
  eachArray(getOwnPropertyNames(array), (item, key, arrayLength) => {
    thisObject[item] = funct(array[item], item, array, arrayLength, thisObject);
  });
  return thisObject;
};
acid.mapProperty = mapProperty;
const forIn = (thisObject, fn) => {
  const mappedObject = {};
  for (let key in thisObject) {
    mappedObject[key] = fn(thisObject[key], key, thisObject, mappedObject);
  }
  return mappedObject;
};
acid.forIn = forIn;
