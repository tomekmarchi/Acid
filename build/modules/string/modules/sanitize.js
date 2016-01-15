//raw URL encode
var _rawURLDecode = function(string) {
        return decodeURIComponent(string.replace(rawURLDecode_regex, function() {
            return '%25';
        }));
    },
    //html entities
    _htmlEntities = function(string) {
        return string.replace(and_regex, '&amp;')
		.replace(less_than_regex, '&lt;')
		.replace(more_than_regex, '&gt;')
		.replace(double_quote_regex, '&quot;')
		.replace(slash_regex, '&quot;');
    },
    _sanitize = function(string) {
        return _htmlEntities(_rawURLDecode(string));
    },
    //decode URI Component
    _duc = function() {
        return decodeURIComponent(this);
    },
    //encode URI Component
    _euc = function() {
        return encodeURIComponent(this);
    };
$.htmlEntities = _htmlEntities;
$.rawURLDecode = _rawURLDecode;
$.sanitize = _sanitize;
$.duc = _duc;
$.euc = _euc;
