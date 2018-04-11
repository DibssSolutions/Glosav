$('.switcher-lang').click(function() {
  if ( $(this).hasClass('open') ) {
    $(this).removeClass('open');
  }else {
    $('.switcher-lang').removeClass('open');
    $(this).addClass('open');
    $(this).addClass('open');
  }
});
