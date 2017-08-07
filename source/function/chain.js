import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
const add = (link, methods) => {
  each(methods, (item, key) => {
    link.methods[key] = (...args) => {
      item(link.value, ...args);
      return link.methods;
    };
  });
  return link;
};
/**
  * Creates a chainable set of functions.
  *
  * @function chain
  * @category function
  * @type {Function}
  * @param {Array|Object} methods - The object to take methods from.
  * @returns {*} Returns a function which has value, methods, add, and done. When invoking the function the argument is saved as the value property for further chaining.
  *
  * @example
  * chain({a(item) { return item;}})('Acid').a();
  * // => 'Acid'
*/
export const chain = (methods) => {
  const link = (value) => {
    link.value = value;
    return link.methods;
  };
  assign(link, {
    add(addToChain) {
      return add(link, addToChain);
    },
    done() {
      const value = link.value;
      link.value = null;
      return value;
    },
    methods: {},
  });
  link.link(methods);
  return link;
};
assign(acid, {
  chain
});
