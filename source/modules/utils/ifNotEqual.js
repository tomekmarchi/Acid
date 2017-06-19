import $ from '../../../namespace/index';
$.ifNotEqual = (rootObject, property, equalThis) => {
  if (property) {
    rootObject[property] = rootObject[property] || equalThis;
    return rootObject[property];
  }
  return rootObject;
};
