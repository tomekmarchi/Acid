import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isFunction } from '../internal/is';
export const ifInvoke = (method, ...args) => {
  if (isFunction(method)) {
    return method(...args);
  }
};
assign(acid, {
  ifInvoke
});
