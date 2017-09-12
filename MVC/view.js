function CarouselView() {
    var mainCarousel = $('.js-main-carousel'),
        thumbsCarousel = $('.js-thumbs-carousel'),
        mainOptions = {
            asNavFor: thumbsCarousel
        },
        thumbsOptions = {
            asNavFor: mainCarousel,
            slidesToShow: 4,
            infinite:true
        };
    this.init = function() {
    	if (mainCarousel.length && thumbsCarousel.length) {
	        mainCarousel.slick(mainOptions);
	        thumbsCarousel.slick(thumbsOptions)
	    }
    }
    

    this.render = function(data, parent) {
        parent.find(mainCarousel).slick('unslick');
        parent.find(thumbsCarousel).slick('unslick');

        parent.find(mainCarousel).html(' ');
        parent.find(thumbsCarousel).html(' ');

        for (var i = 0; i < data.length; i++) {
            var mainItem = '<div class="carousel__main-item"> <img src="' + data[i] + '" alt=""></div>',
                thumbsItem = '<div class="carousel__thumbs-item"><img src="' + data[i] + '" alt=""> </div>';

            parent.find(mainCarousel).append(mainItem);
            parent.find(thumbsCarousel).append(thumbsItem);
        }
        parent.find(thumbsCarousel).slick(thumbsOptions);
        parent.find(mainCarousel).slick(mainOptions);
        
    }
}

var init = new CarouselView();

init.init();