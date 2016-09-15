//uppercase first letter for all
var ucFirstChar = (string) => {
		return toUpperCaseCall(charAtCall(string, 0));
	},
	addRest = $.restString = (string, num) => {
		return substrCall(string, num || 1);
	},
	ucFirst = $.ucFirst = function (string) {
		return ucFirstChar(string) + addRest(string);
	},
	ucFirstAll = $.ucFirstAll = function (string) {
		return joinArray(mapArray(splitCall(string, spaceCharacter), function (item) {
			return ucFirst(item);
		}), ' ');
	},
	//uppercase first letter lower case the rest
	ucFirstOnly = $.ucFirstOnly = function (string) {
		return ucFirstChar(string) + toLowerCaseCall(addRest(string));
	},
	//uppercase first letter lower case the rest all
	ucFirstOnlyAll = $.ucFirstOnlyAll = function (string) {
		return joinArray(mapArray(splitCall(string, spaceCharacter), function (item) {
			return ucFirstOnly(item);
		}), ' ');
	},
	//Returns the camel cased string
	camelCase = $.camel = (string) => {
		string = ucFirstAll(
			stringReplaceCall(
				stringReplaceCall(string, regexUnderscore, spaceCharacter),
				regexDash, spaceCharacter)
		);
		return toLowerCaseCall(charAtCall(string, 0)) + stringReplaceCall(substrCall(string, 1), regexSpaceglobal, emptyString);
	},
	setStringCase = (string, caseLetter) => {
		return stringReplaceCall(stringReplaceCall(toLowerCaseCall(string), regexUnderscore, spaceCharacter), regexSpaceglobal, caseLetter);
	},
	//Returns the kebab cased string
	kebabCase = $.kebab = (string) => {
		return setStringCase(string, dashString);
	},
	//Returns the snake cased string
	snakeCase = $.snake = (string) => {
		return setStringCase(string, dashString);
	},
	//returns the trunced version of the string
	truncate = $.truncate = (string, amount) => {
		if (getLength(string) > amount) {
			string = stringSliceCall(string, 0, amount);
		}
		return string;
	},
	//returns the trunced version of the string starting from the right
	truncateLeft = $.truncateLeft = (string, amount) => {
		var length = getLength(string);
		if (length > amount) {
			string = substrCall(string, amount, length);
		}
		return string;
	},
	//returns the trunced version of the string
	truncateWord = $.truncateWord = (string, amount) => {
		var cut = indexOfCall(string, ' ', amount);
		if (amount != -1) {
			string = substringCall(string, 0, amount);
		}
		return string;
	};
