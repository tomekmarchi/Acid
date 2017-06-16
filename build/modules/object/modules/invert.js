/*
	Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.
*/
const invert = (thisObject, invertedObject = {}) => {
  eachObject(thisObject, (item, key) => {
    invertedObject[item] = key;
  });
  return invertedObject;
};
$.invert = invert;
