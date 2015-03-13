//Get useragent info
$.isAgent=function(name){
	if(!name){
		return $.agent;
	}
	return $.agent[name];
};