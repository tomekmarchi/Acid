import acid from '../namespace/index';
import { assign } from '../internal/object';
/*
	Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
	Arguments

	[predicates=[_.identity]] (...(Function|Function[])): The predicates to check.
	Returns

	(Function): Returns the new function.
*/
export const overEvery = (array) => {
  return (...args) => {
    let result;
    array.find(array, (item) => {
      result = Boolean(item(...args));
      return result;
    });
    return result;
  };
};
/*
	Creates a function that invokes iteratees with the arguments it receives and returns their results.
*/
export const over = (array) => {
  return (...args) => {
    return array.map((item) => {
      return item(...args);
    });
  };
};
assign(acid, {
  over,
  overEvery,
});
