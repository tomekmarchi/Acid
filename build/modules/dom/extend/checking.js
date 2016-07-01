//checks to see if object is a dom node returns True or False
var isDom = function(obj) {
        if (!hasValue(obj)) {
            return False;
        }
        var nodetype = obj.nodeType;
        return typeof nodetype == "number" && nodetype != 9;
    },
    //checks to see if object is a HTMLCollection returns True or False
    isHTMLCollection = function(obj) {
        return (hasValue(obj)) ? obj.constructor.name == "HTMLCollection" : False;
    },
    //checks to see if object is a NodeList returns True or False
    isNodeList = function(obj) {
        return (hasValue(obj)) ? obj.constructor.name == "NodeList" : False;
    };

$.isDom = isDom;
$.isHTMLCollection = isHTMLCollection;
$.isNodeList = isNodeList;
