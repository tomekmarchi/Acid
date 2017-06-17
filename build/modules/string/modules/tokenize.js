// tokenize split by groups of characters that are not whitespace
$.tokenize = (string) => {
  return stringMatchCall(string, /\S+/g) || [];
};
// match by alphanumeric+underscore
$.words = (string) => {
  return stringMatchCall(string, /\w+/g) || [];
};
