import acid from '../namespace/index';
import { assign } from '../internal/object';
import { times } from '../array/times';
/**
  * Timer wrapper.
  *
  * @function timer
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Object} Returns setTimeout ID.
  *
  * @example
  * timer(() => {}, 100);
  * // => 0
*/
export const timer = (callable, time) => {
  return setTimeout(callable, time);
};
/**
  * Interval wrapper.
  *
  * @function interval
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Object} Returns setInterval ID.
  *
  * @example
  * interval(() => {}, 100);
  * // => 0
*/
export const interval = (callable, time) => {
  return setInterval(callable, time);
};
const generateClear = (callable, clearMethod) => {
  return () => {
    times(0, callable(() => {}, 0), (index) => {
      clearMethod(index);
    });
  };
};
/**
<<<<<<< HEAD
  * Clear all active timers.
  *
  * @function clearTimers
  * @type {Function}
  * @returns {undefined} Returns undefined.
  *
  * @example
  * clearTimers();
  * // => undefined
*/
export const clearTimers = generateClear(timer, clearTimeout);
/**
  * Clear all active intervals.
  *
  * @function clearIntervals
  * @type {Function}
  * @returns {undefined} Returns undefined.
  *
  * @example
  * clearIntervals();
  * // => undefined
*/
export const clearIntervals = generateClear(interval, clearInterval);
/**
  * Creates a debounced function that delays invoking callable until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounce function has a clear method to cancel the timer.
  *
  * @function debounce
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Function} The debounced function.
  *
  * @example
  * const debounced = debounce(() => { console.log('debounced'); }, 0);
  * // => debounced();
*/
export const debounce = (callable, time) => {
=======
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
>>>>>>> origin/master
  let timeout = false;
  const debounced = (...args) => {
    if (timeout !== false) {
      clearTimeout(timeout);
    }
    timeout = timer(() => {
      callable(...args);
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
<<<<<<< HEAD
  * Creates a throttled function that only invokes callable at most once per every wait milliseconds. The throttle function has a clear method to cancel the timer.
  *
  * @function debounce
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Function} The throttled function.
  *
  * @example
  * const throttled = throttle(() => { console.log('debounced'); }, 0);
  * // => throttled();
*/
export const throttle = (callable, time) => {
=======
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
>>>>>>> origin/master
  let timeout = false;
  let shouldThrottle;
  const throttled = (...args) => {
    if (timeout) {
      shouldThrottle = true;
      return;
    }
    callable(...args);
    timeout = timer(() => {
      if (shouldThrottle) {
        callable(...args);
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
