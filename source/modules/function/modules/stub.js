/*
	This method returns an empty object.
	$.times(2, $.stubObject);
	// => [{}, {}]
*/
$.stubObject = () => {
  return {};
};
/*
	This method returns an empty array.
	$.times(2, $.stubArray);
	// => [[], []]
*/
$.stubArray = () => {
  return [];
};
/*
	This method returns an empty string.
	$.times(2, $.stubString);
	// => ['', '']
*/
$.stubString = () => {
  return '';
};
/*
	This method returns false.
	$.times(2, $.stubfalse);
	// => [false, false]
*/
$.stubFalse = () => {
  return false;
};
/*
	This method returns true.
	$.times(2, $.stubtrue);
	// => [true, true]
*/
$.stubTrue = () => {
  return true;
};
/*
	This method returns undefined.
	$.times(2, _.noop);
	// => [undefined, undefined]
*/
$.noop = () => {
  return undefined;
};
