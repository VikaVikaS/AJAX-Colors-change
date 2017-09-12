var view = new CarouselView();

var Controller = {
	handle: function() {
		 $('.js-color-change').each(function() {
		 	var cur = $(this),
		 		serverParent = $('.js-server-filters'),
		 		clientParent = $('.js-client-filters');
		 	
		 	serverParent.find(cur).on('click', function(e) {
		 		e.preventDefault();
		 		var colorId = $(e.target).data('color');
				Model.getServer(colorId, (data) => view.render(data, serverParent))
		 	})

		 	clientParent.find(cur).on('click', function(e) {
		 		e.preventDefault();
		 		var colorId = $(e.target).data('color');
				Model.getClient(colorId, (data) => view.render(data, clientParent))
		 	})
		 })
	}
}

Controller.handle();