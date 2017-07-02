import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
/**
*    ifNotEqual checks if a particular property on an object has a value. If that property is without a     *    value, it reassigns that property to the equalThis argument.
*   @property {rootObject} - takes an object
*   @property {property} - the property which is being checked
*   @property {equalThis} - the reassignment value of the property being checked
*   @example
*   const obj = {
*   a:1,
*   b,
* };
*  const c = 1;
*  ifNotEqual(obj, b, c)
* // -> obj.b = 1
*
*   @returns
*   object
*/
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
