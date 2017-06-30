import acid from '../namespace/index';
import { assign } from '../internal/object';
const regexToPath = /\.|\[/;
const regexCloseBracket = /]/g;
const emptyString = '';
/**
toPath replaces a closed bracket with an empty string and splits on an opening bracket and periods.
*/
export const toPath = (string) => {
  return string.replace(regexCloseBracket, emptyString).split(regexToPath);
};
assign(acid, {
  toPath,
});
