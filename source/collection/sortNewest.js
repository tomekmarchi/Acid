import acid from '../namespace/index';
import { assign } from '../internal/object';
export const sortNewest = (arrayArg, key, pureMode) => {
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
export const getNewest = (array, key) => {
  return sortNewest(array, key)[0];
};
assign(acid, {
  getNewest,
  sortNewest,
});
