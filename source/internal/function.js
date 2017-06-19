import $ from '../../../namespace/index';
import { assign } from './object';
export const apply = Reflect.apply;
assign($, {
  apply
});
