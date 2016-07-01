//add paramaters to a URL
var addParam =  (url,newItem) => {
	if (hasLength(url)) {
		if (has(url,questionMarkString)) {
			if (arrayLastItem(url) === questionMarkString) {
				url = url + newItem;
			}else{
				url = url + andString + newItem;
			}
		}
	}else{
		url = questionMarkString + newItem;
	}
	return url;
};

$.addParam = addParam;
