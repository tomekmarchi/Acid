let cacheSuper;
/**
 * Acid Object accessible through $ default method is model.
 *
 * @function acid
 * @param {string} modelName - Model key.
 * @param {Object} model - An object that is saved as the value using the modelName as the string.
 * @returns {Array} The model associated with the modelName as the key.
 *
 * @example
 * $('modelName', {example: 1});
 * // -> {example: 1}
 */
const acid = (...args) => {
  return cacheSuper(...args);
};
/**
 * Re-assigns the main Acid function.
 *
 * @function superMethod
 * @param {Function} method - The method that will be used as the main Acid objects method.
 *
 * @example
 * $.superMethod($.get);
 * // -> $('flow', $);
 * // -> $.flow
 */
const superMethod = (method) => {
  cacheSuper = method;
};
acid.superMethod = superMethod;
export default acid;
