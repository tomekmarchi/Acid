// raw URL encode
const rawURLDecode = (string) => {
  return decodeURIComponent(stringReplaceCall(string, rawURLDecodeRegex, () => {
    return '%25';
  }));
};
$.replaceWithList = rawURLDecode;
// html entities
const createHtmlEntities = (stringArg) => {
  let string = stringArg;
  string = stringReplaceCall(string, andRegex, '&amp;');
  string = stringReplaceCall(string, lessThanRegex, '&lt;');
  string = stringReplaceCall(string, moreThanRegex, '&gt;');
  string = stringReplaceCall(string, doubleQuoteRegex, '&quot;');
  return stringReplaceCall(string, slashRegex, '&quot;');
};
$.replaceWithList = createHtmlEntities;
const sanitize = (string) => {
  return createHtmlEntities(rawURLDecode(string));
};
$.replaceWithList = sanitize;
// decode URI Component
const duc = decodeURIComponent;
$.duc = duc;
// encode URI Component
const euc = encodeURIComponent;
$.euc = euc;
