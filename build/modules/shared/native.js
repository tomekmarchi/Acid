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
	regExp = RegExp,
	parseIntNative = parseInt,
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
	regExpPrototype = regExp[prototypeString],
    /*
    	Array.prototype Functions cached
    */
	toArray = $.toArray = arrayNative.from.bind(arrayNative),
    arrayPushMethod = arrayPrototype.push,
    objectKeys = objectNative.keys,
    objectIs = objectNative.is,
    objectAssign = $.assign = objectNative.assign,
    getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor,
    defineProperty = objectNative.defineProperty,
	getOwnPropertyNames = objectNative.getOwnPropertyNames,
    /*
    	JSON
    */
	False=false,
	True=true,
    stringify = json.stringify,
	jsonParse = json.parse,
    /*
    	System Hardware Info
    */
    systemCores = navigator.hardwareConcurrency;
