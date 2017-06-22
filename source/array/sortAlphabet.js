import acid from '../namespace/index';
import { assign } from '../internal/object';
/*
	Perform alphabetical sort on collection on provided key name
*/
export const sortAlpha = (collection, key) => {
  let currentKey;
  let nextKey;
  collection.sort((current, next) => {
    currentKey = current[key];
    nextKey = next[key];
    if (currentKey < nextKey) {
      return -1;
    } else if (currentKey > nextKey) {
      return 1;
    }
    return 0;
  });
  return collection;
};
assign(acid, {
  sortAlpha
});
