//convert from json string to json object cache it to use across lib
var jsonWithCatch = $.jsonParse = (str) => {
	try {
		return jsonParse(str);
	} catch (e) {
		return False;
	}
};
