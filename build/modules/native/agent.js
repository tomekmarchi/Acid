//save browser info plus add class to body
var agentInfo = $.acid.agentInfo = function () {

    var str = agentInfo.string = toLowerCaseCall(global.navigator.userAgent),
		cl=nodeClassList(documentNode.body),
        list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android', 'edge/', 'webkit' , 'blink'],
        addcls,
		agent = agentInfo;

	eachArray(list,(item,key) =>{
		agentInfo[item] = has(str, item);
	});

    addcls = eachObject(agentInfo,function(item,key){
        if (key === 'string') {
           return;
        } else if (key === 'mobile') {
            if (!item) {
                return 'desktop';
            }
        }
        if (item) {
            return key;
        }
    });

	eachArray(addcls,function(item){
		 cl.add(item);
	});
};


//Get useragent info
$.isAgent=function(name){
	if(!name){
		return agentInfo;
	}
	return agentInfo[name];
};
