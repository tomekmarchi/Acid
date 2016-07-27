/*
	Replace mode will overwrite the original plainObject or Array
*/
var bindAll = $.bindAll = (bindThese, withThis, replaceMode) => {
	return replaceMode ? (each(bindThese, (item, key) => {
		if (isFunction(item)) {
			bindThese[key] = bindTo(item, withThis);
		}
	}), bindThese) : map(bindThese, (item) => {
		return isFunction(item) ? bindTo(item, withThis) : item;
	});
};
