import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isArray } from '../internal/array';
export const ensureArray = (object) => {
  return (isArray(object)) ? object : [object];
};
assign(acid, {
  ensureArray
});
