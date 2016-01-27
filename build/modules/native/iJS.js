function inlineJson(str) {
	try {
		return new Function(`"use strict";return${str};`)();
	} catch (e) {
		return false;
	}
}

//for inline JS object notion.
$.iJson = inlineJson;
