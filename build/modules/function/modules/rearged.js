//Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
$.reArg = (funct, list) => {
    return function() {
        return apply(funct, eachArray(toArray(arguments), function(item, index) {
            pushArray(args,order[list[index]]);
        }));
    };
};

/*

var rearg=(function(a, b, c) {
  return [a, b, c];
},[1,2,0]);

rearg(1,2,3);
-> [2, 3, 1]


*/
