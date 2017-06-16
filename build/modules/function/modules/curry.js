$.curry = (funts) => {
  const argsLength = getLength(funts);
  const args = [];
  const curry = (...curryArgs) => {
    eachArray(curryArgs, (item) => {
      pushArray(args, item);
    });
    return curry;
  };
  curry.result = () => {
    const results = apply(funts, curry, args);
    clearArray(args);
    return results;
  };
  return curry;
};
/*
	const curried=curry(function(a,b,c){
		return [a,b,c];
	});

	curried(1)(2)(3);
	curried.result(); [1, 2, 3]

*/
$.curryRight = function(funts) {
  const argsLength = getLength(funts);
  const args = [];
  const curry = function(...curryArgs) {
    eachArray(curryArgs, (item) => {
      unShiftArray(args, item);
    });
    return curry;
  };
  curry.result = () => {
    const results = apply(funts, curry, args);
    clearArray(args);
    return results;
  };
  return curry;
};
/*

	curried(1)(2)(3);
	// → [1, 2, 3]

	curried(1, 2)(3);
	// → [1, 2, 3]

	curried(1, 2, 3);
	// → [1, 2, 3]

*/
