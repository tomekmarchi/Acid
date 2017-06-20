// Pluck an attribute from each object in an array.
const pluck = function (array, pluckThis) {
  let pluckMethod;
  if (isArray(pluckThis)) {
    pluckMethod = (item, index) => arraySortToObject((pluckItem, pluckKey, object) => {
      object[pluckItem] = item[pluckItem];
    }, pluckThis);
  } else {
    pluckMethod = (item) => {
      const result = item[pluckThis];
      return result;
    };
  }
  return mapArray(array, pluckMethod);
};
acid.pluck = pluck;
