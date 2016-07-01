//save browser info plus add class to body
var agentInfo = $.agent = function () {

    var str = agentInfo.string = toLowerCaseCall(global.navigator.userAgent),
        list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android', 'edge/', 'webkit' , 'blink'],
		agent = agentInfo;

	eachArray(list,(item,key) =>{
		agentInfo[item] = has(str, item);
	});

    eachObject(agentInfo,function(item,key){
        if (key === 'string') {
           return;
        }
        if (item) {
			nodeClassList(documentNode.body,key);
            return True;
        }
    });
};

//Get useragent info
$.isAgent=function(name){
	if(!name){
		return agentInfo;
	}
	return agentInfo[name];
};
