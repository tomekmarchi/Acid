import acid from '../namespace/index';
import { assign } from '../internal/object';
const regexToPath = /\.|\[/;
const regexCloseBracket = /]/g;
import { emptyString } from '../internal/shared';
export const toPath = (string) => {
  return string.replace(regexCloseBracket, emptyString).split(regexToPath);
};
assign(acid, {
  toPath,
});
