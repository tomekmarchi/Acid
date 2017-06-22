import acid from '../namespace/index';
import { assign } from '../internal/object';
export const sortOldest = (arrayArg, key, pureMode) => {
  const array = (pureMode) ? arrayArg : [...arrayArg];
  return array.sort((previous, next) => {
    if (!next[key]) {
      return -1;
    } else if (!previous[key]) {
      return 1;
    } else if (previous[key] < next[key]) {
      return 1;
    } else if (previous[key] > next[key]) {
      return -1;
    }
    return 0;
  });
};
export const getOldest = (array, key) => {
  return sortOldest(array, key)[0];
};
assign(acid, {
  sortOldest,
  getOldest,
});
