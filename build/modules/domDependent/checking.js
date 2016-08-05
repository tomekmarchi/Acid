//checks to see if object is a dom node returns True or False
var isDom = $.isDom = (obj) => {
	return (!obj) ? False : obj.nodeType != 9;
};
