let cacheSuper;
/**
 * Acid Object accessible through $ default method is model.
 *
 * @function $
 * @returns {*} The return value of the superMethod. The default superMethod is model.
 *
 * @example
 * $('modelName', {example: 1});
 * // -> {example: 1}
 */
const $ = (...args) => {
  return cacheSuper(...args);
};
/**
 * Re-assigns the main method for $.
 *
 * @function superMethod
 * @memberof $
 * @param {Function} method - The function that will become the main object's method.
 * @returns {undefined} - Returns nothing.
 *
 * @example
 * superMethod($.get);
 * // -> $('flow', $);
 * // -> $.flow
 */
const superMethod = (method) => {
  cacheSuper = method;
};
$.superMethod = superMethod;
export default $;
