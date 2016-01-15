//Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
$.invoke = function (array,method, args) {
	return _each_array(array,(item) =>{
		return item[method].apply(item, args);
	});
};
