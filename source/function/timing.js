import acid from '../namespace/index';
import { assign } from '../internal/object';
import { times } from '../array/times';
/**
  * Timer wrapper.
  *
  * @function timer
  * @category function
  * @ignoreTest
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
  * @category function
  * @ignoreTest
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
  * Clear all active timers.
  *
  * @function clearTimers
  * @category function
  * @ignoreTest
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
  * @category function
  * @ignoreTest
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
  * @category function
  * @ignoreTest
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Function} The debounced function.
  *
  * @example
  * debounce(() => { console.log('debounced'); }, 0)();
  * // 'debounced'
*/
export const debounce = (callable, time) => {
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
  * Creates a throttled function that only invokes callable at most once per every wait milliseconds. The throttle function has a clear method to cancel the timer.
  *
  * @function throttle
  * @category function
  * @ignoreTest
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Function} The throttled function.
  *
  * @example
  * throttle(() => { console.log('throttle'); }, 0)();
  * // 'throttle'
*/
export const throttle = (callable, time) => {
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
  clearIntervals,
  clearTimers,
  debounce,
  interval,
  throttle,
  timer,
});
