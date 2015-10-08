//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
$.chunk = function (array,chunk) {
	size = size || 1;

    var numChunks = Math.ceil(array.length / size);
    var result = new Array(numChunks);

    for (var i = 0, index = 0; i < numChunks; i++) {
      result[i] = chunkSlice(array, index, (index += size));
    }

    return result;
};