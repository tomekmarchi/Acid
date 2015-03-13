var event_extend = {
	isEnter: function () { //checks if this an enter key
		var i = this.keyCode;
		if (i == 13) {
			return true;
		}
		return false;
	}
};