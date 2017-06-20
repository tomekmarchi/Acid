// tokenize split by groups of characters that are not whitespace
acid.tokenize = (string) => {
  return stringMatchCall(string, /\S+/g) || [];
};
// match by alphanumeric+underscore
acid.words = (string) => {
  return stringMatchCall(string, /\w+/g) || [];
};
