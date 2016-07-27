//raw URL encode
var rawURLDecode = $.rawURLDecode = (string) =>{
        return decodeURIComponent(stringReplaceCall(string,rawURLDecodeRegex, function() {
            return '%25';
        }));
    },
    //html entities
    createHtmlEntities = $.htmlEntities = (string) =>{
		string=stringReplaceCall(string,andRegex, '&amp;');
		string=stringReplaceCall(string,lessThanRegex, '&lt;');
		string=stringReplaceCall(string,moreThanRegex, '&gt;');
		string=stringReplaceCall(string,doubleQuoteRegex, '&quot;');
        return stringReplaceCall(string,slashRegex, '&quot;');
    },
    sanitize = $.sanitize = (string) =>{
        return createHtmlEntities(rawURLDecode(string));
    },
    //decode URI Component
    duc = $.duc = decodeURIComponent,
    //encode URI Component
    euc = $.euc = encodeURIComponent;
