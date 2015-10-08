//tokenize split by groups of characters that are not whitespace
$.tokenize = function (string) {
	return string.match(/\S+/g) || [];
};
//match by alphanumeric+underscore
$.words = function (string) {
	return string.match(/\w+/g);
};