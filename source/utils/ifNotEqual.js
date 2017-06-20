import acid from '../../../namespace/index';
acid.ifNotEqual = (rootObject, property, equalThis) => {
  if (property) {
    rootObject[property] = rootObject[property] || equalThis;
    return rootObject[property];
  }
  return rootObject;
};
