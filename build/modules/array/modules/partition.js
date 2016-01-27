//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
$.partition = (array, funct) => {
    return [array, eachArray(array, (item, index) => {
        if (funct(item)) {
            return item;
        } else {
            spliceArray(array, index, 1);
        }
    })];
};
