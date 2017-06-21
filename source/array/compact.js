import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isString } from '../internal/is';
export const compact = (array) => {
  return array.filter((item) => {
    return isString(item) && !item.length ? false : item;
  });
};
assign(acid, {
  compact,
});
