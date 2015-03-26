/*

	Native objects

*/
//String Object
var _array = Array,
	//Object Object
	_object = Object,
	//Function Object
	_function = Function,
	//String Object
	_string = String,
	//JSON Object
	json = JSON,
	//Math Object
	_math = Math,
	//boolean object
	_boolean = Boolean,
	//undefined cache
	_undefined=undefined,
	//weakmap
	weak_map = _global.WeakMap,
	new_weak_map = function(){
		return new 	weak_map();
	},
	//map
	_map = Map,
	//number
	number_object = Number,
	//worker object
	_worker = _global.Worker,
	//web socket
	_socket = _global.WebSocket,
	_RAF=_global.requestAnimationFrame,
	//storage
	//local
	_localstorage = localStorage,
	//session
	_sessionStorage = sessionStorage,
	//console.log wrapper
	_console = function (obj) {
		console.log(obj);
	};

/*

	Prototypes

*/
//cache in string for compression
var $prototype = 'prototype',
	//prototypes
	object_prototype = _object[$prototype],
	//array prototype
	array_prototype = _array[$prototype],
	//string
	string_prototype = _string[$prototype],
	//websocket
	websocket_prototype = WebSocket[$prototype],
	//webworker
	worker_prototype = Worker[$prototype];

/*
	Array.prototype Functions cached
*/

//array push
var	_array_push= array_prototype.push,
	_array_unobserve = _array.unobserve,
	_array_observe = _array.observe;

/*

	Object. Functions cached

*/
//object keys cached
var	_object_keys = _object.keys,
	_getNotifier=_object.getNotifier,
	//object assign cached
	_object_assign = _object.assign,
	//getOwnPropertyDescriptor
	_object_getOwnPropertyDescriptor = _object.getOwnPropertyDescriptor,
	_observe=_object.observe,
	_deliverChangeRecords=_object.deliverChangeRecords,
	_defineProperty=_object.defineProperty,
	_unobserve=_object.unobserve;
/*
	Function methods cache
*/
var _bind=Function.bind,
	_bind_call=function(object,data){
		return _bind.call(object,data);
	};