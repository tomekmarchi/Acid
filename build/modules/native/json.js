//convert from json string to json object cache it to use across lib
const jsonWithCatch = (str) => {
	try {
		return jsonParse(str);
	} catch (e) {
		return false;
	}
};
$.jsonParse = jsonWithCatch;
