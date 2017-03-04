/*
	Object checking methods
*/
eachArray(['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap', 'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'HTMLCollection', 'NodeList'], (item) => {
  $[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
const isHTMLCollection = $.isHTMLCollection,
  isNodeList = $.isNodeList;
