//localstorage
$.local = _localstorage;
//localstorage clear
$.clearLocal = function () {
	return _localstorage.clear();
};

//session storage
$.session = _sessionStorage;
//session storage clear
$.clearSession = function () {
	return _sessionStorage.clear();
};

//sys temp mem
$.mem = {};