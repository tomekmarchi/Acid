//Get useragent info
$.isAgent=function(name){
	if(!name){
		return _agentinfo;
	}
	return _agentinfo[name];
};