import acid from '../namespace/index';
import { assign } from '../internal/object';
export const wrap = (...args) => {
  const list = [];
  const wrapped = (...wrappedArgs) => {
    return list.map((item) => {
      return item(...wrappedArgs);
    });
  };
  assign(wrapped, {
    list,
    add(...addTheseArg) {
      list.push(...addTheseArg);
    },
  });
  wrapped.add(args);
  return wrapped;
};
export const wrapBefore = (...args) => {
  const list = [];
  const wrapped = (...wrappedArgs) => {
    return list.map((item) => {
      return item(...wrappedArgs);
    });
  };
  assign(wrapped, {
    list,
    add(...addThese) {
      list.unshift(...addThese.reverse());
    },
  });
  wrapped.add(args);
  return wrapped;
};
assign(acid, {
  wrap,
  wrapBefore
});
