$.compactKeys = (object) => {
  const keys = [];
  each(object, (item, key) => {
    if (item) {
      pushArray(keys, key);
    }
  });
  return keys;
};
