import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isString } from '../internal/is';
import { stringify } from '../utility/json';
const generateTheme = (color, bg) => {
  return `color:${color};background:${bg};`;
};
const themes = {
  alert: generateTheme('#fff', '#f44336'),
  important: generateTheme('#fff', '#E91E63'),
  notify: generateTheme('#fff', '#651FFF'),
  warning: generateTheme('#000', '#FFEA00'),
};
/**
  * Console.trace wrapper with theme support.
  *
  * @function cnsl
  * @type {Function}
  * @param {Object} value - The value to be logged.
  * @param {string} themeName - The theme to be used.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * cnsl('Lucy', 'notify');
  * // 'Lucy'
*/
const cnsl = (value, themeName) => {
  const data = isString(value) ? value : stringify(value);
  console.log(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
};
/**
  * Create color themes for cnsl method.
  *
  * @function cnslTheme
  * @type {Function}
  * @param {string} themeName - The name of the theme.
  * @param {string} color - The text color.
  * @param {string} background - The background color of the block.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * cnslTheme('BlackNWhite', '#fff', '#000');
*/
const cnslTheme = (themeName, color, background) => {
  themes[themeName] = generateTheme(color, background);
};
assign(acid, {
  cnsl,
  cnslTheme,
});
