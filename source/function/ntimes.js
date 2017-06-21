// Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
acid.once = (fn) => {
  let value;
  const onlyOnce = (...args) => {
    if (!value) {
      value = apply(fn, onlyOnce, args);
    }
    return value;
  };
  return onlyOnce;
};
// Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
const afterFn = (amountArg, fn) => {
  let amount = amountArg;
  const onlyAfter = (...args) => {
    amount--;
    if (amount < 0) {
      return apply(fn, onlyAfter, args);
    }
  };
  return onlyAfter;
};
acid.after = afterFn;
// Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
const beforeFn = (amountArg, fn) => {
  let amount = amountArg;
  const onlyBefore = (...args) => {
    amount--;
    if (amount > 0) {
      return apply(fn, onlyBefore, args);
    }
  };
  return onlyBefore;
};
acid.before = beforeFn;
// Creates a function that executes func, with the this binding and arguments of the created function, only after or equal to being called n times.
acid.onAfter = (amount, fn) => {
  return afterFn(amount - 1, fn);
};
// Creates a function that executes func, with the this binding and arguments of the created function, only before or equal to being called n times.
acid.onBefore = (amount, fn) => {
  return beforeFn(amount + 1, fn);
};
