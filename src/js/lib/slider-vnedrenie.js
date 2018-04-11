$('.js-slider-vnedrenie').slick({
			 slidesToShow: 5,
			 slidesToScroll: 1,
			 adaptiveHeight: true,
			 draggable: true,
			 prevArrow: '.slider-vnedrenie__prev',
			 nextArrow: '.slider-vnedrenie__next',
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
