import acid from '../namespace/index';
import { assign } from '../internal/object';
import { arraySortToObject } from './sortToObject';
// Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
export const indexBy = (array, index) => {
  return arraySortToObject((item, key, object) => {
    object[item[index]] = item;
  }, array);
};
assign(acid, {
  indexBy
});
