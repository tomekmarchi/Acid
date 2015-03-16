//save browser info plus add class to body
var _agentInfo=$.acid.agentInfo = function () {
		//useragent string
    var str = _window.navigator.userAgent.toLowerCase(),
    	//check through user agent
        list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android'],
        len = list.length,
        addcls = [];

	var agent = _agentinfo;

    agent.string = str.toLowerCase();

    for (var i = 0; i < len; i++) {
        var item = list[i];
        agent[item] = _has(str, item);
    }

    _each_object(agent,function(item,key){
        if (key == 'string') {
           return;
        }
        if (key == 'mobile') {
            if (!item) {
                addcls.push('desktop');
                return;
            }
        }
        if (item) {
            addcls.push(key);
        }
    });

    var cl=document.body.classList;

	_each_array(addcls,function(item){
		 cl.add(item);
	});

    return false;
};

_isDocumentReady(_agentInfo);