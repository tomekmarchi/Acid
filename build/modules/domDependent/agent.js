//Get useragent info
var isAgent = $.isAgent = (name) => {
	return (!name) ? objectKeys(isAgent) : isAgent[name];
};

eachArray(splitCall(stringReplaceCall(stringReplaceCall(toLowerCaseCall(navigator.userAgent), /_/g, dotString), /[#_\,\;\(\)]/g, ''), / |\//), (item) => {
	isAgent[item] = True;
});
