//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
var arrayChunk = function(array, size) {
    size = size || 1;
    var numChunks = ceilmethod(getLength(array) / size),
		index = 0;
	return filterArray(newArray(numChunks),(item,i) =>{
		return chunkSlice(array, index, (index += size));
	});
};

$.chunk = arrayChunk;
