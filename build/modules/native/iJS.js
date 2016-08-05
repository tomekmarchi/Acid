//for inline JS object notion.
var inlineJson = $.iJson = (str) => {
	try {
		return new functionNative(`"use strict";return ${str};`)();
	} catch (e) {
		return False;
	}
};
