//Get useragent info
var isAgent = $.isAgent = (name) => {
	return (!name) ? agentInfo : agentInfo[name];
};

var agentInfo = () => {
	agentInfo.string = toLowerCaseCall(navigator.userAgent);
	eachArray(splitCall(stringReplaceCall(stringReplaceCall(agentInfo.string, /_/g, '.'), /[#_\,\;\(\)]/g, ''), / |\//), (item) => {
		isAgent[item] = True;
	});
};
