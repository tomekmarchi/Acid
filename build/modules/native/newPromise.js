const promise = (callback) => {
  return new Promise(callback);
};
$.promise = promise;
