$.isPropsEqual = function(object,compareTo,props){
	var result;
	eachWhile(props,(item)=>{
		result = object[item] === compareTo[item];
		return result;
	});
	return result;
};
