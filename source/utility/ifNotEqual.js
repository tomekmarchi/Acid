import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
export const ifNotEqual = (rootObject, property, equalThis) => {
  if (property && !hasValue(rootObject[property])) {
    rootObject[property] = equalThis;
    return rootObject[property];
  }
  return rootObject;
};
assign(acid, {
  ifNotEqual,
});
