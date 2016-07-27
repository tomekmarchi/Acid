var selector = $.selector = (select) => {
	var firtLetter = select[0];
	switch (firtLetter) {
		case poundString:
			if (!testRegex(regexSpace,select)) {
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
