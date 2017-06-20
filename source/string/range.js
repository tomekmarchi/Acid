// get characters in a range in a string
const insertInRange = (text, start, end, insert) => {
  return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
};
acid.insertInRange = insertInRange;
// start index from right of string
const rightString = (text, a) => {
  return text[getLength(text) - 1 - a];
};
acid.rightString = rightString;
const chunkString = (string, size) => {
  return stringMatchCall(string, new regExp(`(.|[\r\n]){1, ${size}}`, 'g'));
};
acid.chunkString = chunkString;
acid.initialString = (string) => {
  return string.slice(0, -1);
};
acid.restString = (string) => {
  return string.slice(1, getLength(string));
};
