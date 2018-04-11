var login = $('.js-login'),
  	popap = $('.popap'),
  	close = $('.js-back-close');

login.click(function() {
  	 popap.addClass('open');
});

close.click(function() {
  	 popap.removeClass('open');
});
