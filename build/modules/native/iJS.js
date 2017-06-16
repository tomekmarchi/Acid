/*
	Create a new function from a string and bind it to itself.
		Return
*/
const newFunction = (string, optional) => {
  try {
    const funct = eval(`(function(){"use strict";${string}})`).bind(optional || funct);
    return funct;
  } catch (e) {
    return false;
  }
};
$.newFunction = function (string, optional = {}) {
  return newFunction(`${string} return this;`, optional);
};
// for inline JS object notion.
const inlineJson = function (string) {
  return eval(`(${string})`);
};
$.iJson = inlineJson;
