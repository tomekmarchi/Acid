//get characters in a range in a string
string_extend.range = function (start, end, insert) {
	var text = this,
		start_text = text.slice(0, start),
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
string_extend.last = function () {
	var i = this;
	return i[i.length - 1];
};
//start index from right of string
string_extend.right = function (a) {
	var i = this;
	return i[i.length - 1 - a];
};
//start index from right of string pollyfill
string_extend.endsWith = function (searchString, position) {
	var subjectString = this;
	if (position === undefined || position > subjectString.length) {
		position = subjectString.length;
	}
	position -= searchString.length;
	var lastIndex = subjectString.indexOf(searchString, position);
	return lastIndex !== -1 && lastIndex === position;
};