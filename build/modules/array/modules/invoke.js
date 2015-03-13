//Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
array_extend.invoke = function (method, args) {
	var array = this,
		temp = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i];
		temp.push(item[method].apply(item, args));
	}
	return temp;
};