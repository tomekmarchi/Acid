//tokenize split by groups of characters that are not whitespace
$.tokenize = function (string) {
	return stringMatchCall(string,/\S+/g) || [];
};
//match by alphanumeric+underscore
$.words = function (string) {
	return stringMatchCall(string,/\w+/g) || [];
};
