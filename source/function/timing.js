import acid from '../namespace/index';
import { assign } from '../internal/object';
import { times } from '../array/times';
export const timer = (method, time) => {
  return setTimeout(method, time);
};
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
export const clearTimers = generateClear(timer, clearTimeout);
export const clearIntervals = generateClear(interval, clearInterval);
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
