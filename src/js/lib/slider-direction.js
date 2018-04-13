var prev = $('.slider-direction__prev'),
  	next = $('.slider-direction__next'),
  	open = $('.slider-direction__btn'),
  	close = $('.slider-direction__btn-close');

$('.js-slider-direction').slick({
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: '.slider-direction__prev',
			 nextArrow: '.slider-direction__next',
			 responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			      	 slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			      	 slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			      	 slidesToShow: 1,
			      }
			    }
			    ]
});


$('.js-btn-slider-direction').click(function() {
  $('.js-slider-direction').slick('unslick');
  $('.js-slider-direction').addClass('open');
  $(prev).addClass('open');
  $(next).addClass('open');
  $(close).addClass('open');
  $(open).addClass('open');
});


$(close).click(function() {
  $('.js-slider-direction').removeClass('open');
  $(prev).removeClass('open');
  $(next).removeClass('open');
  $(close).removeClass('open');
  $(open).removeClass('open');
  $('.js-slider-direction').slick({
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: '.slider-direction__prev',
			 nextArrow: '.slider-direction__next'
	  });
});

$('window').on('resize', function() {
  $('.js-slider-direction').slick({
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: '.slider-direction__prev',
			 nextArrow: '.slider-direction__next',
			 responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			      	 slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			      	 slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			      	 slidesToShow: 1,
			      }
			    }
			    ]
  });
});
