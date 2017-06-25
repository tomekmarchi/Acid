import acid from '../namespace/index';
import { assign } from '../internal/object';
export const insertInRange = (text, start, end, insert) => {
  return text.slice(0, start) + insert + text.slice(end, text.length);
};
export const rightString = (text, a) => {
  return [text.length - 1 - a];
};
export const chunkString = (string, size) => {
  return string.match(new RegExp(`(.|[\r\n]){1, ${size}}`, 'g'));
};
export const initialString = (string) => {
  return string.slice(0, -1);
};
export const restString = (string) => {
  return string.slice(1, string.length);
};
assign(acid, {
  chunkString,
  initialString,
  insertInRange,
  restString,
  rightString,
});
