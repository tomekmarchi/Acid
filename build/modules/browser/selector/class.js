const clsSelector = bindTo(documentNode.getElementsByClassName, documentNode);
const tagSelector = bindTo(documentNode.getElementsByTagName, documentNode);
$.getClass = clsSelector;
$.getTag = tagSelector;
