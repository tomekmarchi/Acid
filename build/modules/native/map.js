$.weakMap=function(items){
	return new weak_map(items);
};

$.map=function(items){
	return new _map(items);
};

var weakEvents,
	weakData;

if(weak_map){
	$.weakEvent=weakEvents=new weak_map();

	$.weakData=weakData=new weak_map();
}
