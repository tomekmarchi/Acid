var cacheMethod = $.cache = (key, value) => {
	return (!key) ? cacheMethod : (hasValue(value)) ? cacheMethod[key] = value : cacheMethod[key];
};

//toggle a cache item with two values
$.cacheToggle = (key, a, b) => {
	((cacheMethod[key] === a)? cacheMethod[key] = b : cacheMethod[key] = a);
};
