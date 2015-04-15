var enhanceChange=function(data,modelName,origin,propName){
	if(!_isArray(data)){
		var data=[data];
	}
	var compiled=_each_array(data,function(item){

		if(item.origin){
			item.origin.push(modelName);
			return item;
		}

		var change={
			name:item.name,
			propertyName:propName,
			object:item.object,
			oldValue:item.oldValue,
			type:item.type,
			invoked:[],
			softOrigin:[],
			origin:[modelName]
		};
		return change;
	});
	return compiled;
};