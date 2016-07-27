$.zipObject = function(keys, values, object) {
    return arraySortToObject((item, index,object) => {
        object[item] = values[index];
    }, keys, object);
};
$.unZipObject = function(object) {
    var keys = [],
        values = [];
    eachObject(object, (item, key) => {
        pushArray(keys, key);
        pushArray(values, item);
    });
    return [keys, values];
};
