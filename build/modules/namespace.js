let cacheSuper;
let corePath;
const $ = (...args) => {
  return cacheSuper(...args);
};
global.$ = $;
global.ACID = $;
$.superMethod = (method) => {
  cacheSuper = method;
};
