var _window = _global,
    _htmlcollection = HTMLCollection,
    _HTMLElement = HTMLElement,
    _nodelist = NodeList,
    _node = Node,
    _Element = Element,
    _document = document,
    _frag = _document.createDocumentFragment,
    _createElement = _document.createElement,
    //get library script
    //dom objects
    acidLib = _document.getElementById('acidjs'),
    //get prefix data for super safe prototypes
    acidLibPrefix = (acidLib) ? acidLib.getAttribute('data-prefix') || '' : '',
    _body,
    //cache document head
    head_node = _document.head,
    //cache div for DOM functions
    _empty_node_div = _createElement.call(_document, 'div'),
    node_prototype = _node[$prototype],
    //nodelist prototype
    nodelist_prototype = _nodelist[$prototype],
    //Element.prototype
    _Element_prototype = _Element[$prototype],
    //htmlcollection prototype
    htmlcollection_prototype = _htmlcollection[$prototype];
