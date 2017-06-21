/*
	Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
	Arguments

	[predicates=[_.identity]] (...(Function|Function[])): The predicates to check.
	Returns

	(Function): Returns the new function.
*/
acid.overEvery = (array) => {
  return (...args) => {
    let result;
    eachWhile(array, (item) => {
      return apply(item, args);
    });
    return Boolean(result);
  };
};
/*
	Creates a function that invokes iteratees with the arguments it receives and returns their results.
*/
acid.over = (array) => {
  return (...args) => {
    return mapArray(array, (item) => {
      return apply(item, args);
    });
  };
};
