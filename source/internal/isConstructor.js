import { hasValue } from './checking';
export const isConstructor = (nativeObject) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.constructor === nativeObject : false;
  };
};
