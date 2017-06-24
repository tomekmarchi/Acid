import acid from '../namespace/index';
import { assign } from '../internal/object';
export const ifNotEqual = (rootObject, property, equalThis) => {
  if (property) {
    rootObject[property] = rootObject[property] || equalThis;
    return rootObject[property];
  }
  return rootObject;
};
assign(acid, {
  ifNotEqual,
});
