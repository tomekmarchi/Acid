import acid from '../namespace/index';
import { assign } from '../internal/object';
import { map } from '../utility/each';
import { isFunction } from '../internal/is';
export const bindAll = (bindThese, withThis) => {
  return map(bindThese, (item) => {
    return isFunction(item) ? item.bind(withThis) : item;
  });
};
assign(acid, {
  bindAll
});
