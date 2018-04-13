var trigerPopap = $('[data-popap-triger]');
var close = $('.js-back-popap');
trigerPopap.click(function() {
  var popapName = $(this).data('popap-triger');
  // console.log(propName);
  	$('[data-popap="'+popapName+'"]').addClass('open');
  	$('body').addClass('open');
});


close.click(function() {
  	 $('.popap-circle').removeClass('open');
  	 $('.slider__slide').removeClass('open');
});

var popapCircles =  $('[data-circle]'); 

popapCircles.each(function() {
  var _this = $(this);
  var circleslenghts = _this.find('.popap-circle__item').length;
  // console.log(circleslenghts);
  _this[0].setAttribute('data-circle', circleslenghts);

});

