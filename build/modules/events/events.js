$.isEnter=function (event) { //checks if this an enter key
	var i = event.keyCode;
	if (i == 13) {
		return true;
	}
	return false;
}
