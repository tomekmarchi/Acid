self.onmessage = function(event) {

	//default vars
	var og=event.data,
		msg=og.msg,
		credits=og.credits;

	//configure
	if(lucy){
		lucy.credits(credits.string,credits.unid);
	}


	//respond to msgs
	if(msg){
		var fn=msg.fn;
		if(fn){
			var json=msg.json;

			if(json){
				msg.json=JSON.parse(json);
			}

			var data=self[fn](msg,credits);

			if(data){
				if(og.call){
					data.call=og.call;
					data.event='message';
				}
				else if(og.event){
					if(!data.event){
						data.event=og.event;
					}
				}
				if(!data.event){
					data.event='message';
				}
				postMessage(data);
			}
		}
	}

};