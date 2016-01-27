//sys info
$.host = {
	// EX http https
	protocol: protocol,
	// ws or wss
	protocolSocket: protocolSocket,
	//hostname
	name: hostname
};
//device info related to actual hardware
$.hardware = {
	//core amount on system
	cores: systemCores
};
//useragent info plus mobile
var agentInfo = $.agent = {};
//acid platform information
$.acid = {
	name: 'ACIDjs',
	version: 1
};
