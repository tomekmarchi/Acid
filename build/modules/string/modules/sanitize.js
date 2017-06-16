//raw URL encode
const rawURLDecode = $.rawURLDecode = (string) => {
  return decodeURIComponent(stringReplaceCall(string, rawURLDecodeRegex, function() {
    return '%25';
  }));
};
//html entities
const createHtmlEntities = $.htmlEntities = (string) => {
  string = stringReplaceCall(string, andRegex, '&amp;');
  string = stringReplaceCall(string, lessThanRegex, '&lt;');
  string = stringReplaceCall(string, moreThanRegex, '&gt;');
  string = stringReplaceCall(string, doubleQuoteRegex, '&quot;');
  return stringReplaceCall(string, slashRegex, '&quot;');
};
const sanitize = $.sanitize = (string) => {
  return createHtmlEntities(rawURLDecode(string));
};
//decode URI Component
const duc = $.duc = decodeURIComponent;
//encode URI Component
const euc = $.euc = encodeURIComponent;
