 const returnFlow = function (method) {
   return function (...mainArgs) {
     const funcs = flatten(toArray(mainArgs));
     return function wrapped(...wrapArgs) {
       const args = toArray(wrapArgs);
       const value = [];
       method(funcs, (item) => {
         value[0] = apply(item, wrapped, value[0] ? value : args);
       });
       return value[0];
     };
   };
 };
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
 acid.flow = returnFlow(eachArray);
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
 acid.flowRight = returnFlow(eachArrayRight);
