//tokenize split by groups of characters that are not whitespace
string_extend.tokenize = function () {
	return this.match(/\S+/g) || [];
};
//match by alphanumeric+underscore
string_extend.words = function () {
	return this.match(/\w+/g);
};