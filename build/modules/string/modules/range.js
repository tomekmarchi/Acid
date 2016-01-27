//get characters in a range in a string
var rangeString = $.rangeString = (text, start, end, insert) => {
        return stringSliceCall(text,0, start) + insert + stringSliceCall(text,end, getLength(text));
    },
    //start index from right of string
    rightString = $.rightString = function(text, a) {
        return text[getLength(text) - 1 - a];
    },
    //start index from right of string pollyfill
    endsWithString = $.endsWithString = (subjectString, searchString, position) => {
        if (position === undefined || position > getLength(subjectString)) {
            position = getLength(subjectString);
        }
        position -= getLength(searchString);
        var lastIndex = indexOfCall(subjectString,searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    },
    chunkString = $.chunkString = (string, size) => {
        return stringMatchCall(string,new RegExp('(.|[\r\n]){1,' + size + '}', 'g'));
    },
    firstString = $.firstString = (string) => {
		return string[0];
    };
