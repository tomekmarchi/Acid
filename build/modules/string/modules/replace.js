//replace all items in an array with a string
var replaceWithList = $.replaceWithList =  (string, array,toReplace) => {
	return stringReplaceCall(string, new regExp('\\b' + joinArray(array,'|') + '\\b', 'gi'), toReplace);
};
