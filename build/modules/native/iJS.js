function inlineJson(str) {
	try {
		return new Function(`"use strict";return${str};`)();
	} catch (e) {
		return False;
	}
}

//for inline JS object notion.
$.iJson = inlineJson;
