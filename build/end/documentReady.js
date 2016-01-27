//log out the ACID version
acidConsole(`Acidjs v${$.acid.version}`, 'notify');
isDocumentReady(agentInfo);
eachArray([
    [arrayNative, arrayPrototype, 'array'],
    [objectNative, objectPrototype, 'object'],
    [stringNative, stringPrototype, 'string']
], (proto) => {
    var name = proto[2],
        extendToGlobal = (key, name, funct) => {
            $[`${name}${ucFirst(key)}`] = funct;
        };
    $[name] = proto[0];
    eachProperty(proto[1], (item, key) => {
        if (isFunction(item)) {
            extendToGlobal(key, name, function(that) {
                var args = toArray(arguments);
                shiftArray(args);
                return apply(item, that, args);
            });
        }
    });
});
