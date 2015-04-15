var addHelpers = function(object,componentHelpers,privateMode){
		if(!componentHelpers){
			return false;
		}
		if(_isFunction(componentHelpers)){
			var componentHelpers=componentHelpers.call(object);
		}
		_each_object(componentHelpers,function(item,key){
			$[key](item,object,true,privateMode);
		});
};