arraySortToObject: (func, array, sortedObject = {}) => {
  eachArray(array, (item, key) => {
    func(item, key, sortedObject);
  });
  return sortedObject;
},
