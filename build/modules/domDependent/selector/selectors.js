const selector = (select) => {
  const firstLetter = select[0];
  switch (firstLetter) {
  case poundString:
    if (!testRegex(regexSpace, select)) {
      return idSelector(stringSliceCall(select, 1));
    }
    break;
  case dotString:
    if (testRegex(classTest, select)) {
      return clsSelector(stringSliceCall(select, 1));
    }
    break;
  default:
    if (testRegex(tagTest, select)) {
      return tagSelector(select);
    }
  }
  return qsaSelector(select);
};
$.selector = selector;
