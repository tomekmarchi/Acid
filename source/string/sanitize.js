import acid from '../namespace/index';
import { assign } from '../internal/object';
const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
const andRegex = /&/g;
const lessThanRegex = /</g;
const moreThanRegex = />/g;
const doubleQuoteRegex = /"/g;
const forwardSlashRegex = /\//g;
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
  string = string.replace(doubleQuoteRegex, '&quot;');
  return string.replace(forwardSlashRegex, '&quot;');
};
export const sanitize = (string) => {
  return createHtmlEntities(rawURLDecode(string));
};
assign(acid, {
  rawURLDecode,
  createHtmlEntities,
  sanitize
});
