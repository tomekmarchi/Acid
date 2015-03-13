var _cache = $.cache =(function(){
	//add an array of cache items. Keys are "this" array and values are corresponding arguments
	var array_cache=function (cache_names,a) {
		var len = cache_names.length,
			temp=[];
		if (a) {
			for (var i = 0; i < len; i++) {
				temp[i]=_cache(cache_names[i],a[i]);
			}
		}else{
			for (var i = 0; i < len; i++) {
				temp[i]=_cache(cache_names[i]);
			}
		}
		return temp;
	};

	//cache
	var cache_function=function (key,value) {
		if(!key){
			return _object_keys(_cache);
		}
		if(_isArray(key)){
			return array_cache(key,value);
		}
		if (hasValue(value)) {
			return _cache[key] = value;
		}
		return _cache[key];
	};
	//toggle a cache item with two values
	$.cacheToggle=function (key, a, b) {
		var v = _cache[key];
		if (v == a) {
			return _cache[key] = b;
		}
		return _cache[key] = a;
	};

	return cache_function;
})();