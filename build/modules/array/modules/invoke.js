//Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
$.invoke = function (array,method, args) {
	var temp = [],
		item,
		len = array.length;
	for (var i = 0; i < len; i++) {
		item = array[i];
		temp.push(item[method].apply(item, args));
	}
	return temp;
};