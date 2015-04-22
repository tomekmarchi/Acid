//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
array_extend.chunk = function (chunk) {
	var i = 0;
	var count=0;
	var temparray = [];
	var arr=this;
	var len=arr.length;
	for (; i < len; count++) {
	  temparray[count]=arr.slice(i, i += chunk);
	}
	return temparray;
};