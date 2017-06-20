// Converts arrays into objects.
const arrayToObject = function (values, keys) {
  return arraySortToObject((item, index, objectArg) => {
    objectArg[keys[index]] = item;
  }, values);
};
acid.object = arrayToObject;
