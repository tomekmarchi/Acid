let cacheSuper;
let corePath;
const $ = (...args) => {
  return cacheSuper(...args);
};
global.$ = $;
global.ACID = $;
$.super = (method) => {
  cacheSuper = method;
};
