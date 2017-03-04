/*
const array = [];
array.push(async function(...args){
  console.log(1,args);
});
array.push(async function(...args){
  console.log(2,args);
});
$.asyncEach(array,[3,4]);
*/
const asyncEach = $.asyncEach = async function (array, args) {
  const item = array.shift();
  if (item) {
    await item(args);
    await asyncEach(array, args);
  }
};
