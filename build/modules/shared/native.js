/*

	Native objects

*/
var arrayNative = Array,
    objectNative = Object,
    functionNative = Function,
    stringNative = String,
    json = JSON,
    mathNative = Math,
    booleanNative = Boolean,
    undefinedNative = undefined,
    weakMap = global.WeakMap,
	mapNative = global.Map,
    numberNative = Number,
	consoleNative=console,
    consoleNative = consoleNative.log.bind(consoleNative),
    /*

    	Prototypes

    */
    prototypeString = 'prototype',
    objectPrototype = objectNative[prototypeString],
    arrayPrototype = arrayNative[prototypeString],
    stringPrototype = stringNative[prototypeString],
	functionPrototype = functionNative[prototypeString],

    /*
    	Array.prototype Functions cached
    */
	toArray = $.toArray = arrayNative.from,
    arrayPushMethod = arrayPrototype.push,
    objectKeys = objectNative.keys,
    objectIs = objectNative.is,
    objectAssign = objectNative.assign,
    getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor,
    defineProperty = objectNative.defineProperty,
	getOwnPropertyNames = objectNative.getOwnPropertyNames,
    /*
    	JSON
    */
    stringify = json.stringify,
	jsonParse = json.parse,
    /*
    	System Hardware Info
    */
    systemCores = navigator.hardwareConcurrency;
