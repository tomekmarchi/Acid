const addChain = (chain, addToChain) => {
  each(addToChain, (item, key) => {
    chain.methods[key] = (...args) => {
      unShiftArray(args, chain.value);
      apply(item, args);
      return chain.methods;
    };
  });
  return chain;
};
$.chain = (methods) => {
  const chain = (value) => {
    chain.value = value;
    return chain.methods;
  };
  objectAssign(chain, {
    methods: {},
    add(addToChain) {
      return addChain(chain, addToChain);
    },
    done() {
      const value = chain.value;
      chain.value = null;
      return value;
    }
  });
  chain.add(methods);
  return chain;
};
