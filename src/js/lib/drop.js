// $(document).ready(function() {
// var dropShow = $('.drop__show');
// var dropHidden = $('.drop__hidden');
// $('.js-drop-back').click(function() {
//   	if (dropHidden.is(':visible')) {
//     dropHidden.slideUp();
//   	} else {
//   		if (dropHidden.is(':hidden')) {
//   		dropHidden.slideDown();
//     };
//   };
// });


$('.js-drop-back').click(function() {
  var _this = $(this);
  var parent = _this.parents('.drop');
  var wrap =  parent.find('.drop__wrap');
  var heightWrap = wrap.data('drop-height');
  var heightInner = parent.find('.drop__inner').height();

  console.log(heightWrap, heightInner);
  if ( _this.hasClass('open') ) {
  	wrap.height(heightWrap);
    $('.js-drop-icon').removeClass('open');
    _this.removeClass('open');
  }else {
    $('.js-drop-back').removeClass('open');
    $('.js-drop-icon').addClass('open');
    _this.addClass('open');
    wrap.height(heightInner);
  }
});
