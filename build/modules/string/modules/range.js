//get characters in a range in a string
$.rangeString = function (text,start, end, insert) {
	var start_text = text.slice(0, start),
		end_text = text.slice(end, text.length),
		i = start_text + insert + end_text,
		start_text = null,
		text = null,
		insert = null,
		insert = null,
		end_text = null;
	return i;
};
//start index from last item
$.lastString = function (text) {
	return text[text.length - 1];
};
//start index from right of string
$.rightString = function (text,a) {
	return text[text.length - 1 - a];
};
//start index from right of string pollyfill
$.endsWithString = function (subjectString,searchString, position) {
	if (position === undefined || position > subjectString.length) {
		position = subjectString.length;
	}
	position -= searchString.length;
	var lastIndex = subjectString.indexOf(searchString, position);
	return lastIndex !== -1 && lastIndex === position;
};