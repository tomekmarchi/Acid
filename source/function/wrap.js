const returnWraped = (method, fliptrue) => {
  return () => {
    const list = [];
    const wrapped = (...wrappedArgs) => {
      return mapArray(list, (item) => {
        return apply(item, wrapped, wrappedArgs);
      });
    };
    objectAssign(wrapped, {
      list,
      add(...addTheseArg) {
        const addThese = flatten(addTheseArg);
        method(list, (fliptrue) ? addThese.reverse() : addThese);
      },
    });
    wrapped.add(args);
    return wrapped;
  };
};
const wrapCall = returnWraped(pushApply);
acid.wrap = wrapCall;
const wrapBefore = returnWraped(unShiftApply, true);
acid.wrapBefore = wrapBefore;
