// Flattens a nested array. Pass level to flatten up to a depth;
export const flatten = (arrayArg, level = 1) => {
  let array = arrayArg;
  for (let i = 0; i < level; i++) {
    array = array.reduce((previousValue, currentValue) => {
      return concatArray(previousValue, ensureArray(currentValue));
    }, []);
  }
  return array;
};
export const flattenDeep = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return concatArray(previousValue, (isArray(currentValue)) ? flatten(currentValue) : currentValue);
  }, []);
};
