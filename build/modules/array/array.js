//shared functions
//Flattens a nested array. Pass level to flatten up to a depth;
const flatten = (array, level) => {
  for (let i = 0; i < (level || 1); i++) {
    array = array.reduce((previousValue, currentValue, index, array) => {
      return concatArray(previousValue, (level) ?
        ensureArray(currentValue) : (isArray(currentValue)) ? flatten(currentValue) : currentValue);
    }, []);
  }
  return array;
};
$.flatten = flatten;
//cache for function that removes falsey values from array or object
const compact = (array) => {
  return filter(array, (item) => {
    return isString(item) && !getLength(item) ? undefined : item;
  });
};
$.compact = compact;
const arraySortToObject = (func, array, sortedObject = {}) => {
  eachArray(array, (item, key) => {
    func(item, key, sortedObject);
  });
  return sortedObject;
};
