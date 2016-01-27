//checks to see if object is a dom node returns true or false
var isDom = function(obj) {
        if (!hasValue(obj)) {
            return false;
        }
        var nodetype = obj.nodeType;
        return typeof nodetype == "number" && nodetype != 9;
    },
    //checks to see if object is a HTMLCollection returns true or false
    isHTMLCollection = function(obj) {
        return (hasValue(obj)) ? obj.constructor.name == "HTMLCollection" : false;
    },
    //checks to see if object is a NodeList returns true or false
    isNodeList = function(obj) {
        return (hasValue(obj)) ? obj.constructor.name == "NodeList" : false;
    };

$.isDom = isDom;
$.isHTMLCollection = isHTMLCollection;
$.isNodeList = isNodeList;
