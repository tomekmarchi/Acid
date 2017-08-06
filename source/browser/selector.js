import acid from '../namespace/index';
import { assign } from '../internal/object';
import { restString } from '../string/range';
const dotString = '.';
const poundString = '#';
const classTest = /^.[\w_-]+$/;
const tagTest = /^[A-Za-z]+$/;
const regexSpace = /\s/;
/**
  * Wrapper around getElementsByClassName.
  *
  * @function getByClass
  * @category browser
  * @ignoreTest
  * @type {Function}
*/
export const getByClass = document.getElementsByClassName.bind(document);
/**
  * Wrapper around getElementsByTagName.
  *
  * @function getByTag
  * @category browser
  * @ignoreTest
  * @type {Function}
*/
export const getByTag = document.getElementsByTagName.bind(document);
/**
  * Wrapper around getElementsByIdName.
  *
  * @function getById
  * @category browser
  * @ignoreTest
  * @type {Function}
*/
export const getById = document.getElementById.bind(document);
/**
  * Wrapper around querySelector.
  *
  * @function querySelector
  * @category browser
  * @ignoreTest
  * @type {Function}
*/
export const querySelector = document.querySelector.bind(document);
/**
  * Wrapper around querySelectorAll.
  *
  * @function querySelectorAll
  * @category browser
  * @ignoreTest
  * @type {Function}
*/
export const querySelectorAll = document.querySelectorAll.bind(document);
/**
  * Returns relevant DOM node.
  *
  * @function selector
  * @category browser
  * @ignoreTest
  * @param {string} select - String to be evaluated.
  * @type {Function}
  * @returns {Node} - Returns a DOM node.
  *
  * @example
  * selector('#node');
  * // => <div id="node"></div>
*/
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
  getById,
  getByTag,
  querySelector,
  querySelectorAll,
  selector
});
