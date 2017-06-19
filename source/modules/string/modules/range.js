// get characters in a range in a string
const insertInRange = (text, start, end, insert) => {
  return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
};
$.insertInRange = insertInRange;
// start index from right of string
const rightString = (text, a) => {
  return text[getLength(text) - 1 - a];
};
$.rightString = rightString;
const chunkString = (string, size) => {
  return stringMatchCall(string, new regExp(`(.|[\r\n]){1, ${size}}`, 'g'));
};
$.chunkString = chunkString;
$.initialString = (string) => {
  return string.slice(0, -1);
};
$.restString = (string) => {
  return string.slice(1, getLength(string));
};
