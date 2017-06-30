import acid from '../namespace/index';
import { assign } from '../internal/object';
<<<<<<< HEAD
/**
   * ifNotEqual checks if a particular property on an object has a value. If that property is without a value, it reassigns that property to the equalThis argument.
   @property {rootObject} - takes an object
   @property {property} - the property which is being checked
   @property {equalThis} - the reassignment value of the property being checked
   @example
   const obj = {
   a:1,
   b,
 };
  const c = 1;
   ifNotEqual(obj, b, c)
*/
=======
import { hasValue } from '../internal/is';
>>>>>>> ac71e399979c3ed42c404442d13d610398ab48a1
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
