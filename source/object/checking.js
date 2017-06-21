export const isAll = (method, ...args) => {
  let result = true;
  eachArray(args, (item, index, array, arrayLength, safe) => {
    result = method(item);
    if (!result) {
      safe.halt = true;
    }
  }, true);
  return result;
};
