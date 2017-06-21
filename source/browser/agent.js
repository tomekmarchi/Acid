// Get useragent info
const isAgent = (name) => {
  return (name) ? isAgent[name] : objectKeys(isAgent);
};
eachArray(splitCall(stringReplaceCall(stringReplaceCall(toLowerCaseCall(navigator.userAgent), /_/g, dotString), /[#_,;()]/g, ''), / |\//), (item) => {
  isAgent[item] = true;
});
acid.isAgent = isAgent;
