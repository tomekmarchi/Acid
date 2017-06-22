import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
import { clear } from '../array/clear';
export const curry = (funts) => {
  const args = [];
  const curried = (...curryArgs) => {
    eachArray(curryArgs, (item) => {
      args.push(item);
    });
    return curried;
  };
  curried.result = () => {
    const results = funts(...args);
    clear(args);
    return results;
  };
  return curried;
};
export const curryRight = (funts) => {
  const args = [];
  const curried = (...curryArgs) => {
    eachArray(curryArgs, (item) => {
      args.unshift(item);
    });
    return curried;
  };
  curried.result = () => {
    const results = funts(...args);
    clear(args);
    return results;
  };
  return curried;
};
assign(acid, {
  curry,
  curryRight
});
