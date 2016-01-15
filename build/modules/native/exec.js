$.exec=function () {
	return _document.execCommand.apply(_document,_toArray(arguments));
};
