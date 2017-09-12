var Model = {
	getServer: function(colorId, callback) {
 		$.ajax({
			url:'colors.json?color=' + colorId,
			cache: false,
			success:function(data) {
				var 
					imgsArray = [];

				for(var i = 0; i < data.length; i++) {
					imgsArray = data[i].imgs;
				}
				callback(imgsArray);
			}
		});
	},
	getClient: function(colorId, callback) {
		$.ajax({
			url:'colors.json',
			cache: false,
			success:function(data) {
				var images = [];
			    for(var i = 0; i < data.length; i++) {
			    	if (data[i].id == colorId) {
			      		return callback(data[i].imgs)
			     	}
			    }
			}
		});
	}
}
