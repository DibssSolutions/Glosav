var closeCont = $('.js-napr-close'),
  	popap = $('.popap-napravlenie'),
  	client = $('.user__item');


client.click(function() {
  popap.addClass('open');
});

closeCont.click(function() {
	 popap.removeClass('open');
});
