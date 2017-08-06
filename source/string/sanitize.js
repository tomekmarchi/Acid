import acid from '../namespace/index';
import { assign } from '../internal/object';
const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
const andRegex = /&/g;
const lessThanRegex = /</g;
const moreThanRegex = />/g;
const doubleQuoteRegex = /"/g;
/**
  * Raw URL decoder.
  *
  * @function rawURLDecode
  * @type {Function}
  * @category string
  * @param {string} string - String to be replaced.
  * @returns {string} - Converted string into the decoded URI Component .
  *
  * @example
  * rawURLDecode('Lucy%20saw%20diamonds%20in%20the%20sky.');
  * // => 'Lucy saw diamonds in the sky.'
*/
export const rawURLDecode = (string) => {
  return decodeURIComponent(string.replace(rawURLDecodeRegex, () => {
    return '%25';
  }));
};
/**
  * Replaced sensitive characters with their matching html entity.
  *
  * @function htmlEntities
  * @type {Function}
  * @param {string} string - String to be replaced.
  * @returns {string} Replaced string.
  *
  * @example
  * htmlEntities(`<script>console.log('Lucy & diamonds.')</script>`);
  * // => '&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;'
*/
export const htmlEntities = (string) => {
  return string.replace(andRegex, '&amp;')
    .replace(lessThanRegex, '&lt;')
    .replace(moreThanRegex, '&gt;')
    .replace(doubleQuoteRegex, '&quot;');
};
/**
  * Executes rawURLDecode followd by htmlEntities methods on a string.
  *
  * @function sanitize
  * @type {Function}
  * @param {string} string - String to be replaced.
  * @returns {string} Replaced string.
  *
  * @example
  * sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`);
  * // => '&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;'
*/
export const sanitize = (string) => {
  return htmlEntities(rawURLDecode(string));
};
assign(acid, {
  htmlEntities,
  rawURLDecode,
  sanitize
});
