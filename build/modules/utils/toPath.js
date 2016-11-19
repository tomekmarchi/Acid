$.toPath = (string) =>{
	return string.replace(regexOpenBracket,emptyString).split(regexToPath);
};
