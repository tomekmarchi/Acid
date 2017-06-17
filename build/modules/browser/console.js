const acidConsole = (dataArg, themeName) => {
  const data = isString(dataArg) ? dataArg : stringify(dataArg);
  apply(consoleNative, [`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`]);
};
$.cnsl = acidConsole;
const generateTheme = (color, bg) => {
  return `color:${color};background:${bg};`;
};
const themes = {
  notify: generateTheme('#fff', '#651FFF'),
  warning: generateTheme('#000', '#FFEA00'),
  important: generateTheme('#fff', '#E91E63'),
  alert: generateTheme('#fff', '#f44336')
};
const addTheme = (themeName, color, bg) => {
  themes[themeName] = generateTheme(color, bg);
};
$.addConsoleTheme = addTheme;
