import acid from '../namespace/index';
import { assign } from '../internal/object';
import { times } from '../array/times';
/**
  * A wrapper around setTimeout.
  *
  * @function timer
  * @param {Object} method - Function to be invoked.
  * @param {number} time - The time in nanoseconds.
  * @type {Function}
  * @returns {number} Set timeout id.
  *
  * @example
  * timer(() => { return 1}, 1);
  * // => 0: 1
*/
export const timer = (method, time) => {
  return setTimeout(method, time);
};
/**
  * Wrapper around setInterval.
  *
  * @function interval
  * @type {Function}
  * @param {Object} method - Function to be invoked.
  * @param {number} time - The time in nanoseconds.
  * @returns {Object} Returns the new empty object.
  *
  * @example
  * interval(() => { return 1}, 1);
  * // => 0: 1
*/
export const interval = (method, time) => {
  return setInterval(method, time);
};
const generateClear = (method, clearMethod) => {
  return () => {
    times(0, method(() => {}, 0), (index) => {
      clearMethod(index);
    });
  };
};
/**
  * Clears setTimeout function.
  *
  * @function clearTimers
  * @type {Function}
  * @param {Object} timer - Timer to be cleared.
  * @param {Function} clearTimeout - Invocation of time clear function.
  * @returns {Number} Returns a number of the cleared setTimeout ID.
  *
  * @example
  *
  * // =>
*/
export const clearTimers = generateClear(timer, clearTimeout);
/**
  * Clears setInterval function.
  *
  * @function clearIntervals
  * @type {Function}
  * @param {Object} interval - Interval to be cleared.
  * @param {Object} clearInterval - Invocation of interval clear function.
  * @returns {Number} Returns a number of the cleared setInterval ID.
  *
  * @example
  * clearIntervals();
  * // =>
*/
export const clearIntervals = generateClear(interval, clearInterval);
/**
  *
  *
  * @function debounce
  * @type {Function}
  * @param {Object} original -
  * @param {Object} time -
  * @returns {Object}
  *
  * @example
  * debounce();
  * // =>
*/
export const debounce = (original, time) => {
  let timeout = false;
  const debounced = (...args) => {
    if (timeout !== false) {
      clearTimeout(timeout);
    }
    timeout = timer(() => {
      original(...args);
      timeout = false;
    }, time);
  };
  debounced.clear = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = false;
    }
  };
  return debounced;
};
/**
  *
  *
  * @function throttle
  * @type {Function}
  * @param {Object} method -
  * @param {Object} time -
  * @returns {Object} Returns the new empty object.
  *
  * @example
  * throttle();
  * // =>
*/
export const throttle = (method, time) => {
  let timeout = false;
  let shouldThrottle;
  const throttled = (...args) => {
    if (timeout) {
      shouldThrottle = true;
      return;
    }
    method(...args);
    timeout = timer(() => {
      if (shouldThrottle) {
        method(...args);
      }
      timeout = false;
    }, time);
  };
  throttled.clear = () => {
    clearTimeout(timeout);
    timeout = false;
  };
  return throttled;
};
assign(acid, {
  debounce,
  interval,
  throttle,
  timer,
});
