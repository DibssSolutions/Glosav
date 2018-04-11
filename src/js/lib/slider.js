import $ from 'jquery';
import 'slick-carousel';


if ($(window).width() >= 768) {
	  $('.js-slider').slick({
			 centerMode: true,
			 slidesToShow: 3,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: false,
			 nextArrow: false,
			 responsive: [
			    {
			      breakpoint: 1024,
			      settings: 'unslick'
			    }
			    ]
	  });
} 

$(window).on('resize', function() {
  $('.js-slider').slick({
			 centerMode: true,
			 slidesToShow: 3,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: false,
			 nextArrow: false,
			 responsive: [
			    {
			      breakpoint: 1024,
			      settings: 'unslick'
			    }
			    ]
	  });
});
