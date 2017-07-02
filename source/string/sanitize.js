import acid from '../namespace/index';
import { assign } from '../internal/object';
const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
const andRegex = /&/g;
const lessThanRegex = /</g;
const moreThanRegex = />/g;
const doubleQuoteRegex = /"/g;
/**
rawURLDecode takes a string and decodes it using native methods as well as regexToPath
@property  {string} - takes a url string
@example
const foo = 'http://bar.com'
rawURLDecode(foo)
*/
export const rawURLDecode = (string) => {
  return decodeURIComponent(string.replace(rawURLDecodeRegex, () => {
    return '%25';
  }));
};
export const createHtmlEntities = (stringArg) => {
  let string = stringArg;
  string = string.replace(andRegex, '&amp;');
  string = string.replace(lessThanRegex, '&lt;');
  string = string.replace(moreThanRegex, '&gt;');
  return string.replace(doubleQuoteRegex, '&quot;');
};
export const sanitize = (string) => {
  return createHtmlEntities(rawURLDecode(string));
};
assign(acid, {
  createHtmlEntities,
  rawURLDecode,
  sanitize
});
