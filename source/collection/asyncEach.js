import acid from '../namespace/index';
import { assign } from '../internal/object';
/*
const array = [async function(...args){
  console.log(1,args);
}, async function(...args){
  console.log(2,args);
}];
acid.asyncEach(array,[3,4]);
*/
export const asyncEach = async (array, args, indexArg = 0, arrayLength = array.length) => {
  let index = indexArg;
  if (index < length) {
    const item = array[index];
    await item(args, index);
    index++;
    await asyncEach(array, args, index, arrayLength);
  }
};
export const eachAsync = async (array, funct, indexArg = 0, arrayLength = array.length) => {
  let index = indexArg;
  if (index < length) {
    const item = array[index];
    await funct(item, index);
    index++;
    await eachAsync(array, funct, index, arrayLength);
  }
};
assign(acid, {
  asyncEach,
  eachAsync,
});
