var _cache = (key, value) => {
    if (!key) {
        return _cache;
    } else if (hasValue(value)) {
        return _cache[key] = value;
    }
    return _cache[key];
};

$.cache = _cache;

//toggle a cache item with two values
$.cacheToggle = (key, a, b) => {
    if (_cache[key] === a) {
        return _cache[key] = b;
    }
    return _cache[key] = a;
};
