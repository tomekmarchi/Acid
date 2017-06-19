$.nthArg = (numArg) => {
  let num = numArg;
  return (...args) => {
    if (num < 0) {
      num = args.length - (num * -1);
    }
    return args[num];
  };
};
