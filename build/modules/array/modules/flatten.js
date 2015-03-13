//Flattens a nested array. Pass level to flatten up to a depth;
array_extend.flatten = function (level) {
	return flatten(this, level);
};