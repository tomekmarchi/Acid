extend(window_extend, Window[$prototype]); //window
//DOM
//single node only operations
extend(_domMethods.nodeOnly, node_prototype);
//lists without looping
extend(_domMethods.listOnly, nodelist_prototype);
extend(_domMethods.listOnly, htmlcollection_prototype);