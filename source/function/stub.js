import acid from '../namespace/index';
import { assign } from '../internal/object';
export const stubObject = () => {
  return {};
};
export const stubArray = () => {
  return [];
};
export const stubString = () => {
  return '';
};
export const stubFalse = () => {
  return false;
};
export const stubTrue = () => {
  return true;
};
export const noop = () => {
  return undefined;
};
assign(acid, {
  noop,
  stubArray,
  stubFalse,
  stubObject,
  stubString,
  stubTrue,
});
