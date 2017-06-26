import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isFunction } from '../internal/is';
import { map } from '../utility/each';
export const bindAll = (bindThese, withThis) => {
  return map(bindThese, (item) => {
    return isFunction(item) ? item.bind(withThis) : item;
  });
};
assign(acid, {
  bindAll
});
