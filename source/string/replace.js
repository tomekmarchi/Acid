// replace all items in an array with a string
const replaceWithList = (string, array, toReplace) => {
  return stringReplaceCall(string, new regExp(`\\b${joinArray(array, '|')}\\b`, 'gi'), toReplace);
};
acid.replaceWithList = replaceWithList;
