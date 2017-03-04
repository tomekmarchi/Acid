const $ = function (name, data) {
  return modelMethod(name, data);
};
let cacheSuper,
  corePath;
//avoid
global.$ = global.ACID = $;
$.super = (method) => {
  cacheSuper = method;
};
