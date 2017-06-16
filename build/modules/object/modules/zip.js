$.zipObject = (keys, values, object) => {
  return arraySortToObject((item, index, object) => {
    object[item] = values[index];
  }, keys, object);
};
$.unZipObject = (object) => {
  const keys = [];
  const values = [];
  eachObject(object, (item, key) => {
    pushArray(keys, key);
    pushArray(values, item);
  });
  return [keys, values];
};
