var removeClass = true;
var dots = $('.js-dots');
var close = $('.js-close');

dots.click(function() {
  $(this).parents('.breadcrumbs')
    .addClass('open');
  removeClass = false;
});

close.click(function() {
  $(this).parents('.breadcrumbs')
    .removeClass('open');
});

$('body').click(function() {
  if (removeClass) {
    $('.breadcrumbs').removeClass('open');
  }
  removeClass = true;
});

$(window).on('resize', function() {
  $('.breadcrumbs')
    .removeClass('open');
});
