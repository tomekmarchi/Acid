/*
	Native objects
*/
const arrayNative = Array;
const objectNative = Object;
const functionNative = Function;
const stringNative = String;
const json = JSON;
const mathNative = Math;
const booleanNative = Boolean;
const weakMap = WeakMap;
const mapNative = Map;
const numberNative = Number;
const regExp = RegExp;
const parseIntNative = parseInt;
const consoleNative = console.log.bind(console);
/*

	Prototypes

*/
const prototypeString = 'prototype';
const objectPrototype = objectNative[prototypeString];
const arrayPrototype = arrayNative[prototypeString];
const stringPrototype = stringNative[prototypeString];
const functionPrototype = functionNative[prototypeString];
const regExpPrototype = regExp[prototypeString];
/*
	Array.prototype Functions
*/
const toArray = arrayNative.from.bind(arrayNative);
$.toArray = toArray;
/*
  Object Functions
*/
const objectKeys = objectNative.keys;
$.keys = objectKeys;
const objectIs = objectNative.is;
$.is = objectIs;
const objectAssign = objectNative.assign;
$.assign = objectAssign;
const getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor;
$.getPropDescrip = getOwnPropertyDescriptor;
const defineProperty = objectNative.defineProperty;
$.defineProperty = defineProperty;
const getOwnPropertyNames = objectNative.getOwnPropertyNames;
$.getOwnPropertyNames = getOwnPropertyNames;
/*
	JSON
*/
const stringify = json.stringify;
const jsonParse = json.parse;
