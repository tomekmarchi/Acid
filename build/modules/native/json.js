function isJson(str) {
    try {
        return json.parse(str);
    } catch (e) {
        return false;
    }
}

//convert from json string to json object cache it to use across lib
var $json = $.json = isJson;