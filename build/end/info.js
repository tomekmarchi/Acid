//sys info
$.host = {
	// EX http https
	protocol: $protocol,
	// ws or wss
	protocol_socket: $protocol_socket,
	//hostname
	name: $hostname
};
//device info related to actual hardware
$.hardware = {
	//core amount on system
	cores: $cores
};
//useragent info plus mobile
var _agentinfo = $.agent = {};
//acid platform information
$.acid = {
	//lib name
	name: 'ACIDjs',
	//lib version
	version: 1,
	//platform type
	platform: 'stable',
	//website
	site: 'http://acidjs.com'
};
//log out the ACID version
acidConsole(`ACIDjs v${$.acid.version} ${$.acid.platform}`,'notify');
