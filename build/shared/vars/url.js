var $protocol = location.protocol,
	//websocket protocol type
	$protocol_socket = ('$protocol' == 'http:') ? 'ws' : 'wss',
	$hostname = location.hostname;