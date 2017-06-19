(function () {
'use strict';

let cacheSuper;
const $ = (...args) => {
  return cacheSuper(...args);
};
Object.assign($, {
  superMethod(method) {
    cacheSuper = method;
  },
  freeGlobal: () => {
    return undefined;
  }
});

const functionPrototype = Function.prototype;
Object.assign($, {
  cacheNativeMethod(funct) {
    return functionPrototype.call.bind(funct);
  }
});

/**
 * @name Acid.js
 * @version 2.0 Stable
 * @site http://acidjs.com
 */
$.freeGlobal.$ = $;

}());
