var lang = $('.switcher-lang');

lang.click(function(event) {
  if ( $(this).hasClass('open') ) {
    $(this).removeClass('open');
  }else {
    lang.removeClass('open');
    $(this).addClass('open');
  }
  event.stopPropagation();
});

$('body').click(function() {
  lang.removeClass('open');
});
