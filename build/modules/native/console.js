//console.log
var acidConsole = $.cnsl = (data, theme) => {
		data = isString(data) ? data : stringify(data);
		apply(consoleNative, ['%c' + data, `${logTheme[theme]}font-size:13px;padding:2px 5px;border-radius:2px;`]);
	},
	generateLogTheme = (color, bg) => {
		return `color:${color};background:${bg};`;
	},
	logTheme = {
		notify: generateLogTheme('#fff', '#651FFF'),
		warning: generateLogTheme('#000', '#FFEA00'),
		important: generateLogTheme('#fff', '#E91E63'),
		alert: generateLogTheme('#fff', '#f44336')
	},
	addTheme = $.addConsoleTheme = (name, color, bg) => {
		logTheme[name] = generateLogTheme(color, bg);
	};
