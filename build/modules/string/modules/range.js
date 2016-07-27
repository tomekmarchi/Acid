//get characters in a range in a string
var insertInRange = $.insertInRange = (text, start, end, insert) => {
        return stringSliceCall(text,0, start) + insert + stringSliceCall(text,end, getLength(text));
    },
    //start index from right of string
    rightString = $.rightString = function(text, a) {
        return text[getLength(text) - 1 - a];
    },
    chunkString = $.chunkString = (string, size) => {
        return stringMatchCall(string,new regExp('(.|[\r\n]){1,' + size + '}', 'g'));
    };
