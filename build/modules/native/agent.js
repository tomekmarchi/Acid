//save browser info plus add class to body
var _agentInfo = $.acid.agentInfo = function () {

    var str = _agentInfo.string = _window.navigator.userAgent.toLowerCase(),
		cl=document.body.classList,
        list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android', 'edge/'],
        addcls = [],
		agent = _agentinfo;

	_each_array(list,(item) =>{
		_agentInfo[item] = _has(str, item);
	});

    _each_object(_agentInfo,function(item,key){
        if (key === 'string') {
           return;
        } else if (key === 'mobile') {
            if (!item) {
                addcls.push('desktop');
                return;
            }
        }
        if (item) {
            addcls.push(key);
        }
    });

	_each_array(addcls,function(item){
		 cl.add(item);
	});
};


//Get useragent info
$.isAgent=function(name){
	if(!name){
		return _agentinfo;
	}
	return _agentinfo[name];
};
