const findIndexCache = (element, index, array, indexMatch, propertyName) => {
  if (element[propertyName] === indexMatch) {
    return true;
  }
};
const findItem = (array, indexMatch, propertyName = 'id') => {
  const result = findArray(array, (element, index) => findIndexCache(element, index, array, indexMatch, propertyName));
  return (result === -1) ? false : result;
};
acid.findItem = findItem;
const findIndex = (array, indexMatch, propertyName = 'id') => {
  const result = findIndexArray(array, (element, index) => findIndexCache(element, index, array, indexMatch, propertyName));
  return (result === -1) ? false : result;
};
acid.findIndex = findIndex;
