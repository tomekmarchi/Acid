//console.log
var _log=console.log,
	_consoleObject=console,
	acidConsole=function(array,theme){
		var preped=[array];
		if(theme){
			preped[0]='%c'+preped[0];
			preped.push(logThemes[theme]+"font-size:13px;padding:2px 5px;border-radius:3px;");
		}
		_log.apply(_consoleObject,preped);
	},
	generateLogTheme=function(color,bg){
		return 'color:'+color+';background:'+bg+';';
	},
	logThemes={
		notify:generateLogTheme('#01c690','#0e2a36'),
		warning:generateLogTheme('#ebb227','#262626'),
		important:generateLogTheme('#ffe4ea','#dc3153')
	},
	addTheme = function(name,color,bg){
		logThemes[name]=generateLogTheme(color,bg);
	};
$.console = acidConsole;
$.addConsoleTheme = addTheme;
