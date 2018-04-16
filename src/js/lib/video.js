// var video = $('.video__video iframe');
// // $('.js-back-video').click(function() {
// //   slider.noUiSlider.reset();
// //   	 $('.slider').removeClass('close');
// //   	 $('.video').removeClass('open');
// //   	 $('body').removeClass('open');
// //   	 $('.js-if').attr('src','');


// // });
var promoVideo = $('.js-promo-video');
promoVideo.click(function() {
  	 $('.video').addClass('open');
  	 $('body').addClass('open');
  	 $('.js-if').attr('src','https://www.youtube.com/embed/2se9Thz5zyg?ecver=2');
});

$('.js-back-video').click(function() {
  	 $('.video').removeClass('open');
  	 $('body').removeClass('open');
  	 $('.js-if').attr('src','');
});
