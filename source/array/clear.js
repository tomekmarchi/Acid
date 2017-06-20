/**
* Removes all elements from the array.
*
* @function Array#clear
*
* @example
* var array = [1, 2, 3];
* array.clear();
* console.log(array);
* // -> []
*/
const clearArray = (array) => {
  array.length = 0;
  return array;
};
acid.clear = clearArray;
