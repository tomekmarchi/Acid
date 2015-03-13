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
$.agent = {};
//acid platform information
$.acid = {
	//lib name
	name: 'ACID',
	//lib version
	version: 5.7,
	//platform type
	platform: 'development',
	//website
	site: 'http://acidjs.com',
	//demo
	demo: 'https://lnkit.com'
};
//log out the ACID version
console.log('ACIDjs v' + $.acid.version);