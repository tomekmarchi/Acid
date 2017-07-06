let cacheSuper;
/**
 * Acid Object accessible through $ default method is model.
 *
 * @function $
 * @param {string} modelName - Model key.
 * @param {Object} model - An object that is saved as the value using the modelName as the string.
 * @returns {Object} The model associated with the modelName as the key.
 *
 * @example
 * $('modelName', {example: 1});
 * // -> {example: 1}
 */
const $ = (...args) => {
  return cacheSuper(...args);
};
/**
 * Re-assigns the main Acid function.
 *
 * @function $.superMethod
 * @param {Function} method - The function that will become the main object's method.
 *
 * @example
 * $.superMethod($.get);
 * // -> $('flow', $);
 * // -> $.flow
 */
$.superMethod = (method) => {
  cacheSuper = method;
};
export default $;
