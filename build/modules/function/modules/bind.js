/*
	Replace mode will overwrite the original plainObject or Array
*/
var bindAll = $.bindAll = (bindThese,withThis,replaceMode) =>{
	if(replaceMode){
		eachArray(bindThese,(item,key) =>{
			if(isFunction(item)){
				item[key]=bindTo(item,withThis);
			}
		});
	}else{
		return map(bindThese,(item) =>{
			if(isFunction(item)){
				item = bindTo(item,withThis);
			}
			return item;
		});
	}
};
