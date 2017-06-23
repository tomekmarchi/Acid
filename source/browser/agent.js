import acid from '../namespace/index';
import { assign, keys } from '../internal/object';
import { eachArray } from '../array/each';
const isAgent = (string) => {
  return (string) ? isAgent[string] : keys(isAgent);
};
let userAgentNormalized = navigator.userAgent.toLowerCase();
userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
const userAgentSplit = userAgentNormalized.split(/ |\//);
eachArray(userAgentSplit, (item) => {
  isAgent[item] = true;
});
assign(acid, {
  isAgent
});
