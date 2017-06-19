/*
	Perform alphabetical sort on collection on provided key name
*/
const sortAlpha = (collection, key) => {
  let currentKey;
  let nextKey;
  collection.sort((current, next) => {
    currentKey = current[key];
    nextKey = next[key];
    return (currentKey < nextKey) ? -1 : (currentKey > nextKey) ? 1 : 0;
  });
  return collection;
};
$.sortAlpha = sortAlpha;
