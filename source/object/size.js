/*
	Return the number of values in the list.
*/
const objectSize = (thisObject) => {
  return getLength(objectKeys(thisObject));
};
acid.size = objectSize;
