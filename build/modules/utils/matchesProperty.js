$.matchesProperty = (path, srcValue) => {
  return (item) => {
    return get(path, item) === srcValue;
  };
};
