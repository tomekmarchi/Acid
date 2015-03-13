var _window = _global,
	_htmlcollection = HTMLCollection,
	_HTMLElement=HTMLElement,
	nodelist = NodeList,
	node = Node,
	_Element=Element,
	_document = document,
	_frag=_document.createDocumentFragment,
	_createElement=_document.createElement;

//get library script
//dom objects
var acid_lib = _document.getElementById('acid-lib'),
	//get prefix data for super safe prototypes
	acid_lib_prefix = (acid_lib)? acid_lib.getAttribute('data-prefix') : '',
	acid_lib_avoid = (acid_lib)? acid_lib.getAttribute('data-avoid') : '',
	avoid=(acid_lib_avoid)? acid_lib_avoid : false,
	acid_lib_prefix = (acid_lib_prefix)? acid_lib_prefix : '',
	_onBodyReady = [],
	_body={},
	//cache document head
	head_node = _document.getElementsByTagName('head')[0];
