/*
STRING Prototype object
*/
//initialize
var rawURLDecode_regex=/%(?![\da-f]{2})/gi,
	and_regex=/&/g,
	less_than_regex=/</g,
	more_than_regex=/>/g,
	double_quote_regex=/"/g,
	slash_regex=/\//g;

$.string=String;
