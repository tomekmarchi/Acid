import acid from '../namespace/index';
import { assign } from '../internal/object';
// Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
export const ary = (funct, amount) => {
  return (...args) => {
    return funct(...args.splice(0, amount));
  };
};
assign(acid, {
  ary
});
