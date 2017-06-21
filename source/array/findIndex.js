import acid from '../namespace/index';
import { assign } from '../internal/object';
const findIndexCache = (element, index, array, indexMatch, propertyName) => {
  if (element[propertyName] === indexMatch) {
    return true;
  }
};
export const findItem = (array, indexMatch, propertyName = 'id') => {
  const result = array.find((element, index) => {
    return findIndexCache(element, index, array, indexMatch, propertyName);
  });
  return (result === -1) ? false : result;
};
export const findIndex = (array, indexMatch, propertyName = 'id') => {
  const result = array.findIndex((element, index) => {
    return findIndexCache(element, index, array, indexMatch, propertyName);
  });
  return (result === -1) ? false : result;
};
assign(acid, {
  findItem,
  findIndex
});
