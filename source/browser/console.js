import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isString } from '../internal/is';
import { stringify } from '../native/json';
const consoleNative = console.log.bind(console);
const generateTheme = (color, bg) => {
  return `color:${color};background:${bg};`;
};
const themes = {
  notify: generateTheme('#fff', '#651FFF'),
  warning: generateTheme('#000', '#FFEA00'),
  important: generateTheme('#fff', '#E91E63'),
  alert: generateTheme('#fff', '#f44336')
};
const cnsl = (dataArg, themeName) => {
  const data = isString(dataArg) ? dataArg : stringify(dataArg);
  consoleNative(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
};
const addConsoleTheme = (themeName, color, bg) => {
  themes[themeName] = generateTheme(color, bg);
};
assign(acid, {
  cnsl,
  addConsoleTheme
});
