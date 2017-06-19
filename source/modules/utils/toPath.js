$.toPath = (string) => {
  return string.replace(regexCloseBracket, emptyString).split(regexToPath);
};
