import acid from '../namespace/index';
import { assign } from '../internal/object';
import { apply } from '../internal/function';
import { eachArray, eachArrayRight } from './each';
import { flatten } from './flatten';
const returnFlow = (method) => {
  return (...mainArgs) => {
    const funcs = flatten(mainArgs);
    return function wrapped(...wrapArgs) {
      const value = [];
      method(funcs, (item) => {
        value[0] = apply(item, wrapped, value[0] ? value : wrapArgs);
      });
      return value[0];
    };
  };
};
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
export const flow = returnFlow(eachArray);
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
export const flowRight = returnFlow(eachArrayRight);
assign(acid, {
  flow,
  flowRight,
});
