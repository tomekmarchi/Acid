let cacheSuper;
const acid = (...args) => {
  return cacheSuper(...args);
};
acid.superMethod = (method) => {
  cacheSuper = method;
};
export default acid;
