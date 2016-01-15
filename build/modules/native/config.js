var userConfig = $.acid.config = (config) => {
		if (config) {
			acidConfig(config);
		}
		_isDocumentReady(acidConfig);
	},
	acidConfig = function(config) {
		//save config
		$.cache.config = config;

		//extend config settings to acid
		_each_object(config,(item,key) =>{
			if (!$ext[key]) {
				$ext[key] = {};
			}
			$ext[key] = $merge($ext[key], item);
		});
	};
