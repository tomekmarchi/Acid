/*
	Performs a deep comparison on listed property values
	props will default to first objects
*/
const isPropsEqual = (object, compareObject, props) => {
  let result = false;
  const keys = props || objectKeys(object);
  eachWhile(keys, (key) => {
    result = isMatch(object[key], compareObject[key]);
    return result;
  });
  return result;
};
acid.isPropsEqual = isPropsEqual;
/*
  Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
*/
acid.matches = (object) => {
  const keys = objectKeys(object);
  return (compareObject) => {
    return isPropsEqual(object, compareObject, keys);
  };
};
/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/
const isPropsEqualDeep = acid.isPropsEqualDeep = (object, compareObject) => {
  let result = false;
  if (isEqualArray(objectKeys(object), objectKeys(compareObject))) {
    eachWhile(objectKeys(object), (key) => {
      result = isMatch(object[key], compareObject[key]);
      return result;
    });
  }
  return result;
};
/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/
const isMatch = (object, compareObject) => {
  let result = false;
  if (object === compareObject) {
    result = true;
  }
  if (toStringCall(object) === toStringCall(compareObject)) {
    if (isPlainObject(object)) {
      result = isPropsEqualDeep(object, compareObject);
    } else if (isArray(object)) {
      result = isEqualArrayDeep(object, compareObject);
    }
  }
  return result;
};
acid.isMatch = isMatch;
