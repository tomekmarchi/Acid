import acid from '../namespace/index';
import { assign } from '../internal/object';
import { get } from './get';
import { hasValue } from '../internal/is';
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
