import $ from '../../../namespace/index';
import { assign } from './object';
const arrayNative = Array;
export const toArray = arrayNative.from;
assign($, {
  toArray,
});
