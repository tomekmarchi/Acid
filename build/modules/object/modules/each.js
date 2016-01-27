//loop through an object
var eachObject = $.eachObject = (object, fn) => {
    //an object with matching keys with results will be returned
    var results = {},
        key;
    for (var i = 0, keys = objectKeys(object), len = getLength(keys); i < len; i++) {
        //object currect key
        key = keys[i];
        //call function get result
        results[key] = fn(object[key], key, len, object, results);
    }
    return results;
},
forEach = $.forEach = (array,funct) =>{
	var results=[],result;
	array.forEach((item, key, array) =>{
		result=funct(item, key, array);
		if(hasValue(result)){
			pushArray(results,result);
		}
	});
	return results;
},
eachProperty = $.eachProperty = (array,funct) =>{
	var object = {};
	eachArray(getOwnPropertyNames(array),(item,key,length)=>{
		object[item]=funct(array[item],item,length,array,object);
	});
	return object;
};
