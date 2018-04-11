var search = $('.js-icon');
var field = $('.js-field');

search.click(function() {
  if (field.hasClass('open')) {
  	(field.removeClass('open'));
  } else {
  	 (field.addClass('open'));
  }
});
