import acid from '../namespace/index';
import { assign } from '../internal/object';
import { get } from './get';
import { hasValue } from '../internal/is';
/**
  model assigns a property on itself
  @property {modelName} - takes a string
  @property {object} - takes an object
  @example
  const obj = {
  foo: bar
};
  model(model.foo, obj
*/
export const model = (modelName, object) => {
  if (hasValue(object)) {
    model[modelName] = object;
  }
  return get(modelName, model);
};
acid.superMethod(model);
assign(acid, {
  model
});
