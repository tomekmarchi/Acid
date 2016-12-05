/*
	Create a new function from a string and bind it to itself.
		Return
*/
var newFunction = (string, optional) => {
    try {
        var funct = new functionNative('"use strict";'+string).bind(optional || funct);
        return funct;
    } catch (e) {
        return False;
    }
};
$.newFunction = (string,optional) => {
    return newFunction(string + 'return this;', optional || {});
};
//for inline JS object notion.
var inlineJson = $.iJson = (string) => {
    return newFunction('return ' + string)();
};
