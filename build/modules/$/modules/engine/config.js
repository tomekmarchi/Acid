(function(){
	var userConfig = $.cache.config = {};
	var config = function() {
		var config=userConfig;

		//save config
		$.cache.config=config;

		//extend config settings to acid
		var extend=config.extend;
		for (var i = 0,keys=_object_keys(extend), len = keys.length; i < len; i++) {
			var key=keys[i];
			var item=extend[key];
            if (!$ext[key]) {
                $ext[key] = {};
            }
            $ext[key] = $merge($ext[key],item);
        }
	};

	$.acid.config = function (config) {
		if(config){
			userConfig=config;
		}
		_isDocumentReady(config);
        return false;
    };
})();