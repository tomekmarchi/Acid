$.zipObject = function (keys,values) {
	var object={};
	eachArray(keys,(item,index)=>{
		object[item]=values[index];
	});
	return object;
};
$.unZipObject = function (object) {
	var keys=[],
		values=[];
	eachObject(object,(item,key)=>{
		pushArray(keys,key);
		pushArray(values,item);
	});
	return [keys,values];
};
