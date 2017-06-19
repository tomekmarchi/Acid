let cacheSuper;
const $ = (...args) => {
  return cacheSuper(...args);
};
$.superMethod = (method) => {
  cacheSuper = method;
};
global.$ = $;
export default $;
