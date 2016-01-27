var userConfig = $.acid.config = (config) => {
		if (config) {
			acidConfig(config);
		}
		isDocumentReady(acidConfig);
	},
	acidConfig = function(config) {
		//save config
		$.cache.config = config;

		//extend config settings to acid
		eachObject(config,(item,key) =>{
			if (!extendAcidConfig[key]) {
				extendAcidConfig[key] = {};
			}
			extendAcidConfig[key] = objectAssign(extendAcidConfig[key], item);
		});
	};
