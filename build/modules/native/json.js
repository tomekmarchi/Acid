function jsonWithCatch(str) {
	try {
		return jsonParse(str);
	} catch (e) {
		return False;
	}
}

//convert from json string to json object cache it to use across lib
$.jsonParse = jsonWithCatch;
