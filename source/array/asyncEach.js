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
export const asyncEach = async (array, args) => {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    const item = array[index];
    await item(args, index, arrayLength);
  }
};
assign(acid, {
  asyncEach,
});
