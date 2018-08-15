Array.prototype.remove = function (item) {
	// Find and remove item from an array
	var i = this.indexOf(item);
	if(i != -1) {
		this.splice(i, 1);
	}
};