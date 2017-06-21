const modelMethod = (modelName, object) => {
  if (hasValue(object)) {
    modelMethod[modelName] = object;
  }
  return get(modelName, modelMethod);
};
acid.model = modelMethod;
acid.superMethod(modelMethod);
