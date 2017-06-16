/*

	Navigate down an object's chain via a string.

*/
const get = (propertyString, objectChain = $) => {
  let link = objectChain;
  const stringChain = splitCall(lastItem(splitCall(propertyString, slashString)), dotString);
  eachWhile(stringChain, (item) => {
    link = link[item];
    return hasValue(link);
  });
  return link;
};
$.get = get;
