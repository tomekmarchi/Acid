// Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
const arrayChunk = (array, size = 1) => {
  const chunked = [];
  let index = 0;
  array.forEach((item, key) => {
    if (!(key % size)) {
      chunked.push([]);
      if (key) {
        index++;
      }
    }
    chunked[index].push(item);
  });
  return chunked;
};

$.chunk = arrayChunk;
