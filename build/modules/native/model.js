const modelMethod = $.model = (modelName, object) => {
  if (hasValue(object)) {
    modelMethod[modelName] = object;
  }
  return get(modelName, modelMethod);
};
