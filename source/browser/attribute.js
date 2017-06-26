import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapObject } from '../object/each';
import { hasValue, isPlainObject, isString } from '../internal/is';
export const nodeAttribute = (node, keys, value) => {
  let results;
  if (isString(keys)) {
    if (hasValue(value)) {
      node.setAttribute(keys, value);
    } else {
      return node.getAttribute(keys);
    }
  } else if (isPlainObject(keys)) {
    results = mapObject(keys, (item, key) => {
      return nodeAttribute(node, key, item);
    });
    if (value) {
      return results;
    }
  }
  return node;
};
assign(acid, {
  nodeAttribute
});
