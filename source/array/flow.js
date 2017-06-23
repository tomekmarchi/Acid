import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray, eachArrayRight } from './each';
import { hasValue } from '../internal/is';
const returnFlow = (method) => {
  return (...funcs) => {
    return (arg) => {
      let value;
      method(funcs, (item) => {
        const temp = (hasValue(value)) ? value : arg;
        value = item(temp);
      });
      return value;
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
