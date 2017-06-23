import acid from '../namespace/index';
import { assign } from '../internal/object';
// Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
export const reArg = (funct, list) => {
  return (...args) => {
    return funct(...list.map((item) => {
      return args[item];
    }));
  };
};
/*
var rearg=(function(a, b, c) {
  return [a, b, c];
},[1,2,0]);

rearg(1,2,3);
-> [2, 3, 1]
*/
assign(acid, {
  reArg
});
