//convert object to string
var $tostring = object_prototype.toString,
    //make collection into an array
    arrayFrom = _array.from,
    _toArray,
    domListToArray = function(collection) {
        var list = _toArray(collection),
            temp = [],
            item,
            name,
            length = list.length;
        for (var i = 0; i < length; i++) {
            item = list[i];
            name = item.constructor.name;
            if (name === "HTMLCollection" || name === "NodeList") {
                pushApply(temp, toArrayDeep(item));
            } else {
                temp.push(item);
            }
        }
        return temp;
    };
if (arrayFrom) {
    _toArray = function(item) {
        return arrayFrom.call(_array, item);
    };
} else {
    _toArray = function(items) {
        var arr = [];
        for (var i = -1, l = items.length; ++i !== l; arr[i] = items[i]);
        return arr;
    };
}
