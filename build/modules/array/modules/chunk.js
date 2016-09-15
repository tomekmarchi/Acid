//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
var arrayChunk = $.chunk = (array, size = 1, index = 0) => {
	return filterArray(new arrayNative(ceilMethod(getLength(array) / size)),(item,i) =>{
		return chunkSlice(array, index, (index += size));
	});
};
