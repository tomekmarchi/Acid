/*
	Perform check on object to ensure all keys listed are present on the object.
*/
var hasKeys = $.hasKeys = (object, keys) => {
	var flag = False;
	eachWhile(keys,(key)=>{
		flag = hasValue(object[key]);
		return flag
	});
	return flag;
};
/*
	Perform check on object to ensure any of the keys listed are present on the object.
*/
var hasAnyKeys = $.hasAnyKeys = (object, keys) => {
	var flag = False;
	eachWhileFalse(keys,(key)=>{
		flag = hasValue(object[key]);
		return flag
	});
	return flag;
};
