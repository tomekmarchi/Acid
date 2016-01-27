	var idSelector = $.getById = bindTo(documentNode.getElementById, documentNode),
		clsSelector = $.getByClass = bindTo(documentNode.getElementsByClassName, documentNode),
		tagSelector = $.getByTag = bindTo(documentNode.getElementsByTagName, documentNode),
		qsaSelector = $.querySelector = bindTo(documentNode.querySelectorAll, documentNode),
		qsSelector = $.querySelectorAll = bindTo(documentNode.querySelector, documentNode),
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
		acidLib = idSelector('acidjs'),
	    nodeMethodsValues = [toggleNode, showNode, hideNode, subNode, addNode, nodeAction, afterEndNode, beforeBeginNode, afterBeginNode, beforeEndNode,
	        nodeRemoveAttribute, nodeClassListToggle, nodeClassListRemove, nodeHasAttribute, nodeClassList, nodeClassListHas, nodeUpTo, cloneNode, centerNode, innerHTML, ohtml, nodeTextContent, nodeText, textValue, nodeValue, nodeSelect,
	        nodeClassname, matchesSelector, replaceChild, prepend, append, insertAfter, insertBefore, scrollInto, idNode, clsNode, tagNode, qsaNode, qsNode
	    ],
	    nodeMethodsKeys = ['toggle', 'show', 'hide', 'sub', 'add', 'act', 'ae', 'bb', 'ab',
	        'be', 'removeAttr', 'clTog', 'clRemove', 'hasAttr', 'cl', 'clHas', 'upTo', 'clone', 'center', 'html', 'ohtml', 'tc',
	        'txt', 'textValue', 'val', 'sel', 'cn', 'isMatch', 'replace', 'prepend', 'ap', 'after', 'before', 'scrollInto', 'id', 'cls', 'tag', 'qsa', 'qs'
	    ],
	    nodeOnlyMethodsReturn = [scrollInfo, resetHTML, nextNode, previousNode, parNode, lastNode, firstNode, owNode, ohNode, otNode, offsetNode, clwNode, clhNode, clearNode, removeNodeMethod],
	    nodeOnlyMethodNamesReturn = ['scrollInfo', 'resetHTML', 'next', 'previous', 'parNode', 'last', 'first', 'ow', 'oh', 'ot', 'offset', 'clw', 'clh', 'clear', 'remove'];
