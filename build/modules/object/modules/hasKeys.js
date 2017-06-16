/*
	Perform check on object to ensure all keys listed are present on the object.
*/
const hasKeys = (object, keys) => {
  let flag = false;
  eachWhile(keys, (key) => {
    flag = hasValue(object[key]);
    return flag;
  });
  return flag;
};
$.hasKeys = hasKeys;
/*
	Perform check on object to ensure any of the keys listed are present on the object.
*/
const hasAnyKeys = (object, keys) => {
  const flag = keys.find((item) => {
    return hasValue(object[item]);
  });
  return flag;
};
$.hasAnyKeys = hasAnyKeys;
