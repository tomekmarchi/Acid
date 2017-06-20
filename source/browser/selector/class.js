const clsSelector = bindTo(documentNode.getElementsByClassName, documentNode);
const tagSelector = bindTo(documentNode.getElementsByTagName, documentNode);
acid.getClass = clsSelector;
acid.getTag = tagSelector;
