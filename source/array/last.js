import acid from '../namespace/index';
import { assign } from '../internal/object';
// Returns the last element of an array. Passing n will return the last n elements of the array.
export const lastItem = (array, indexFrom) => {
  const arrayLength = array.length;
  return (indexFrom) ? array.slice(arrayLength - indexFrom, arrayLength) : array[arrayLength - 1];
};
assign(acid, {
  lastItem
});
