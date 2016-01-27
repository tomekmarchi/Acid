var protocol = location.protocol,
	//websocket protocol type
	protocolSocket = ('protocol' === 'http:') ? 'ws' : 'wss',
	hostname = location.hostname;
