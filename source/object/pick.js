/*
	pick specific properties, listed in an array, from an object and a new object is returned with those specfic properties.
*/
const pick = (array, originalObject, newObject) => {
  return arraySortToObject((item, key, object) => {
    object[item] = originalObject[item];
  }, array, newObject);
};
acid.pick = pick;
