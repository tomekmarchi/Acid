/*
	This method returns an empty object.
	acid.times(2, acid.stubObject);
	// => [{}, {}]
*/
acid.stubObject = () => {
  return {};
};
/*
	This method returns an empty array.
	acid.times(2, acid.stubArray);
	// => [[], []]
*/
acid.stubArray = () => {
  return [];
};
/*
	This method returns an empty string.
	acid.times(2, acid.stubString);
	// => ['', '']
*/
acid.stubString = () => {
  return '';
};
/*
	This method returns false.
	acid.times(2, acid.stubfalse);
	// => [false, false]
*/
acid.stubFalse = () => {
  return false;
};
/*
	This method returns true.
	acid.times(2, acid.stubtrue);
	// => [true, true]
*/
acid.stubTrue = () => {
  return true;
};
/*
	This method returns undefined.
	acid.times(2, _.noop);
	// => [undefined, undefined]
*/
acid.noop = () => {
  return undefined;
};
