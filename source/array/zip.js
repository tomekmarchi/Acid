import acid from '../namespace/index';
import { assign } from '../internal/object';
// Merges together the values of each of the arrays with the values at the corresponding position.
export const zip = (...args) => {
  return args[0].map((item, index) => {
    return args.map((array) => {
      return array[index];
    });
  });
};
// unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
export const unZip = (array) => {
  return array[0].map((item, index) => {
    return array.map((arraySet) => {
      return arraySet[index];
    });
  });
};
assign(acid, {
  zip,
  unZip
});
