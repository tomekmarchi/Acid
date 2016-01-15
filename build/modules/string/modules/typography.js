//uppercase first letter for all
var spaceCharacter = ' ',
    _ucFirst = function(string) {
        return string.charAt(0).toUpperCase() + string.substr(1);
    },
    ucFirstAll = function(string) {
        var array = string.split(spaceCharacter),
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            array[i] = item.charAt(0).toUpperCase() + item.substr(1);
        }
        return array.join(' ');
    },
    //uppercase first letter lower case the rest
    ucFirstOnly = function(string) {
        return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    },
    //uppercase first letter lower case the rest all
    ucFirstOnlyAll = function(string) {
        var array = string.split(spaceCharacter),
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            array[i] = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
        }
        return array.join(' ');
    },
    //Returns the camel cased string
    camelCase = function(stringOriginal) {
        var string = ucFirstAll(stringOriginal.replace(regex_underscore, spaceCharacter).replace(regex_dash, spaceCharacter));
        return (string.charAt(0).toLowerCase() + string.substr(1)).replace(regex_space_global, '');
    },
    //Returns the kebab cased string
    kebabCase = function(stringOriginal) {
        return stringOriginal.toLowerCase().replace(regex_underscore, spaceCharacter).replace(regex_space_global, '-');
    },
    //Returns the snake cased string
    snakeCase = function(stringOriginal) {
        return stringOriginal.toLowerCase().replace(regex_dash, spaceCharacter).replace(regex_space_global, '_');
    },
    //returns the trunced version of the string
    truncate = function(stringOriginal, amount) {
        var string = stringOriginal,
            length = string.length;
        if (length > amount) {
            return string.slice(0, amount);
        }
        return string;
    },
    //returns the trunced version of the string starting from the right
    truncateLeft = function(stringOriginal, amount) {
        var string = stringOriginal,
            length = string.length;
        if (length > amount) {
            return string.substr(amount, length);
        }
        return string;
    },
    //returns the trunced version of the string
    truncateWord = function(stringOriginal, amount) {
        var string = stringOriginal,
            length = string.length;
        if (length > amount) {
            var stringLength = 0;
            var newString = '';
            var words = string.split(' ');
            var wordsLength = words.length;
            var item;
            var possibleNew;
            for (var i = 0; i < wordsLength; i++) {
                item = words[i] + ' ';
                possibleNew = item.length + stringLength;
                if (possibleNew < amount) {
                    stringLength = possibleNew;
                    newString = newString + item;
                } else {
                    break;
                }
            }
            return newString.trim();
        }
        return string;
    },
    //repeat
    repeatWord = function(stringOriginal, amount) {
        if (!amount) {
            return '';
        }
        if (amount == 1) {
            return stringOriginal;
        }
        var string = stringOriginal,
            temp = string;
        for (var i = 1; i < amount; i++) {
            if (i > 0) {
                var temp = temp + string;
            }
        }
        return temp;
    };

$.ucFirst = _ucFirst;
$.ucFirstAll = ucFirstAll;
$.ucFirstOnly = ucFirstOnly;
$.ucFirstOnlyAll = ucFirstOnlyAll;
$.camel = camelCase;
$.kebab = kebabCase;
$.snake = snakeCase;
$.truncate = truncate;
$.truncateLeft = truncateLeft;
$.truncateWord = truncateWord;
$.repeat = repeatWord;
