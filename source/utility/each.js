import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray, filterArray, mapArray } from '../array/each';
import { eachObject, filterObject, mapObject } from '../object/each';
import { hasValue, isArray, isFunction, isPlainObject } from '../internal/is';
/**
   * forEachWrap is a wrapped version of the forEach function
*/
const forEachWrap = (object, funct) => {
  return object.forEach(funct);
};
/**
   * generateCheckLoops parses the argument it is given and checks whether said argument is an array, or an object.
*/
const generateCheckLoops = (arrayLoop, objectLoop) => {
  return (object, funct) => {
    let returned;
    if (!hasValue(object)) {
      return;
    } else if (isArray(object)) {
      returned = arrayLoop;
    } else if (isPlainObject(object) || isFunction(object)) {
      returned = objectLoop;
    } else if (object.forEach) {
      returned = forEachWrap;
    } else {
      returned = objectLoop;
    }
    return returned(object, funct);
  };
};
/**
*map takes an array or an object. If an array is given, an array will be mapped. If an object is given, an *object will be mapped.
*
*
* @property {mapArray}  - Takes an array to be mapped.
* @property {mapObject}  -Takes an object to be mapped.
 * @example
*Taking an array
*const example = ['foo', 'bar'];
*const fooFunction = (x) => {
*  return x;
*});
* const newMap = map(example, fooFunction);
* //-> newMap = ['foo', 'bar']
* @returns
* Each value in the array after being run through a function. Can be any datatype.
* @example
*Taking an object
*const example = [{
*key: bar,
*value: foo,
*}];
*const fooFunction = (x) => {
*   var rObj = {};
*   Obj[obj.key] = obj.value;
*   return rObj;
*});
*var reformatted = map(example, fooFunction) ;
* //-> reformatted = {
*       bar:foo
*}
* @returns
* The value of each property in an object after being run through a user defined function
*/
export const map = generateCheckLoops(mapArray, mapObject);
/** each takes an array or an object. If an array is given, an array will have an operation performed on *each item in the array. If an object is given, an object will have an operation performed on each property *of the object.
* @property {eachArray}  - Takes two arguments: an array, and a function that will be performed on each item *in the array.
* @property {eachObject}  -Takes two arguments: an object and a function that will be performed on each key *and or value property of that object.
* @example
*Taking an array
*const example = ['foo', 'bar'];
*const fooFunction = () => {
*  console.log()
*};
*each(example, fooFunction);
*Taking an object
*const example = {
*foo: bar,
*bar: foo,
*};
*const fooFunction = () => {
*  console.log()
*};
*each(example, fooFunction);
*/
export const each = generateCheckLoops(eachArray, eachObject);
/**
*filter takes an array or an object. If it is given an array, it will run a function on each item on the *array. If it is given an object, it will run a function on each key and or value of an object
*@property {filterArray} - Takes two arguments: an array, and a function
*@property {filterObject} - Takes two arguments: an object, and a function
*@example
*Taking an array
*const example = ['foo', 'bar', 'foobar'];
*const fooFunction = () => {
*  return example.length <4;
*};
*const value = filter(example, fooFunction);
* //-> const value = ['foo', 'bar']
* @returns
* The value of each item in the given array after being run through a given function
* @example
*Taking an object
*const example = [{
*foo: bar,
*bar: foo,
*}];
*const fooFunction = (item) => {
*  if hasValue(item.id) {
*   return item.id
*}
*};
* const value = filter(example, fooFunction);
* //-> const value = [{
*foo: bar,
*bar: foo,
*}]
* @returns
* The value of each property within an object after being ran through a given function
*/
export const filter = generateCheckLoops(filterArray, filterObject);
assign(acid, {
  each,
  filter,
  map
});
