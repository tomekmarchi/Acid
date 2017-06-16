// Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
const drop = (array, amount, length) => spliceArray(array, amount, length || getLength(array));
$.drop = drop;
// Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
const dropRight = (array, amount) => drop(array, 0, getLength(array) - amount);
$.dropRight = dropRight;
