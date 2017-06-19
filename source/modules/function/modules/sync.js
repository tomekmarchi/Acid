// Launch functions in sync
$.inSync = (fns, params) => {
  return map(fns, (item) => {
    apply(item, params);
  });
};
