/*
	Performs a deep comparison on listed property values
	props will default to first objects
*/
var isPropsEqual = $.isPropsEqual = (object,compareObject,props)=>{
	var result = False;
	eachWhile(props || objectKeys(object),(key)=>{
		result = isMatch(object[key],compareObject[key])
		return result;
	});
	return result;
};

/*
	Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
*/
$.matches = (object) =>{
	var objectsKeys = objectKeys(object);
	return (compareObject) =>{
		return isPropsEqual(object,compareObject,objectsKeys);
	};
};

/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/

var isPropsEqualDeep = $.isPropsEqualDeep = (object,compareObject) =>{
	var result = False;
	if(isEqualArray(objectKeys(object) , objectKeys(compareObject))){
		eachWhile(objectKeys(object),(key)=>{
			result = isMatch(object[key],compareObject[key])
			return result;
		});
	}
	return result;
};

/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/

var isMatch = $.isMatch = (object,compareObject)=>{
	var result = False;
	if(object===compareObject){
		result = True;
	}
	if(toStringCall(object) === toStringCall(compareObject)){
		if(isPlainObject(object)){
			result = isPropsEqualDeep(object,compareObject);
		}else if(isArray(object)){
			result = isEqualArrayDeep(object,compareObject);
		}
	}
	return result;
};
