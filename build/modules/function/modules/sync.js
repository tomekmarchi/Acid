//Launch functions in sync
$.inSync = function(fns, params) {
	params = ensureArray(params);
	return mapArray(ensureArray(fns), (item) => {
		apply(item, params);
	});
};
