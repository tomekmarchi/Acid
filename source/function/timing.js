import acid from '../namespace/index';
import { assign } from '../internal/object';
import { times } from '../array/times';
export const timer = (fn, time) => {
  return setTimeout(fn, time);
};
export const interval = (fn, time) => {
  return setInterval(fn, time);
};
const generateClear = (method, clearMethod) => {
  return (max) => {
    times(0, method(() => {}, max || 1000), (index) => {
      clearMethod(index);
    });
  };
};
export const clearTimers = generateClear(timer, clearTimeout);
export const clearIntervals = generateClear(interval, clearInterval);
export const debounce = (original, time) => {
  let timeout = false;
  const fn = (...args) => {
    if (timeout !== false) {
      clearTimeout(timeout);
    }
    timeout = timer(() => {
      original(...args);
      timeout = false;
    }, time);
  };
  fn.clear = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = false;
    }
  };
  return fn;
};
export const throttle = (func, time) => {
  let timeout = false;
  let shouldThrottle;
  const fn = (...args) => {
    if (timeout) {
      shouldThrottle = true;
      return;
    }
    func(...args);
    timeout = timer(() => {
      if (shouldThrottle) {
        func(...args);
      }
      timeout = false;
    }, time);
  };
  fn.clear = () => {
    clearTimeout(timeout);
    timeout = false;
  };
  return fn;
};
assign(acid, {
  debounce,
  interval,
  throttle,
  timer,
});
