//checks to see if object is a dom node returns True or False
var isDom = $.isDom = function(obj) {
        if (!obj) {
            return False;
        }
        var nodetype = obj.nodeType;
        return nodetype && nodetype != 9;
    };
