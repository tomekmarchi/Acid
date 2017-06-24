import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isArray } from '../internal/is';
export const ensureArray = (object) => {
  return (isArray(object)) ? object : [object];
};
assign(acid, {
  ensureArray
});
