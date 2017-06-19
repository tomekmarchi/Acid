// Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
const xor = function (arrayOG) {
  const args = arguments;
  const numArgs = getLength(args);
  let result;
  if (!numArgs) {
    return uniqueArray(arrayOG);
  }
  result = xorBase(arrayOG, args[0]);
  eachArray(args, (item) => {
    result = xorBase(result, item);
  });
  return result;
};
$.xor = xor;
