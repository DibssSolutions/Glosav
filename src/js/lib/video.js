var video = $('.video__video iframe');
$('.js-back-video').click(function() {
  	 $('.slider').removeClass('close');
  	 $('.video').removeClass('open');
  	 $('body').removeClass('open');
  	 $('.js-if').attr('src','');
});
$('.promo-content__wrap-video').click(function() {
  	 $('.video').addClass('open');
  	 $('.js-if').attr('src','https://www.youtube.com/embed/2se9Thz5zyg?ecver=2');
});
