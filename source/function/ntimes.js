import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
/**
  * Creates a function that is restricted to execute method once. Repeat calls to the function will return the value of the first call. The method is executed with the this binding of the created function.
  *
  * @function once
  * @type {Function}
  * @param {Function} method - The function to be called.
  * @returns {Function} Returns the new pass-thru function.
  *
  * @example
  * const onceOnly = once(() => { return 1;});
  * onceOnly();
  * // => 1
  * onceOnly();
  * // => 1
*/
export const once = (method) => {
  let value;
  const onlyOnce = (...args) => {
    if (hasValue(value)) {
      value = method(...args);
    }
    return value;
  };
  return onlyOnce;
};
/**
  * Creates a function that executes method, only after being called n times.
  *
  * @function after
  * @type {Function}
  * @param {number} amount - The number of calls until method is invoked.
  * @param {Function} method - The function to be called.
  * @returns {Function} Returns the new pass-thru function.
  *
  * @example
  * const onlyAfter = after(1, () => { return 1;});
  * onlyAfter();
  * // => undefined
  * onlyAfter();
  * // => 1
*/
const after = (amount, method) => {
  let point = amount;
  let value;
  const onlyAfter = (...args) => {
    if (point !== null) {
      point--;
    }
    if (point <= 0) {
      value = method(...args);
    } else {
      point = null;
    }
    return value;
  };
  return onlyAfter;
};
/**
  * Creates a function that executes method, only before n times.
  *
  * @function before
  * @type {Function}
  * @param {number} amount - The number of calls before n.
  * @param {Function} method - The function to be called.
  * @returns {Function} Returns the new pass-thru function.
  *
  * @example
  * const onlyBefore = before(3, () => { return 1;});
  * onlyBefore(1);
  * // => 1
  * onlyBefore(2);
  * // => 2
  * onlyBefore(3);
  * // => 2
*/
const before = (amount, method) => {
  let point = amount;
  let value;
  const onlyBefore = (...args) => {
    if (point !== null) {
      point--;
    }
    if (point >= 1) {
      value = method(...args);
    } else {
      point = null;
    }
    return value;
  };
  return onlyBefore;
};
assign(acid, {
  after,
  before,
  once
});
