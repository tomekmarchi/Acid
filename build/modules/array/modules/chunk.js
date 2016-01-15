//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
var arrayChunk = function(array, size) {
    size = size || 1;
    var numChunks = Math.ceil(array.length / size),
		index = 0;
	return _each_array(new Array(numChunks),(item,i) =>{
		return chunkSlice(array, index, (index += size));
	});
};

$.chunk = arrayChunk;
