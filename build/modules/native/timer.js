$.timerClear = function (number) {
	return clearTimeout(number);
};

$.intervalClear = function (number) {
	return clearInterval(number);
};

$.clearTimers = function(){
	//clear all timers
	var maxId = setTimeout(function() {}, 0);
	for (var i = 0; i < maxId; i++) {
	    clearTimeout(i);
	}
};

$.clearIntervals = function(){
	//clear all timers
	var maxId = setInterval(function() {}, 1000);
	for (var i = 0; i <= maxId; i++) {
	    clearInterval(i);
	}
};