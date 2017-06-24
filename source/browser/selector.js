import acid from '../namespace/index';
import { assign } from '../internal/object';
import { restString } from '../string/range';
const dotString = '.';
const poundString = '#';
const classTest = /^.[\w_-]+$/;
const tagTest = /^[A-Za-z]+$/;
const regexSpace = /\s/;
export const getByClass = document.getElementsByClassName.bind(document);
export const getByTag = document.getElementsByTagName.bind(document);
export const getById = document.getElementById.bind(document);
export const querySelector = document.querySelector.bind(document);
export const querySelectorAll = document.querySelectorAll.bind(document);
export const selector = (select) => {
  const firstLetter = select[0];
  switch (firstLetter) {
  case poundString:
    if (!regexSpace.test(select)) {
      return getById(restString(select));
    }
    break;
  case dotString:
    if (classTest.test(select)) {
      return getByClass(restString(select));
    }
    break;
  default:
    if (tagTest.test(select)) {
      return getByTag(select);
    }
  }
  return querySelectorAll(select);
};
assign(acid, {
  getByClass,
  getByTag,
  getById,
  querySelector,
  querySelectorAll,
  selector
});
