import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
const addLink = (link, addToChain) => {
  each(addToChain, (item, key) => {
    link.methods[key] = (...args) => {
      args.unshift(link.value);
      item(...args);
      return link.methods;
    };
  });
  return link;
};
export const chain = (methods) => {
  const link = (value) => {
    link.value = value;
    return link.methods;
  };
  assign(link, {
    methods: {},
    link(addToChain) {
      return addLink(link, addToChain);
    },
    done() {
      const value = link.value;
      link.value = null;
      return value;
    }
  });
  link.link(methods);
  return link;
};
assign(acid, {
  chain
});
