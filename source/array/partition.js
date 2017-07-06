import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapArray } from './each';
// Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
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
