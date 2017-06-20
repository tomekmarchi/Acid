acid.ifInvoke = (method, ...args) => {
  return isFunction(method) ? apply(method, args) : undefined;
};
