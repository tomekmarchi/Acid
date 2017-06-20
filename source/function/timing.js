const clearTimer = clearTimeout;
const timerMethod = (fn, time) => {
  return setTimeout(fn, time);
};
acid.clearTimers = generateClear(timerMethod, clearTimer);
acid.clearIntervals = generateClear(intervalMethod, clearInterval);
acid.timer = timerMethod;
const intervalMethod = (fn, time) => {
  return setInterval(fn, time);
};
acid.interval = intervalMethod;
const generateClear = (method, clearMethod) => {
  return (max) => {
    times(0, method(() => {}, max || 1000), (index) => {
      clearMethod(index);
    });
  };
};
acid.debounce = (original, time) => {
  let timeout = false;
  const fn = (...args) => {
    if (timeout !== false) {
      clearTimer(timeout);
    }
    timeout = timerMethod(() => {
      apply(original, fn, args);
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
acid.throttle = (func, time) => {
  let timeout = false;
  let shouldThrottle;
  const fn = (...args) => {
    if (timeout) {
      shouldThrottle = true;
      return;
    }
    apply(func, fn, args);
    timeout = timerMethod(() => {
      if (shouldThrottle) {
        apply(func, fn, args);
      }
      timeout = false;
    }, time);
  };
  fn.clear = () => {
    clearTimer(timeout);
    timeout = false;
  };
  return fn;
};
acid.inAsync = async (fns, params) => {
  await eachAsync(fns, async (item) => {
    await apply(item, params);
  });
};
