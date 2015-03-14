var _plugin = $.plugin =(function(){

	var plugin=function(plugins,callback){
		var importLibs=[];
		_each_object(plugins,function(item,key){
			importLibs.push(item.url);
		});
		_import(importLibs,function(){
			_each_object(plugins,function(item,key){
				$[item.name|| key]=window[key];
			});
			if(callback){
				callback();
			}
		});
	};

	return plugin;

})();