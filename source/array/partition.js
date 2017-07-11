import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapArray } from './each';
// Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
/**
  * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
  *
  * @function partition
  * @type {Function}
  * @param {Array} array - Takes an array to split.
  * @param {Function} funct - Function run on each item in array.
  * @returns {Array} - One array split into two arrays.
  *
  * @example
  *const users = [
  *{ 'user': 'barney',  'age': 36, 'active': false },
  *{ 'user': 'fred',    'age': 40, 'active': true },
  *{ 'user': 'pebbles', 'age': 1,  'active': false }
  *];
  * partition(users, function(o) { return o.active; });
  *  // => objects for [['fred'], ['barney', 'pebbles']]
*/
export const partition = (array, funct) => {
  const failed = [];
  return [
    compactMapArray(array, (item) => {
      if (funct(item)) {
        return item;
      }
      failed.push(item);
    }),
    failed
  ];
};
assign(acid, {
  partition
});
