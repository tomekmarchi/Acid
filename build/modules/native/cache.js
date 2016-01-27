var cacheMethod = (key, value) => {
    if (!key) {
        return cacheMethod;
    } else if (hasValue(value)) {
        return cacheMethod[key] = value;
    }
    return cacheMethod[key];
};

$.cache = cacheMethod;

//toggle a cache item with two values
$.cacheToggle = (key, a, b) => {
    if (cacheMethod[key] === a) {
        return cacheMethod[key] = b;
    }
    return cacheMethod[key] = a;
};
