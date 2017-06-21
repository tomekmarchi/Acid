// Launch functions in sync
acid.inSync = (fns, params) => {
  return map(fns, (item) => {
    apply(item, params);
  });
};
