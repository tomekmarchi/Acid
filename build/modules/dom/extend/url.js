//a tag DOM element used to parse URL
var aNode = createTag('a');
//parse a URL
$.linkParse = function(data) {
    aNode.href = data;
    var root = splitCall(aNode.hostname, dotString),
        pathName = aNode.pathname,
        len = getLength(root),
        root = root[len - 2] + dotString + root[len - 1];
    return pick(aNode,['href','protocol','hostname','port','search','hash','host'],{
		path: (pathName[0] !== slashString) ? slashString + pathName : pathName,
		pathroot: (pathName[0] !== slashString) ? splitCall(pathName, slashString)[0] : splitCall(pathName, slashString)[1],
		ssl: (data.protocol === 'http:') ? False : True,
		domain: root
	});
};
