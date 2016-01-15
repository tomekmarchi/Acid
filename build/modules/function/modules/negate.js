//Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
$.negate = (func) => {
    return () => {
        if (func.apply(func, _toArray(arguments))) {
            return false;
        }
        return true;
    };
};
