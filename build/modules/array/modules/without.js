//Returns a copy of the array with all instances of the values removed.
array_extend.without = function (args) {
	var array= this,
		temp=[],
		len = array.length;
		for(var i=0; i < len; i++){
			var item=array[i],
			indexof=args.indexOf(item);
			if (indexof == -1) {
				temp.push(item);
			}
		}
	return temp;
};