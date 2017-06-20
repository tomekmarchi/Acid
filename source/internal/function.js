import acid from '../namespace/index';
import { assign } from './object';
export const apply = Reflect.apply;
assign(acid, {
  apply
});
