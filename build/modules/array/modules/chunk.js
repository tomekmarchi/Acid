//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
array_extend.chunk = function (max) {
	var array = this,
		temp = [],
		count = 0,
		item;
	while(item=array.shift()){
		if (count === 0 || count === max) {
			var sub = [];
		}
		sub.push(item);
		count++;
		if (count === max) {
			temp.push(sub);
			var count = 0;
		}else if (count > array.length){
			temp.push(sub);
		}
	}
	return temp;
};