import acid from '../namespace/index';
import { assign } from '../internal/object';
export const nthArg = (numArg) => {
  let num = numArg;
  return (...args) => {
    if (num < 0) {
      num = args.length - (num * -1);
    }
    return args[num];
  };
};
assign(acid, {
  nthArg
});
