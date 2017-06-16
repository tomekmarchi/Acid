const modelMethod = (modelName, object) => {
  if (hasValue(object)) {
    modelMethod[modelName] = object;
  }
  return get(modelName, modelMethod);
};
$.model = modelMethod;
$.super(modelMethod);
