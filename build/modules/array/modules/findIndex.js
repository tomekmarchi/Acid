const findIndexCache = (element, index, array, indexMatch, propertyName) => {
  if (element[propertyName] === indexMatch) {
    return true;
  }
};
const findItem = (array, indexMatch, propertyName = 'id') => {
  const result = findArray(array, (element, index) => findIndexCache(element, index, array, indexMatch, propertyName));
  return (result === -1) ? false : result;
};
$.findItem = findItem;
const findIndex = (array, indexMatch, propertyName = 'id') => {
  const result = findIndexArray(array, (element, index) => findIndexCache(element, index, array, indexMatch, propertyName));
  return (result === -1) ? false : result;
};
$.findIndex = findIndex;
