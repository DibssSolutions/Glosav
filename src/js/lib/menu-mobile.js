var cross = $('.js-cross');
var crossTop = $('.js-cross-top');
var crossCenter = $('.js-cross-center');
var crossBottom = $('.js-cross-bottom');
var headerMobile =  $('.header-mobile');
var logo = $('.logo');
var logoOpen = $('.logo-open');
var menuMobileBg = $('.menu-mobile__bg');

cross.on('click touchend', function() {
  if (crossTop.hasClass('open-top'),
    crossCenter.hasClass('open-center'),
    crossBottom.hasClass('open-bottom'),
    headerMobile.hasClass('open'),
    menuMobileBg.hasClass('open')) {

  		(crossTop.removeClass('open-top'),
      logoOpen.removeClass('open'),
      logo.removeClass('open'),
  	   crossCenter.removeClass('open-center'),
  	   crossBottom.removeClass('open-bottom'),
  	   headerMobile.removeClass('open'),
  	   menuMobileBg.removeClass('open'));
  } else {
  		(crossTop.addClass('open-top'),
  	   crossCenter.addClass('open-center'),
      logo.addClass('open'),
  	  crossBottom.addClass('open-bottom'),
  	   headerMobile.addClass('open'),
  	   menuMobileBg.addClass('open'),
      logoOpen.addClass('open'));
  }
});
