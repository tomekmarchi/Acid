// raw URL encode
const rawURLDecode = (string) => {
  return decodeURIComponent(stringReplaceCall(string, rawURLDecodeRegex, () => {
    return '%25';
  }));
};
acid.replaceWithList = rawURLDecode;
// html entities
const createHtmlEntities = (stringArg) => {
  let string = stringArg;
  string = stringReplaceCall(string, andRegex, '&amp;');
  string = stringReplaceCall(string, lessThanRegex, '&lt;');
  string = stringReplaceCall(string, moreThanRegex, '&gt;');
  string = stringReplaceCall(string, doubleQuoteRegex, '&quot;');
  return stringReplaceCall(string, slashRegex, '&quot;');
};
acid.replaceWithList = createHtmlEntities;
const sanitize = (string) => {
  return createHtmlEntities(rawURLDecode(string));
};
acid.replaceWithList = sanitize;
// decode URI Component
const duc = decodeURIComponent;
acid.duc = duc;
// encode URI Component
const euc = encodeURIComponent;
acid.euc = euc;
