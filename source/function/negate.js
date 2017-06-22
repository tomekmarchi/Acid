import acid from '../namespace/index';
import { assign } from '../internal/object';
// Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
export const negate = (func) => {
  return (...args) => {
    return !func(...args);
  };
};
assign(acid, {
  negate
});
