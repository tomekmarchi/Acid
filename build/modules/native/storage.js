var localstorage = $.local = localStorage,
    sessionstorage = $.session = sessionStorage;

//localstorage clear
$.clearLocal =  () => {
	return localstorage.clear();
};
//session storage clear
$.clearSession =  () => {
	return sessionstorage.clear();
};
