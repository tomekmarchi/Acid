import acid from '../namespace/index';
import { assign } from './object';
const arrayNative = Array;
export const toArray = arrayNative.from;
export const isArray = arrayNative.isArray;
assign(acid, {
  toArray,
  isArray
});
