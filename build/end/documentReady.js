//log out the ACID version
isDocumentReady(agentInfo);
/*
	Object checking methods
*/
eachArray(['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap', 'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array'], function(item) {
    $[`is${stringReplaceCall(item, 'Array', '')}`] = isSameObjectGenerator(objectStringGenerate(item));
});
/*
	Extend native objects used for compression of future app files and modules
*/
eachArray([
    [arrayNative, arrayPrototype, 'array'],
    [objectNative, objectPrototype, 'object'],
    [stringNative, stringPrototype, 'string']
], (proto) => {
    var name = proto[2];
    $[name] = proto[0];
    mapProperty(proto[1], (item, key) => {
        if (isFunction(item)) {
			$[`${name}${ucFirst(key)}`] = generatePrototype(item);
        }
    });
});
eventAdd(window,'resize',saveDimensions,True);
