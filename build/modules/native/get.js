/*

	Navigate down an object's chain via a string.

*/
var get = $.get = (name, obj) => {
  obj = obj || $;
  eachWhile(splitCall(lastItem(splitCall(name, slashString)), dotString), (item) => {
    obj = obj[item];
    return hasValue(obj) ? True : False;
  });
  return obj;
};
