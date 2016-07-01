	var idSelector = $.getById = bindTo(documentNode.getElementById, documentNode),
		clsSelector = $.getByClass = bindTo(documentNode.getElementsByClassName, documentNode),
		tagSelector = $.getByTag = bindTo(documentNode.getElementsByTagName, documentNode),
		qsSelector = $.querySelector = bindTo(documentNode.querySelector, documentNode),
		qsaSelector = $.querySelectorAll = bindTo(documentNode.querySelectorAll, documentNode),
		selector = $.selector = (select) => {
			var firtLetter = select[0];
			if (firtLetter === poundString) {
				if (!regexSpace.test(select)) {
					return idSelector(stringSliceCall(select, 1));
				}
			} else if (firtLetter === dotString) {
				if (testRegex(classTest, select)) {
					return clsSelector(stringSliceCall(select, 1));
				}
			} else if (testRegex(tagTest, select)) {
				return tagSelector(select);
			}
			return qsaSelector(select);
		},
		acidLib = idSelector('acidjs');
