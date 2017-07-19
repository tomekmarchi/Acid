import acid from '../namespace/index';
import { assign } from '../internal/object';
export const eventAdd = (node, ...args) => {
  node.addEventListener(...args);
  return node;
};
export const eventRemove = (node, ...args) => {
  node.removeEventListener(...args);
  return node;
};
assign(acid, {
  eventAdd,
  eventRemove,
});
