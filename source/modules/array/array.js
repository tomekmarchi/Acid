module.exports = ($) => {
  const {
    assign,
    isArray,
    reduceArray,
    concatArray,
    ensureArray
  } = $;
  // Flattens a nested array. Pass level to flatten up to a depth;
  const flatten = (arrayArg, level) => {
    let array = arrayArg;
    for (let i = 0; i < (level || 1); i++) {
      array = reduceArray(array, (previousValue, currentValue) => {
        return concatArray(previousValue, (level) ?
          ensureArray(currentValue) : (isArray(currentValue)) ? flatten(currentValue) : currentValue);
      }, []);
    }
    return array;
  };
  assign($, {
    ensureArray: (object) => {
      return (isArray(object)) ? object : [object];
    },
    // cache for function that removes falsey values from array or object
    compact: (array) => {
      return filter(array, (item) => {
        return isString(item) && !getLength(item) ? undefined : item;
      });
    },
    arraySortToObject: (func, array, sortedObject = {}) => {
      eachArray(array, (item, key) => {
        func(item, key, sortedObject);
      });
      return sortedObject;
    },
  });
};
