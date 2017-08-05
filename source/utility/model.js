import acid from '../namespace/index';
import { assign } from '../internal/object';
import { get } from './get';
import { hasValue } from '../internal/is';
/**
  * Set & Get a model.
  *
  * @function model
  * @type {Function}
  * @category utility
  * @param {string} modelName - Name of the model.
  * @property {Object} - The model object.
  * @returns {*} Returns the associated model.
  *
  * @example
  * model('test', {a: 1});
  * // => {a: 1}
  * @example
  * model('test');
  * // => {a: 1}
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
