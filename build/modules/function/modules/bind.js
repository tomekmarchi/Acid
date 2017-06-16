/*
	Replace mode will overwrite the original plainObject or Array
*/
const bindAll = (bindThese, withThis, replaceMode) => {
  let result;
  if (replaceMode) {
    result = each(bindThese, (item, key) => {
      if (isFunction(item)) {
        bindThese[key] = bindTo(item, withThis);
      }
    });
  } else {
    result = map(bindThese, (item) => {
      return isFunction(item) ? bindTo(item, withThis) : item;
    });
  }
  return result;
};
$.bindAll = bindAll;
