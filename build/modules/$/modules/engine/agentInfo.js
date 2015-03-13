//save browser info plus add class to body
var _agentInfo=$.acid.agentInfo = function () {
		//useragent string
    var str = _window.navigator.userAgent.toLowerCase(),
    	//check through user agent
        list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android'],
        len = list.length,
        addcls = [];

    $.sys.agent.string = str.toLowerCase();

    for (var i = 0; i < len; i++) {
        var item = list[i];
        $.sys.agent[item] = _has(str, item);
    }

    var agent = $.sys.agent;
    for (var i = 0,keys=_object_keys(agent), len = keys.length; i < len; i++) {
		var key=keys[i];
        var item = agent[key];
        if (key == 'string') {
           continue;
        }
        if (key == 'mobile') {
            if (!item) {
                addcls.push('desktop');
                continue;
            }
        }
        if (item) {
            addcls.push(key);
        }
    }

    var len=addcls.length,
    	cl=_body.classList;

    for(var i=0; i < len; i++){
	    cl.add(addcls[i]);
    }

    return false;
};