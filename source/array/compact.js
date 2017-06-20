// cache for function that removes falsey values from array or object
compact: (array) => {
  return filter(array, (item) => {
    return isString(item) && !getLength(item) ? undefined : item;
  });
},
